import WhatsAppButton from "./WhatsAppButton";
import { IconTruck, IconClock, IconMapPin, IconShield } from "./icons";

const STEPS = [
  {
    icon: IconWhatsAppLike,
    title: "Sifarişinizi yazın",
    description: "Dərman siyahınızı və ya reseptinizin şəklini WhatsApp-da göndərin.",
  },
  {
    icon: IconShield,
    title: "Hazırlayır və təsdiqləyirik",
    description: "Əczaçımız göndərməzdən əvvəl mövcudluğu və qiyməti yoxlayıb təsdiqləyir.",
  },
  {
    icon: IconMapPin,
    title: "Çatdırılmaya göndərilir",
    description: "Kuryer sifarişinizi götürüb ünvanınıza yola düşür.",
  },
  {
    icon: IconClock,
    title: "Eyni gün çatdırılır",
    description: "Yerli sifarişlərin əksəriyyəti bir neçə saat ərzində qapınıza çatdırılır.",
  },
];

// Small local placeholder so this file doesn't need to import the WhatsApp
// brand icon just for the first step card.
function IconWhatsAppLike(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="4.5" width="17" height="13" rx="2.5" />
      <path d="m4 6.5 8 5.5 8-5.5" />
    </svg>
  );
}

export default function DeliverySection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Ünvana çatdırılma
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-800 sm:text-3xl">
            Dərmanlarınız qapınıza çatdırılır
          </h2>
          <p className="mt-3 text-slate-500">
            Getməyə ehtiyac yoxdur — WhatsApp-da sifariş edin, dərmanlarınızı və sağlamlıq
            məhsullarınızı, adətən elə həmin gün, birbaşa sizə çatdıraq.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
            <IconTruck className="h-6 w-6 shrink-0 text-primary" />
            <span className="text-sm font-medium text-slate-600">
              Yerli ərazidə eyni gün çatdırılma
            </span>
          </div>
          <div className="mt-6 flex justify-center lg:justify-start">
            <WhatsAppButton>Çatdırılma üçün sifariş et</WhatsAppButton>
          </div>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary">
                <step.icon className="h-5 w-5" />
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-primary-400">
                {i + 1}-ci addım
              </p>
              <h3 className="mt-1 font-semibold text-slate-800">{step.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
