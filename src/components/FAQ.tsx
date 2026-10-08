import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../data/faq';

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const FAQ: React.FC<FAQProps> = ({
  items,
  title = 'Perguntas frequentes',
  subtitle = 'Informações práticas antes de sua primeira visita ao tatame.',
  className = '',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      {title && (
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-bold text-gb-red uppercase tracking-widest block mb-2">
            Tire Suas Dúvidas
          </span>
          <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl font-light">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="border-t border-white/10 divide-y divide-white/10">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div key={item.id} className="py-5 sm:py-6">
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none group select-none"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-base sm:text-lg text-slate-100 group-hover:text-gb-red transition-colors leading-snug">
                  {item.question}
                </span>

                <span className="p-1 rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:text-white group-hover:border-gb-red shrink-0 mt-0.5 transition-colors">
                  {isOpen ? (
                    <Minus className="w-4 h-4 text-gb-red" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="pt-3 pb-1 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-3xl">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
