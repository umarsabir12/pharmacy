import PageHero from "../components/PageHero";
import TrustPoint from "../components/TrustPoint";
import TestimonialCard from "../components/TestimonialCard";
import { SITE } from "../config";
import { TRUST_POINTS, TESTIMONIALS } from "../data/content";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={`About ${SITE.name}`}
        description="A quick introduction to who we are and how we look after our community's health."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
        <p className="text-slate-600 leading-relaxed">
          {/* [ABOUT TEXT PLACEHOLDER] */}
          {SITE.name} has been serving the local community with genuine medicines, expert
          advice and friendly service. Our team of licensed pharmacists is committed to making
          sure you get the right product, the right guidance, and the right care — every single
          time, whether you visit in person or reach us on WhatsApp.
        </p>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-slate-800">Why Choose Us</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_POINTS.map((t) => (
              <TrustPoint key={t.title} {...t} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800">What Customers Say</h2>
          <p className="mt-2 text-sm text-slate-400">
            Sample testimonials for layout purposes — replace with real customer reviews.
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
