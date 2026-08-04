import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import ProductCard from "../components/ProductCard";
import WhatsAppButton from "../components/WhatsAppButton";
import { SERVICES, PRODUCTS } from "../data/content";

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title="Products & Services"
        description="From prescriptions to everyday wellness essentials — browse a sample of what we carry, then order the real thing on WhatsApp."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-800">Our Services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-800">Product Categories</h2>
          <p className="mt-2 text-sm text-slate-400">
            Sample categories shown for layout — no prices or checkout since this is a
            frontend-only showcase. Message us on WhatsApp for availability.
          </p>
          <div className="mt-8 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <WhatsAppButton>Ask about a product</WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
