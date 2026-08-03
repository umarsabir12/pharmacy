import { useState } from "react";
import { FAQS } from "../data/content";
import { IconChevronDown } from "./icons";

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span className="font-medium text-slate-800">{question}</span>
        <IconChevronDown
          className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-200 ${
          isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
        }`}
      >
        <p className="min-h-0 text-sm text-slate-500">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
            Tez-tez Verilən Suallar
          </h2>
          <p className="mt-2 text-slate-500">
            Qısa cavablar — hələ də əminsizsinizmi? Bizə WhatsApp-da yazın.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-100 bg-white px-5 shadow-sm sm:px-8">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.question}
              {...faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((cur) => (cur === i ? -1 : i))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
