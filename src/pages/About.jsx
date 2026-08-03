import PageHero from "../components/PageHero";
import TrustPoint from "../components/TrustPoint";
import TestimonialCard from "../components/TestimonialCard";
import { SITE } from "../config";
import { TRUST_POINTS, TESTIMONIALS } from "../data/content";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Haqqımızda"
        title={`${SITE.name} Haqqında`}
        description="Kim olduğumuz və cəmiyyətimizin sağlamlığına necə qulluq etdiyimiz haqqında qısa məlumat."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
        <p className="text-slate-600 leading-relaxed">
          {/* [HAQQINDA MƏTN YER TUTUCUSU] */}
          {SITE.name} yerli cəmiyyətə orijinal dərmanlar, peşəkar məsləhət və dostyana xidmətlə
          xidmət göstərir. Lisenziyalı əczaçılardan ibarət komandamız — istər mağazamıza gəlin,
          istərsə də bizə WhatsApp-da müraciət edin — hər dəfə düzgün məhsul, düzgün istiqamət və
          düzgün qayğı almağınıza sadiqdir.
        </p>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-slate-800">Niyə Bizi Seçməlisiniz</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_POINTS.map((t) => (
              <TrustPoint key={t.title} {...t} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800">Müştərilərimiz Nə Deyir</h2>
          <p className="mt-2 text-sm text-slate-400">
            Nümunə rəylərdir — real müştəri rəyləri ilə əvəz edin.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </section>
    </>
  );
}
