"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #e0e0e0" }}>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Páginas */}
          <div>
            <h3
              className="mb-4 uppercase"
              style={{ fontSize: "14px", fontWeight: 700, color: "#222222" }}
            >
              Páginas
            </h3>
            <ul className="space-y-2.5" style={{ fontSize: "13px" }}>
              <li>
                <Link
                  href="/"
                  className="transition-colors"
                  style={{ color: "#1e73be" }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "#729E2F")
                  }
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "#1e73be")
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="transition-colors"
                  style={{ color: "#1e73be" }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "#729E2F")
                  }
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "#1e73be")
                  }
                >
                  Dúvidas
                </Link>
              </li>
              <li>
                <Link
                  href="/area-de-atendimento"
                  className="transition-colors"
                  style={{ color: "#1e73be" }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "#729E2F")
                  }
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "#1e73be")
                  }
                >
                  Área de Atendimento
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nos"
                  className="transition-colors"
                  style={{ color: "#1e73be" }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "#729E2F")
                  }
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "#1e73be")
                  }
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors"
                  style={{ color: "#1e73be" }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "#729E2F")
                  }
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "#1e73be")
                  }
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Informações */}
          <div>
            <h3
              className="mb-4 uppercase"
              style={{ fontSize: "14px", fontWeight: 700, color: "#222222" }}
            >
              Informações
            </h3>
            <ul className="space-y-2.5" style={{ fontSize: "13px" }}>
              <li>
                <Link
                  href="/termos-de-uso"
                  className="transition-colors"
                  style={{ color: "#1e73be" }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "#729E2F")
                  }
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "#1e73be")
                  }
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href="/regras-programa-renda-popgas"
                  className="transition-colors"
                  style={{ color: "#1e73be" }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "#729E2F")
                  }
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    (e.currentTarget.style.color = "#1e73be")
                  }
                >
                  Regras do Programa
                </Link>
              </li>
            </ul>
          </div>

          {/* Endereço */}
          <div>
            <h3
              className="mb-4 uppercase"
              style={{ fontSize: "14px", fontWeight: 700, color: "#222222" }}
            >
              Endereço
            </h3>
            <address
              className="space-y-2 not-italic"
              style={{ fontSize: "13px", color: "#222222" }}
            >
              <p>
                R. João Balbino, 749
                <br />
                Santa Mônica, Uberlândia – MG
                <br />
                CEP 38408-262
              </p>
              <a
                href="https://g.page/popgas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-colors"
                style={{ color: "#1e73be" }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  (e.currentTarget.style.color = "#729E2F")
                }
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  (e.currentTarget.style.color = "#1e73be")
                }
              >
                Clique aqui para ver no mapa
              </a>
            </address>
          </div>

          {/* Contato */}
          <div>
            <h3
              className="mb-4 uppercase"
              style={{ fontSize: "14px", fontWeight: 700, color: "#222222" }}
            >
              Contato
            </h3>
            <ul className="space-y-2.5" style={{ fontSize: "13px", color: "#222222" }}>
              <li>(34) 3238-7777</li>
              <li>contato@popgas.com.br</li>
              <li>Seg-Sáb: 7h às 21h</li>
              <li>Dom/Feriados: 8h às 14h</li>
            </ul>

            {/* Social icons */}
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/popgas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                style={{ backgroundColor: "#f0f0f0", color: "#222222" }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.backgroundColor = "#729E2F";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.backgroundColor = "#f0f0f0";
                  e.currentTarget.style.color = "#222222";
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/popgas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                style={{ backgroundColor: "#f0f0f0", color: "#222222" }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.backgroundColor = "#729E2F";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.backgroundColor = "#f0f0f0";
                  e.currentTarget.style.color = "#222222";
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-10 border-t pt-6 text-center"
          style={{ borderColor: "#e0e0e0", fontSize: "13px", color: "#666666" }}
        >
          &copy; 2025 PopGas. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
