import { SITE } from "../config";
import { IconMapPin } from "./icons";

export default function GoogleMap({ className = "" }) {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    SITE.address,
  )}`;

  return (
    <div className={`overflow-hidden rounded-2xl border border-slate-100 ${className}`}>
      <iframe
        title={`${SITE.name} location`}
        src={SITE.mapEmbedUrl}
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="aspect-[4/3] w-full"
      />
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 border-t border-slate-100 bg-white py-3 text-sm font-medium text-primary hover:bg-primary-50"
      >
        <IconMapPin className="h-4 w-4 shrink-0" />
        Get Directions
      </a>
    </div>
  );
}
