import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SITE } from "../config";
import WhatsAppButton from "./WhatsAppButton";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products & Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      onClick={onClick}
      className={({ isActive }) =>
        `text-sm font-medium transition-colors hover:text-primary ${
          isActive ? "text-primary" : "text-slate-600"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
            {SITE.shortName}
          </span>
          <span className="text-lg font-semibold text-slate-800">{SITE.name}</span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavItem key={link.to} {...link} />
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton>Order on WhatsApp</WhatsAppButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-slate-700" />
            <span className="block h-0.5 w-5 bg-slate-700" />
            <span className="block h-0.5 w-5 bg-slate-700" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.to} {...link} onClick={() => setOpen(false)} />
            ))}
            <WhatsAppButton className="w-fit">Order on WhatsApp</WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
}
