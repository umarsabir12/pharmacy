import { SITE } from "../config";

// Icon mark: a bold green "E" monogram on a white badge. Reused for header,
// footer and favicon so the brand mark stays consistent across surfaces.
export function LogoMark({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="#fff" stroke="#e2e8f0" strokeWidth="1.5" />
      <rect x="10" y="8" width="6" height="24" rx="1.5" fill="#178a4c" />
      <rect x="10" y="8" width="21" height="6.5" rx="1.5" fill="#178a4c" />
      <rect x="10" y="16.75" width="17" height="6.5" rx="1.5" fill="#178a4c" />
      <rect x="10" y="25.5" width="21" height="6.5" rx="1.5" fill="#178a4c" />
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
