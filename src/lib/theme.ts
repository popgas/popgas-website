export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'popgas-theme';

/**
 * Roda no <head> antes da pintura: aplica o tema salvo e evita o "flash" do tema claro.
 * Sem escolha salva, o site abre no tema claro.
 * Também liga `.js-reveal` (animações de entrada do AnimatedReveal) quando há JS e movimento permitido.
 */
export const THEME_INIT_SCRIPT = `(function(){var d=document.documentElement;if(!window.matchMedia||!window.matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('js-reveal')}try{if(localStorage.getItem('${THEME_STORAGE_KEY}')==='dark'){d.classList.add('dark')}}catch(e){}})();`;

export function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // modo privado / storage bloqueado: o tema vale só para esta página
  }
}
