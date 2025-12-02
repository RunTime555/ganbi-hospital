import { useState } from 'react';

const FaqAccordion = ({ items }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = active === index;
        return (
          <div
            key={item.question}
            className="rounded-2xl border border-slate-100 bg-white shadow-soft"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setActive(isOpen ? null : index)}
            >
              <span className="text-base font-semibold text-slate-900">{item.question}</span>
              <span className="text-xl text-brand-dark">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <p className="border-t border-slate-100 px-5 py-4 text-sm text-slate-600">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;

