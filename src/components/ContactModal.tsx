"use client";

import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  if (!isOpen) return null;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: integrate with API
    console.log("Form submitted:", formData);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-[7px] bg-white p-6 shadow-xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
          aria-label="Fechar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <h2 className="mb-6 text-2xl font-semibold text-secondary">
          Fale Conosco
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="nome"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              required
              value={formData.nome}
              onChange={handleChange}
              className="w-full rounded-[7px] border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-[7px] border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="telefone"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Telefone
            </label>
            <input
              id="telefone"
              name="telefone"
              type="tel"
              required
              value={formData.telefone}
              onChange={handleChange}
              className="w-full rounded-[7px] border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              placeholder="(34) 99999-9999"
            />
          </div>

          <div>
            <label
              htmlFor="mensagem"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              required
              rows={4}
              value={formData.mensagem}
              onChange={handleChange}
              className="w-full resize-none rounded-[7px] border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              placeholder="Escreva sua mensagem..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-[7px] bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  );
}
