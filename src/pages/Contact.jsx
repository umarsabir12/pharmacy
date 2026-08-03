import PageHero from "../components/PageHero";
import WhatsAppButton from "../components/WhatsAppButton";
import { SITE } from "../config";
import { IconMapPin, IconPhone, IconMail, IconClock } from "../components/icons";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Visit or Contact Us"
        description="Drop by in person, call, or message us on WhatsApp — whichever is easiest for you."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Info + hours */}
          <div>
            <h2 className="text-xl font-bold text-slate-800">Contact Details</h2>
            <ul className="mt-5 space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <a href={`tel:${SITE.phoneHref}`} className="hover:text-primary">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                  {SITE.email}
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <WhatsAppButton>Chat on WhatsApp</WhatsAppButton>
            </div>

            <div className="mt-10">
              <h2 className="flex items-center gap-2 text-xl font-bold text-slate-800">
                <IconClock className="h-5 w-5 text-primary" />
                Operating Hours
              </h2>
              <table className="mt-4 w-full overflow-hidden rounded-xl border border-slate-100 text-left text-sm">
                <tbody>
                  {SITE.hours.map((row) => (
                    <tr key={row.day} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-3 font-medium text-slate-700">{row.day}</td>
                      <td className="px-4 py-3 text-slate-500">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Map placeholder */}
          <div>
            <h2 className="text-xl font-bold text-slate-800">Find Us</h2>
            <div className="mt-5 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-100 bg-slate-100">
              {/*
                Google Maps placeholder — replace `src` in config.js (mapEmbedUrl)
                with a real "Share > Embed a map" URL from Google Maps.
              */}
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-slate-400">
                <IconMapPin className="h-8 w-8" />
                <span className="text-sm">[Google Maps embed placeholder]</span>
                <span className="max-w-xs text-center text-xs">{SITE.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
