export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="border-b border-slate-100 bg-primary-50/60">
      <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-bold text-slate-800 sm:text-4xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-3 max-w-2xl text-slate-500">{description}</p>
        )}
      </div>
    </section>
  );
}
