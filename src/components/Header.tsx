"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactModal from "./ContactModal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/faq", label: "Dúvidas" },
  { href: "/sobre-nos", label: "Sobre Nós" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div
        className="hidden md:block"
        style={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-0">
          {/* Social icons - left side */}
          <div className="flex items-center">
            <a
              href="https://www.instagram.com/popgas.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center transition-opacity hover:opacity-70"
              style={{
                color: "#666666",
                width: "40px",
                height: "40px",
                borderRight: "1px solid #e0e0e0",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/popgas.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center justify-center transition-opacity hover:opacity-70"
              style={{
                color: "#666666",
                width: "40px",
                height: "40px",
                borderRight: "1px solid #e0e0e0",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>

          {/* Contact info - right side */}
          <div className="flex items-center">
            <span
              className="flex items-center gap-1.5"
              style={{
                fontSize: "13px",
                fontWeight: 400,
                color: "#666666",
                padding: "0 20px",
                borderLeft: "1px solid #e0e0e0",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (34) 3238-7777
            </span>
            <span
              className="flex items-center gap-1.5"
              style={{
                fontSize: "13px",
                fontWeight: 400,
                color: "#666666",
                padding: "0 20px",
                borderLeft: "1px solid #e0e0e0",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              contato@popgas.com.br
            </span>
            <span
              className="flex items-center gap-1.5"
              style={{
                fontSize: "13px",
                fontWeight: 400,
                color: "#666666",
                padding: "0 20px",
                borderLeft: "1px solid #e0e0e0",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              Segunda a Domingo das 08h às 21h
            </span>
          </div>
        </div>
      </div>

      {/* Main header - sticky */}
      <header className="sticky top-0 z-50 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="PopGas"
              width={200}
              height={60}
              priority
              style={{ height: "auto" }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors"
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#24355A",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#729E2F")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#24355A")
                }
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setContactOpen(true)}
              className="cursor-pointer text-white transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#729E2F",
                borderRadius: "7px",
                padding: "13px 35px",
                textTransform: "uppercase",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.75px",
              }}
            >
              Fale Conosco
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            style={{ color: "#24355A" }}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="border-t bg-white px-4 pb-4 lg:hidden">
            <div
              className="mb-3 flex flex-col gap-1 border-b pb-3 pt-3"
              style={{ fontSize: "13px", color: "#666666" }}
            >
              <span>(34) 3238-7777</span>
              <span>contato@popgas.com.br</span>
              <span>Segunda a Domingo das 08h às 21h</span>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-[7px] px-3 py-2.5 transition hover:bg-gray-50"
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#24355A",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setContactOpen(true);
                }}
                className="mt-2 cursor-pointer text-white transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "#729E2F",
                  borderRadius: "7px",
                  padding: "13px 35px",
                  textTransform: "uppercase",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.75px",
                }}
              >
                Fale Conosco
              </button>
            </nav>
          </div>
        )}
      </header>

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}
