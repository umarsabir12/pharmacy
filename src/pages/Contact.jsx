import PageHero from "../components/PageHero";
import WhatsAppButton from "../components/WhatsAppButton";
import GoogleMap from "../components/GoogleMap";
import OpeningHoursCard from "../components/OpeningHoursCard";
import EmergencyContact from "../components/EmergencyContact";
import { SITE } from "../config";
import { IconMapPin, IconPhone, IconMail } from "../components/icons";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Bizimlə əlaqə"
        title="Bizi Ziyarət Edin və ya Əlaqə Saxlayın"
        description="Şəxsən baş çəkin, zəng edin və ya WhatsApp-da yazın — sizin üçün ən rahat olanı seçin."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Info + hours */}
          <div>
            <h2 className="text-xl font-bold text-slate-800">Əlaqə Məlumatları</h2>
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
              <WhatsAppButton>WhatsApp-da yazın</WhatsAppButton>
            </div>

            <div className="mt-10">
              <OpeningHoursCard />
            </div>

            <div className="mt-6">
              <EmergencyContact />
            </div>
          </div>

          {/* Interactive map */}
          <div>
            <h2 className="text-xl font-bold text-slate-800">Bizi Tapın</h2>
            <div className="mt-5">
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
