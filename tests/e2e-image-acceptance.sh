#!/bin/sh

set -eu

artifact_directory="$(mktemp -d "${TMPDIR:-/tmp}/popgas-website-image.XXXXXX")"
run_id="$(basename "$artifact_directory" | tr '[:upper:]' '[:lower:]')"
image="popgas/e2e-website:browser-isolation-$run_id"
container="popgas-website-browser-isolation-$run_id"
owner="popgas-website-browser-isolation-$run_id"
revision="$(git rev-parse HEAD)"
claimed_image=false
claimed_container=false

case "$revision" in
  [0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f]*) ;;
  *) echo 'website acceptance requires a committed revision' >&2; exit 1 ;;
esac

remove_owned_container() {
  if docker container inspect "$container" >/dev/null 2>&1 \
    && [ "$(docker container inspect -f '{{index .Config.Labels "com.popgas.e2e.owner"}}' "$container")" = "$owner" ]; then
    docker container rm --force "$container" >/dev/null 2>&1 || true
  fi
}

remove_owned_image() {
  if docker image inspect "$image" >/dev/null 2>&1 \
    && [ "$(docker image inspect -f '{{index .Config.Labels "com.popgas.e2e.owner"}}' "$image")" = "$owner" ]; then
    docker image rm "$image" >/dev/null 2>&1 || true
  fi
}

cleanup() {
  [ "$claimed_container" = false ] || remove_owned_container
  [ "$claimed_image" = false ] || remove_owned_image
  rm -rf "$artifact_directory"
}
trap cleanup EXIT INT TERM

if docker container inspect "$container" >/dev/null 2>&1 \
  || docker image inspect "$image" >/dev/null 2>&1; then
  echo 'website acceptance resource name already exists' >&2
  exit 1
fi

available_kib="$(df -Pk . | awk 'NR == 2 { print $4 }')"
if [ "$available_kib" -lt 4194304 ]; then
  echo "website image build requires 4 GiB free; available-kib=$available_kib" >&2
  exit 1
fi

claimed_image=true
docker build \
  --label "com.popgas.e2e.owner=$owner" \
  --build-arg "VCS_REF=$revision" \
  --build-arg NEXT_PUBLIC_ERP_URL=http://localhost:5173 \
  --tag "$image" \
  --file e2e.Dockerfile \
  .

POPGAS_WEBSITE_CONTRACT_IMAGE="$image" \
POPGAS_WEBSITE_CONTRACT_REVISION="$revision" \
  npx --yes node@22 ./node_modules/vitest/vitest.mjs run \
    tests/e2e-image-contract.test.ts tests/e2e-image-migration.test.ts

runtime_user="$(docker image inspect --format '{{.Config.User}}' "$image")"
[ "$runtime_user" = nextjs ] || [ "$runtime_user" = 1001 ]

claimed_container=true
docker run \
  --detach \
  --name "$container" \
  --label "com.popgas.e2e.owner=$owner" \
  --env DATABASE_DRIVER=postgres \
  --env DATABASE_URL=postgresql://unused:unused@127.0.0.1:5432/unused \
  --publish 127.0.0.1::3000 \
  "$image" >/dev/null

attempt=0
while [ "$attempt" -lt 30 ]; do
  health="$(docker container inspect --format '{{.State.Health.Status}}' "$container")"
  [ "$health" != healthy ] || break
  [ "$health" != unhealthy ] || { echo 'website container became unhealthy' >&2; exit 1; }
  attempt=$((attempt + 1))
  sleep 1
done
[ "$health" = healthy ]

port="$(docker port "$container" 3000/tcp | sed -n '1s/.*://p')"
[ -n "$port" ]
origin="http://127.0.0.1:$port"

curl --fail --silent --show-error --dump-header "$artifact_directory/headers" --output "$artifact_directory/index.html" "$origin/"
node - "$artifact_directory/index.html" <<'NODE'
const { readFileSync } = require('node:fs');
const html = readFileSync(process.argv[2], 'utf8');
if (!/PopGás Sistema/i.test(html) || /Conta Fácil|_nuxt/i.test(html)) process.exit(1);
if (!html.includes('http://localhost:5173/signup')) process.exit(1);
NODE
grep -Fiq "content-security-policy: default-src 'self'" "$artifact_directory/headers"

docker cp "$container:/app/.next/static" "$artifact_directory/static" >/dev/null
npx --yes node@22 tests/helpers/e2e-artifact-audit.mjs "$artifact_directory"
npx --yes node@22 tests/browser-isolation.mjs "$origin"

if mutation_output="$(npx --yes node@22 tests/browser-isolation.mjs "$origin" --delayed-external-mutation 2>&1)"; then
  echo 'browser journal accepted a delayed external mutation' >&2
  exit 1
fi
case "$mutation_output" in
  *'page-owned external request: http://delayed-external.invalid:'*) ;;
  *) echo 'delayed mutation failed for an unexpected reason' >&2; exit 1 ;;
esac

container_image="$(docker container inspect --format '{{.Image}}' "$container")"
image_id="$(docker image inspect --format '{{.Id}}' "$image")"
[ "$container_image" = "$image_id" ]

echo "website-image-acceptance=pass revision=$revision migrations=twice health=healthy http=200 csp=effective browser-external=0 mutation=blocked"
