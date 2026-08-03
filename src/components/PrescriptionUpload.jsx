import { useRef, useState } from "react";
import { whatsappLink } from "../config";
import { IconUpload, IconFileImage, IconWhatsApp } from "./icons";

// No backend on this static site, so we can't attach the file to the wa.me
// link directly (WhatsApp's click-to-chat API only supports prefilled text).
// Instead we let the visitor pick/preview the photo so they know it's ready,
// then hand off to WhatsApp with a clear instruction to attach it there.
export default function PrescriptionUpload() {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  function handleFile(selected) {
    if (!selected) return;
    setFile(selected);
    setPreviewUrl(selected.type.startsWith("image/") ? URL.createObjectURL(selected) : null);
  }

  const message = file
    ? `Salam! Reseptimin şəklini seçdim (${file.name}) — indi şəkli göndərirəm.`
    : "Salam! Reseptimin şəklini göndərmək istəyirəm.";

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-10 md:grid-cols-2">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Resept ilə sifariş
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-800 sm:text-3xl">
              Reseptinizi yükləyin və ya göndərin
            </h2>
            <p className="mt-3 text-slate-500">
              Reseptinizin aydın şəklini çəkin, aşağıda seçin, sonra bizə WhatsApp-da göndərin.
              Lisenziyalı əczaçımız sifarişinizi hazırlamazdan əvvəl mövcudluğu və qiyməti təsdiq
              edəcək.
            </p>
            <ol className="mt-5 space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary">
                  1
                </span>
                Aşağıda reseptinizi seçin və ya şəklini çəkin.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary">
                  2
                </span>
                "WhatsApp-da göndər" düyməsinə basın və açılan söhbətdə şəkli əlavə edin.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary">
                  3
                </span>
                Sifarişinizi təsdiqləyib çatdırılma və ya götürmə təşkil edirik.
              </li>
            </ol>
          </div>

          <div>
            <input
              ref={inputRef}
              type="file"
              accept="image/*,.pdf"
              capture="environment"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
            />

            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="flex w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-primary-200 bg-primary-50/60 px-6 py-10 text-center transition-colors hover:border-primary hover:bg-primary-50"
            >
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Seçilmiş resept şəkli"
                  className="h-32 w-32 rounded-xl object-cover shadow-sm"
                />
              ) : file ? (
                <IconFileImage className="h-10 w-10 text-primary" />
              ) : (
                <IconUpload className="h-10 w-10 text-primary" />
              )}
              <span className="text-sm font-medium text-slate-700">
                {file ? file.name : "Şəkil çəkmək və ya fayl seçmək üçün toxunun"}
              </span>
              <span className="text-xs text-slate-400">JPG, PNG və ya PDF</span>
            </button>

            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform duration-150 hover:scale-[1.02] hover:bg-primary-600 active:scale-95"
            >
              <IconWhatsApp className="h-5 w-5 shrink-0" />
              WhatsApp-da göndər
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
