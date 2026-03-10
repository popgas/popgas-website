import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós | PopGas",
  description:
    "Conheça a PopGas — uma das maiores empresas de gás de cozinha de Uberlândia, desde 2008.",
};

export default function SobreNosPage() {
  return (
    <div className="min-h-screen bg-white font-[Poppins,sans-serif]">
      <section className="mx-auto max-w-[1100px] px-4 py-[100px]">
        <h1
          className="mb-6 text-[28px] font-semibold"
          style={{ color: "#24355A" }}
        >
          Quem Somos?
        </h1>
        <p
          className="mb-12 leading-[25px]"
          style={{ color: "#222222", fontSize: "15px" }}
        >
          A PopGas foi fundada em 2008 com sede na cidade de Uberlândia em Minas
          Gerais. É uma das maiores da região em que atua e trabalha para crescer
          em uma estrutura ampla para atender seus clientes, com ferramentas e
          tecnologia de ponta.
        </p>

        <h2
          className="mb-6 text-[24px] font-semibold"
          style={{ color: "#24355A" }}
        >
          Nosso Propósito?
        </h2>
        <p
          className="mb-12 leading-[25px]"
          style={{ color: "#222222", fontSize: "15px" }}
        >
          Oferecer aos nossos clientes o melhor atendimento e a melhor
          experiência na compra de gás de cozinha e seus acessórios.
        </p>

        <h2
          className="mb-6 text-[24px] font-semibold"
          style={{ color: "#24355A" }}
        >
          Localização
        </h2>
        <div
          className="leading-[25px]"
          style={{ color: "#222222", fontSize: "15px" }}
        >
          <p className="mb-4">
            <strong>Endereço:</strong> R. João Balbino, 749, Santa Mônica,
            Uberlândia – MG, CEP 38408-262
          </p>
          <p className="mb-4">
            <strong>Telefone:</strong>{" "}
            <a
              href="tel:+553432387777"
              className="underline hover:opacity-70"
              style={{ color: "#222222" }}
            >
              (34) 3238-7777
            </a>
          </p>
          <p className="mb-4">
            <strong>E-mail:</strong>{" "}
            <a
              href="mailto:contato@popgas.com.br"
              className="underline hover:opacity-70"
              style={{ color: "#222222" }}
            >
              contato@popgas.com.br
            </a>
          </p>
          <p className="mb-4">
            <strong>Horário de Funcionamento:</strong>
            <br />
            Seg-Sáb 7h-21h
            <br />
            Dom/Feriados 8h-14h
          </p>

          {/* Google Maps Embed */}
          <div className="mt-8">
            <iframe
              src="https://maps.google.com/maps?q=PopGas+-+Santa+M%C3%B4nica,+R.+Jo%C3%A3o+Balbino,+749,+Santa+M%C3%B4nica,+Uberl%C3%A2ndia+-+MG,+38408-262&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "7px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PopGas - Santa Mônica - Google Maps"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
