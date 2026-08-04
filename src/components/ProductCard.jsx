export default function ProductCard({ name, category, imageLabel }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      {/* Placeholder image block — swap with a real <img src="..." /> */}
      <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-primary-50 to-slate-100 text-sm text-slate-400">
        {imageLabel ?? "Product image placeholder"}
      </div>
      <div className="p-4">
        <span className="inline-block rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-700">
          {category}
        </span>
        <h3 className="mt-2 text-sm font-semibold text-slate-800">{name}</h3>
      </div>
    </div>
  );
}
