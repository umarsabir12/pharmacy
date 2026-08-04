import { useEffect, useRef, useState } from "react";
import { SITE } from "../config";
import { GOOGLE_REVIEWS } from "../data/content";
import { IconGoogle, IconStar, IconChevronLeft, IconChevronRight } from "./icons";

export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const count = GOOGLE_REVIEWS.length;

  function go(delta) {
    setIndex((i) => (i + delta + count) % count);
  }

  // Auto-advance, paused while the user is interacting via touch.
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(id);
  }, [count]);

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) go(delta < 0 ? 1 : -1);
    touchStartX.current = null;
  }

  const review = GOOGLE_REVIEWS[index];

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <IconGoogle className="h-6 w-6" />
            <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">Google Reviews</h2>
          </div>
          <p className="mt-2 text-sm text-slate-400">
            Sample reviews for layout purposes — connect your real Google Business Profile.
          </p>
          <a
            href={SITE.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
          >
            Leave us a review →
          </a>
        </div>

        <div
          className="relative mt-8 touch-pan-y select-none"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar
                  key={i}
                  className={`h-4 w-4 ${i < review.rating ? "" : "text-slate-200"}`}
                />
              ))}
            </div>
            <p className="mt-4 text-slate-600">{review.quote}</p>
            <div className="mt-5 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-800">{review.name}</p>
              <p className="text-xs text-slate-400">{review.date}</p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous review"
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 hidden h-10 w-10 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm hover:text-primary sm:flex"
          >
            <IconChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 hidden h-10 w-10 -translate-y-1/2 translate-x-4 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm hover:text-primary sm:flex"
          >
            <IconChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {GOOGLE_REVIEWS.map((r, i) => (
            <button
              key={r.name}
              type="button"
              aria-label={`Go to review ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-primary" : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
