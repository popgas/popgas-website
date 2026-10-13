'use client';

import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { applyTheme } from '@/lib/theme';

/**
 * Alterna claro/escuro. Os dois ícones e rótulos são renderizados e o CSS (`dark:`) mostra o certo,
 * então o HTML do servidor não depende do tema salvo no navegador.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const toggle = () => {
    applyTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      onClick={toggle}
      title="Alternar tema claro/escuro"
      className={cn(
        'shrink-0 w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer transition-colors',
        'border-[#E3E7DE] text-[#3F4756] hover:text-[#0a1322] hover:border-[rgba(15,19,34,0.30)]',
        'dark:border-[#2E3E35] dark:text-[#C3CCC5] dark:hover:text-[#E8EEE6] dark:hover:border-[#3d5045]',
        className
      )}
    >
      <span className="sr-only dark:hidden">Ativar tema escuro</span>
      <span className="sr-only hidden dark:inline">Ativar tema claro</span>
      <Moon className="w-[18px] h-[18px] dark:hidden" strokeWidth={2} aria-hidden />
      <Sun className="w-[18px] h-[18px] hidden dark:block" strokeWidth={2} aria-hidden />
    </button>
  );
}
