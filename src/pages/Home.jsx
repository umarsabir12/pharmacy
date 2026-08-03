import { Link } from "react-router-dom";
import { SITE } from "../config";
import WhatsAppButton from "../components/WhatsAppButton";
import ServiceCard from "../components/ServiceCard";
import ProductCard from "../components/ProductCard";
import TrustPoint from "../components/TrustPoint";
import TestimonialCard from "../components/TestimonialCard";
import { SERVICES, PRODUCTS, TRUST_POINTS, TESTIMONIALS } from "../data/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary-900">
        <img
          src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-900/85 to-primary-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-32">
          <div className="max-w-xl text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-200">
              {SITE.name}
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl">
              {SITE.tagline}
            </h1>
            <p className="mt-4 text-lg text-primary-100">
              Genuine medicines, licensed pharmacists, and fast home delivery — all one WhatsApp
              message away.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
              <WhatsAppButton className="text-base">Chat on WhatsApp</WhatsAppButton>
              <Link
                to="/products"
                className="text-sm font-medium text-white underline-offset-4 hover:text-primary-200 hover:underline"
              >
                Browse products & services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">Our Services</h2>
          <p className="mt-2 text-slate-500">Everything your family needs, in one place.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">Featured Categories</h2>
              <p className="mt-2 text-slate-500">A quick look at what we stock (sample items).</p>
            </div>
            <Link
              to="/products"
              className="hidden text-sm font-medium text-primary hover:underline sm:block"
            >
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {PRODUCTS.slice(0, 4).map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">Why Choose Us</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_POINTS.map((t) => (
            <TrustPoint key={t.title} {...t} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">What Customers Say</h2>
            <p className="mt-2 text-sm text-slate-400">
              Sample testimonials for layout purposes — replace with real customer reviews.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-primary px-8 py-10 text-center text-white sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white">Need something delivered today?</h2>
            <p className="mt-1 text-primary-50">Message us on WhatsApp — we usually reply in minutes.</p>
          </div>
          <WhatsAppButton variant="outline-light">Chat on WhatsApp</WhatsAppButton>
        </div>
      </section>
    </>
  );
}
