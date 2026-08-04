import { SITE } from "../config";

// Icon mark: rounded-square badge with a pill-cross glyph. Reused for header,
// footer and favicon so the brand mark stays consistent across surfaces.
export function LogoMark({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="11" fill="var(--color-primary)" />
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="10"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="1.25"
      />
      <path
        d="M14 26.5c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h5.5v5.5H14a1 1 0 1 0 0 2h5.5v5.5H14Z"
        fill="#fff"
      />
      <path
        d="M26 13.5c3.6 0 6.5 2.9 6.5 6.5S29.6 26.5 26 26.5h-5.5V21H26a1 1 0 1 0 0-2h-5.5v-5.5H26Z"
        fill="var(--color-accent)"
      />
    </svg>
  );
}

export default function Logo({ className = "" }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="flex flex-col leading-tight">
        <span className="text-base font-semibold text-slate-800 sm:text-lg">{SITE.name}</span>
        <span dir="rtl" className="text-sm font-medium text-accent-700 sm:text-base">
          {SITE.nameArabic}
        </span>
      </span>
    </span>
  );
}
