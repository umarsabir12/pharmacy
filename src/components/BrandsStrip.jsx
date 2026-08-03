import { BRANDS } from "../data/content";

// Text-mark placeholders — swap for real brand logo images when available.
export default function BrandsStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">Satdığımız Brendlər</h2>
        <p className="mt-2 text-slate-500">
          Etibarlı istehsalçılardan təmin olunur — nümunə siyahıdır, satdığınız brendlərlə əvəz
          edin.
        </p>
      </div>

      <div className="mt-8 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0">
        <div className="flex w-max gap-4 sm:w-full sm:flex-wrap sm:justify-center">
          {BRANDS.map((brand) => (
            <span
              key={brand}
              className="flex shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white px-6 py-4 text-sm font-semibold text-slate-400 shadow-sm"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
