import { SITE, whatsappLink } from "../config";
import { IconWhatsApp } from "./icons";

// Persistent, large floating CTA — the primary conversion path on mobile,
// where most visitors land. Stays above the safe-area inset so it clears
// iOS home-indicator / Android gesture bars.
export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(SITE.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp-da sifariş et"
      className="fixed right-4 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-4 text-white shadow-lg shadow-black/20 transition-transform duration-150 hover:scale-105 active:scale-95 sm:right-6"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/60" />
      <IconWhatsApp className="h-7 w-7 shrink-0" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp-da sifariş et</span>
    </a>
  );
}
