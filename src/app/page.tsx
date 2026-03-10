import AppCarousel from "@/components/AppCarousel";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          paddingTop: "120px",
          paddingBottom: "100px",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
            {/* Hero Text */}
            <div className="flex-1 text-center md:text-left">
              <h1
                className="font-bold leading-tight"
                style={{ color: "#24355A", fontSize: "42px", lineHeight: "52px" }}
              >
                Conheça nosso aplicativo
              </h1>
              <p
                className="mt-6 leading-relaxed"
                style={{ color: "#222222", fontSize: "15px", lineHeight: "25px" }}
              >
                Só no aplicativo PopGas você encontra um preço bom, muitos
                brindes, uma ótima qualidade de atendimento e uma entrega super
                rápida!
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                {/* Android button - filled green */}
                <a
                  href="https://popgas.com.br/playstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 transition-all duration-300 hover:opacity-80 hover:shadow-lg"
                  style={{
                    border: "2px solid #729E2F",
                    borderRadius: "7px",
                    padding: "11px 30px",
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.75px",
                    color: "#ffffff",
                    backgroundColor: "#729E2F",
                    textDecoration: "none",
                  }}
                >
                  {/* Android icon */}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.341a.996.996 0 0 0-.993.993v3.328a.996.996 0 0 1-.993.993H8.464a.996.996 0 0 1-.993-.993v-3.328a.996.996 0 0 0-1.987 0v3.328A2.985 2.985 0 0 0 8.464 22.65h7.073a2.985 2.985 0 0 0 2.979-2.979v-3.328a.996.996 0 0 0-.993-.993zM6.478 14.348h11.044a2.985 2.985 0 0 0 2.979-2.979V5.336A2.985 2.985 0 0 0 17.523 2.35H6.478A2.985 2.985 0 0 0 3.5 5.336v6.033a2.985 2.985 0 0 0 2.979 2.979zm-.993-9.012a.996.996 0 0 1 .993-.993h11.044a.996.996 0 0 1 .993.993v6.033a.996.996 0 0 1-.993.993H6.478a.996.996 0 0 1-.993-.993V5.336zM3.5 15.341a.996.996 0 0 0-.993.993v3.328A2.985 2.985 0 0 0 5.485 22.65a.996.996 0 0 0 0-1.987.996.996 0 0 1-.993-.993v-3.328a.996.996 0 0 0-.993-.993zm17.007 0a.996.996 0 0 0-.993.993v3.328a.996.996 0 0 1-.993.993.996.996 0 0 0 0 1.987 2.985 2.985 0 0 0 2.979-2.979v-3.328a.996.996 0 0 0-.993-.993zM15.536 1.357l1.29-1.29a.497.497 0 1 0-.703-.703l-1.438 1.438A5.963 5.963 0 0 0 12 0a5.963 5.963 0 0 0-2.686.802L7.876-.636a.497.497 0 1 0-.703.703l1.29 1.29A5.963 5.963 0 0 0 6.478 5.34h11.044a5.963 5.963 0 0 0-1.987-3.984zM9.457 3.356a.696.696 0 1 1 .696-.696.696.696 0 0 1-.696.696zm5.086 0a.696.696 0 1 1 .696-.696.696.696 0 0 1-.696.696z" />
                  </svg>
                  BAIXAR ANDROID
                </a>
                {/* iPhone button - filled green */}
                <a
                  href="https://apps.apple.com/br/app/popgas-entrega-de-g%C3%A1s/id1500823127"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 transition-all duration-300 hover:opacity-80 hover:shadow-lg"
                  style={{
                    border: "2px solid #729E2F",
                    borderRadius: "7px",
                    padding: "11px 30px",
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.75px",
                    color: "#ffffff",
                    backgroundColor: "#729E2F",
                    textDecoration: "none",
                  }}
                >
                  {/* Apple icon */}
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  BAIXAR IPHONE
                </a>
              </div>
            </div>

            {/* YouTube Video */}
            <div className="flex flex-1 items-center justify-center">
              <div className="w-full max-w-[560px] overflow-hidden rounded-lg shadow-xl">
                <div className="relative" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube.com/embed/Tt6e39DwdXs"
                    title="PopGas - Vídeo Explicativo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Carousel Section */}
      <section className="section-padding bg-bg-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <h2
                className="font-bold"
                style={{ color: "#24355A", fontSize: "32px", lineHeight: "42px" }}
              >
                Desenvolvido para oferecer a melhor experiência para nossos
                clientes
              </h2>
              <p
                className="mt-5"
                style={{ color: "#222222", fontSize: "15px", lineHeight: "25px" }}
              >
                Ao fazer seu pedido, você pode escolher quais produtos você quer,
                escolher os brindes que mais gosta, a forma que deseja realizar o
                pagamento e indicar para seus amigos!
              </p>
            </div>
            {/* Carousel */}
            <div className="flex-1">
              <AppCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 - Simples e Fácil */}
            <div className="rounded-[7px] bg-white p-8 shadow-md transition hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-7 w-7 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-secondary">
                Simples e Fácil
              </h3>
              <p className="leading-relaxed text-text-body">
                Criamos o aplicativo PopGas com foco em simplicidade, com uma
                interface limpa e objetiva, para que em apenas alguns cliques,
                nossos clientes consigam realizar seus pedidos.
              </p>
            </div>

            {/* Card 2 - Qualidade de Atendimento */}
            <div className="rounded-[7px] bg-white p-8 shadow-md transition hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-7 w-7 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-secondary">
                Qualidade de Atendimento
              </h3>
              <p className="leading-relaxed text-text-body">
                Levamos atendimento ao cliente muito a sério, por isso temos
                vários canais de comunicação para que possamos sempre atender
                nosso cliente da melhor maneira possível.
              </p>
            </div>

            {/* Card 3 - Rastreamento da Entrega */}
            <div className="rounded-[7px] bg-white p-8 shadow-md transition hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-7 w-7 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-secondary">
                Rastreamento da Entrega
              </h3>
              <p className="leading-relaxed text-text-body">
                Com o aplicativo PopGas, nossos clientes conseguem acompanhar em
                tempo real a localização do entregador responsável pela entrega
                do pedido.
              </p>
            </div>

            {/* Card 4 - Rapidez na Entrega */}
            <div className="rounded-[7px] bg-white p-8 shadow-md transition hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-7 w-7 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-secondary">
                Rapidez na Entrega
              </h3>
              <p className="leading-relaxed text-text-body">
                Trabalhamos para que todas as entregas sejam realizadas o mais
                rápido possível, focando em sempre encontrar a rota mais rápida
                até a casa do nosso cliente.
              </p>
            </div>

            {/* Card 5 - Preço Justo */}
            <div className="rounded-[7px] bg-white p-8 shadow-md transition hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-7 w-7 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-secondary">
                Preço Justo
              </h3>
              <p className="leading-relaxed text-text-body">
                Nos esforçamos muito para sempre oferecer aos nossos clientes um
                produto de qualidade com um preço justo, com várias promoções que
                reduzem o preço ainda mais!
              </p>
            </div>

            {/* Card 6 - Comunicação */}
            <div className="rounded-[7px] bg-white p-8 shadow-md transition hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-7 w-7 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-secondary">
                Comunicação
              </h3>
              <p className="leading-relaxed text-text-body">
                Nos esforçamos para manter uma comunicação ativa com nossos
                clientes, sempre buscando verificar a qualidade do serviço
                prestado, e também receber sugestões e críticas.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
