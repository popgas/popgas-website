import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Área de Atendimento | PopGas",
  description:
    "Confira a área de atendimento da PopGas em Uberlândia e as regiões excluídas.",
};

export default function AreaDeAtendimentoPage() {
  return (
    <div className="min-h-screen bg-white font-[Poppins,sans-serif]">
      <section className="mx-auto max-w-[800px] px-4 py-[100px]">
        <h1
          className="mb-6 text-[28px] font-semibold"
          style={{ color: "#24355A" }}
        >
          Área de Atendimento
        </h1>
        <p
          className="mb-8 leading-[25px]"
          style={{ color: "#222222", fontSize: "15px" }}
        >
          Estamos atendendo em toda a cidade de Uberlândia, exceto por alguns
          bairros e condomínios fechados.
        </p>

        <p
          className="mb-4 font-semibold"
          style={{ color: "#222222", fontSize: "15px" }}
        >
          Bairros e condomínios não atendidos:
        </p>
        <ul
          className="mb-12 list-disc pl-6 leading-[25px]"
          style={{ color: "#222222", fontSize: "15px" }}
        >
          <li>Alfhaville Uberlândia 1 &amp; 2</li>
          <li>Centro</li>
          <li>Distrito Industrial</li>
          <li>Granja Marileusa</li>
          <li>Jardim Panorama</li>
          <li>Paradiso</li>
          <li>Terras Alpha Uberlândia</li>
          <li>Gávea (incluindo Gávea Paradiso e Gávea Sul)</li>
        </ul>

        <div className="overflow-hidden">
          <iframe
            title="Mapa de Uberlândia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120790.0!2d-48.3!3d-18.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4456f2e0e6b93%3A0xd0ad4e5a1b0a3c48!2sUberl%C3%A2ndia%2C+MG!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
