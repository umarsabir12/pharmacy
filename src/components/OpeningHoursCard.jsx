import { SITE } from "../config";
import { IconClock } from "./icons";

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function parseTimeToMinutes(str) {
  const match = str.trim().match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (!match) return null;
  let [, h, m, period] = match;
  h = parseInt(h, 10) % 12;
  if (period.toUpperCase() === "PM") h += 12;
  return h * 60 + parseInt(m, 10);
}

// Best-effort "open now" check parsed from the human-readable hours strings
// in config.js. Falls back to null (hidden badge) if a row doesn't parse.
function getOpenStatus(hours) {
  const now = new Date();
  const todayName = WEEKDAYS[now.getDay()];
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  for (const row of hours) {
    const days = row.day.split(/[–-]/).map((d) => d.trim());
    const startDay = WEEKDAYS.indexOf(days[0]);
    const endDay = days.length > 1 ? WEEKDAYS.indexOf(days[1]) : startDay;
    if (startDay === -1 || endDay === -1) continue;

    const todayIdx = WEEKDAYS.indexOf(todayName);
    const inRange =
      startDay <= endDay
        ? todayIdx >= startDay && todayIdx <= endDay
        : todayIdx >= startDay || todayIdx <= endDay;
    if (!inRange) continue;

    const [openStr, closeStr] = row.time.split(/[–-]/);
    const openMin = parseTimeToMinutes(openStr);
    const closeMin = parseTimeToMinutes(closeStr);
    if (openMin === null || closeMin === null) return null;

    return { open: nowMinutes >= openMin && nowMinutes < closeMin, time: row.time };
  }
  return null;
}

export default function OpeningHoursCard() {
  const status = getOpenStatus(SITE.hours);

  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <h3 className="flex items-center gap-2 font-semibold text-slate-800">
          <IconClock className="h-5 w-5 text-primary" />
          Opening Hours
        </h3>
        {status && (
          <span
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
              status.open ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${status.open ? "bg-emerald-500" : "bg-slate-400"}`}
            />
            {status.open ? "Open now" : "Closed now"}
          </span>
        )}
      </div>

      <table className="mt-5 w-full text-left text-sm">
        <tbody>
          {SITE.hours.map((row) => (
            <tr key={row.day} className="border-t border-slate-100 first:border-0">
              <td className="py-2.5 font-medium text-slate-700">{row.day}</td>
              <td className="py-2.5 text-right text-slate-500">{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
