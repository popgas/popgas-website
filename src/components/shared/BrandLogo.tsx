import Image from 'next/image';

/**
 * Logo PopGás: versão colorida no tema claro e versão com "pop" claro no escuro.
 * A versão escura tem alt vazio para leitores de tela não lerem o logo duas vezes.
 */
export function BrandLogo({ priority = false }: { priority?: boolean }) {
  return (
    <>
      <Image
        src="/images/png_cor-principal.png"
        alt="PopGás Sistema"
        width={120}
        height={60}
        className="h-12 sm:h-16 w-auto dark:hidden"
        priority={priority}
      />
      <Image
        src="/images/logo-dark.png"
        alt=""
        width={719}
        height={178}
        className="hidden dark:block h-[26px] sm:h-[32px] w-auto"
        priority={priority}
      />
    </>
  );
}
