export function VineMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 420 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M210 720C210 560 120 520 96 430C72 340 150 300 168 220C186 140 110 100 128 40"
        stroke="url(#vineStroke)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M168 220C210 210 248 188 270 150"
        stroke="url(#vineStroke)"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M128 90C170 78 210 52 236 18"
        stroke="url(#vineStroke)"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <ellipse
        cx="274"
        cy="142"
        rx="28"
        ry="14"
        transform="rotate(-28 274 142)"
        fill="url(#leafFill)"
        opacity="0.9"
      />
      <ellipse
        cx="240"
        cy="34"
        rx="22"
        ry="11"
        transform="rotate(-18 240 34)"
        fill="url(#leafFill)"
        opacity="0.75"
      />
      <ellipse
        cx="88"
        cy="410"
        rx="26"
        ry="12"
        transform="rotate(32 88 410)"
        fill="url(#leafFill)"
        opacity="0.65"
      />
      <defs>
        <linearGradient id="vineStroke" x1="96" y1="40" x2="210" y2="720">
          <stop stopColor="#00bb7f" stopOpacity="0.9" />
          <stop offset="0.55" stopColor="#1f6b52" stopOpacity="0.75" />
          <stop offset="1" stopColor="#0e1312" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="leafFill" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#00bb7f" stopOpacity="0.55" />
          <stop offset="1" stopColor="#c9854a" stopOpacity="0.25" />
        </linearGradient>
      </defs>
    </svg>
  );
}
