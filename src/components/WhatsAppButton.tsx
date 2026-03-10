"use client";

export default function WhatsAppButton() {
  const phone = "553432387777";
  const message = encodeURIComponent(
    "Olá! Gostaria de fazer um pedido de gás."
  );
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 sm:h-16 sm:w-16"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7 sm:h-8 sm:w-8"
        fill="#ffffff"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.052 9.38L1.056 31.2l6.064-1.952A15.9 15.9 0 0016.004 32C24.828 32 32 24.824 32 16S24.828 0 16.004 0zm9.31 22.608c-.39 1.1-1.932 2.012-3.18 2.28-.852.18-1.964.324-5.71-1.228-4.8-1.984-7.888-6.856-8.128-7.172-.228-.316-1.932-2.572-1.932-4.904s1.224-3.476 1.66-3.952c.436-.476.952-.596 1.268-.596.316 0 .632.004.908.016.292.012.684-.112 1.068.816.396.952 1.344 3.284 1.464 3.52.12.24.2.516.04.832-.16.316-.24.516-.476.792-.24.28-.5.624-.716.836-.24.24-.488.5-.208.98.276.476 1.232 2.032 2.644 3.292 1.82 1.624 3.352 2.128 3.828 2.368.476.24.756.2 1.032-.12.28-.316 1.188-1.384 1.504-1.86.316-.476.632-.396 1.068-.236.436.16 2.768 1.304 3.244 1.54.476.24.792.356.912.552.116.196.116 1.14-.276 2.24z" />
      </svg>
    </a>
  );
}
