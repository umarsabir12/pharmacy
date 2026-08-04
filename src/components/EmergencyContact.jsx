import { SITE } from "../config";
import { IconAlert, IconPhone } from "./icons";

export default function EmergencyContact() {
  return (
    <div className="flex h-full flex-col justify-center rounded-3xl border border-red-100 bg-red-50 p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-2 text-red-600">
        <IconAlert className="h-5 w-5 shrink-0" />
        <h3 className="font-semibold">Urgent order or emergency?</h3>
      </div>
      <p className="mt-2 text-sm text-red-700/80">
        For urgent or after-hours needs, call our emergency line directly and we'll do our best to
        help right away.
      </p>
      <a
        href={`tel:${SITE.emergencyPhoneHref}`}
        className="mt-5 flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform duration-150 hover:scale-[1.02] hover:bg-red-700 active:scale-95"
      >
        <IconPhone className="h-5 w-5 shrink-0" />
        Call {SITE.emergencyPhone}
      </a>
    </div>
  );
}
