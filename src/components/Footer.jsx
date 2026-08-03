import { NavLink } from "react-router-dom";
import { SITE } from "../config";
import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";
import { IconMapPin, IconMail, IconPhone } from "./icons";

// Placeholder social icons — swap href values in config.js for real profiles.
const SOCIALS = [
  { key: "facebook", label: "Facebook", href: SITE.social.facebook, letter: "f" },
  { key: "instagram", label: "Instagram", href: SITE.social.instagram, letter: "ig" },
  { key: "twitter", label: "Twitter / X", href: SITE.social.twitter, letter: "x" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-slate-500">{SITE.tagline}</p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.key}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-xs font-semibold text-slate-500 transition-colors hover:border-primary hover:text-primary"
              >
                {s.letter}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Əlaqə
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <IconPhone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`tel:${SITE.phoneHref}`} className="hover:text-primary">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <IconMail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{SITE.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Sürətli keçidlər
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>
              <NavLink to="/products" className="hover:text-primary">
                Məhsul və xidmətlər
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-primary">
                Haqqımızda
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-primary">
                Əlaqə və iş saatları
              </NavLink>
            </li>
          </ul>
          <div className="mt-5">
            <WhatsAppButton>WhatsApp-da yazın</WhatsAppButton>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {SITE.name}. Bütün hüquqlar qorunur.
      </div>
    </footer>
  );
}
