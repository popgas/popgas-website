/** Robozinho da IA: flutua, balança a cabeça, pisca os olhos e a antena (SMIL, sem JS). */
export function AiRobotIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <g>
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -1.4;0 0" dur="1.6s" repeatCount="indefinite" />
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;0 12 12"
            keyTimes="0;0.5;0.6;0.7;0.8;0.9;1"
            dur="4s"
            repeatCount="indefinite"
          />
          <line x1="12" y1="3.5" x2="12" y2="6" />
          <circle cx="12" cy="2.6" r="1.6" fill="currentColor" stroke="none">
            <animate attributeName="opacity" values="1;0.2;1" dur="1.2s" repeatCount="indefinite" />
          </circle>
          <rect x="4.5" y="6" width="15" height="12.5" rx="4" />
          <line x1="2.5" y1="11" x2="2.5" y2="14" />
          <line x1="21.5" y1="11" x2="21.5" y2="14" />
          <ellipse cx="9.3" cy="11.6" rx="1.5" ry="1.6" fill="currentColor" stroke="none">
            <animate attributeName="ry" values="1.6;1.6;0.2;1.6;1.6" keyTimes="0;0.42;0.46;0.5;1" dur="3s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="14.7" cy="11.6" rx="1.5" ry="1.6" fill="currentColor" stroke="none">
            <animate attributeName="ry" values="1.6;1.6;0.2;1.6;1.6" keyTimes="0;0.42;0.46;0.5;1" dur="3s" repeatCount="indefinite" />
          </ellipse>
          <path d="M10 15.3c1.2.8 2.8.8 4 0" />
        </g>
      </g>
    </svg>
  );
}
