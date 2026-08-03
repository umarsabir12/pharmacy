import { SITE, whatsappLink } from "../config";
import { IconWhatsApp } from "./icons";

export default function WhatsAppButton({
  message,
  children = "WhatsApp-da sifariş et",
  variant = "solid",
  className = "",
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium transition-transform duration-150 hover:scale-[1.03] active:scale-95";
  const variants = {
    solid: "bg-primary text-white shadow-sm hover:bg-primary-600",
    outline: "border border-primary text-primary hover:bg-primary-50",
    "outline-light": "border border-white text-white hover:bg-white/10",
  };
  const styles = variants[variant] ?? variants.solid;

  return (
    <a
      href={whatsappLink(message ?? SITE.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <IconWhatsApp className="h-5 w-5 shrink-0" />
      <span>{children}</span>
    </a>
  );
}
