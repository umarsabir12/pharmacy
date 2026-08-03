export default function TrustPoint({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
      <p className="text-xs leading-relaxed text-slate-500">{description}</p>
    </div>
  );
}
