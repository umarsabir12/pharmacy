import { SITE } from "../config";
import { IconAlert, IconPhone } from "./icons";

export default function EmergencyContact() {
  return (
    <div className="flex h-full flex-col justify-center rounded-3xl border border-red-100 bg-red-50 p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-2 text-red-600">
        <IconAlert className="h-5 w-5 shrink-0" />
        <h3 className="font-semibold">Təcili sifariş və ya problem?</h3>
      </div>
      <p className="mt-2 text-sm text-red-700/80">
        Təcili və ya iş saatlarından kənar ehtiyaclar üçün birbaşa təcili xəttimizə zəng edin,
        dərhal kömək etməyə çalışacağıq.
      </p>
      <a
        href={`tel:${SITE.emergencyPhoneHref}`}
        className="mt-5 flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform duration-150 hover:scale-[1.02] hover:bg-red-700 active:scale-95"
      >
        <IconPhone className="h-5 w-5 shrink-0" />
        Zəng edin {SITE.emergencyPhone}
      </a>
    </div>
  );
}
