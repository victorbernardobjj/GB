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
    <div className={`w-full max-w-[840px] mx-auto font-inter ${className}`}>
      {title && (
        <div className="mb-10 text-left">
          <span className="text-xs font-medium text-[#5A5A57] uppercase tracking-[0.12em] block mb-2">
            Esclarecimentos
          </span>
          <h2 className="font-title text-3xl sm:text-4xl text-[#111111] uppercase tracking-wide">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-[#5A5A57] mt-2 max-w-xl font-normal">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="border-t border-[#D9D6CF] divide-y divide-[#D9D6CF]">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div key={item.id} className="py-5">
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full text-left flex items-start justify-between gap-6 cursor-pointer focus:outline-none group"
                aria-expanded={isOpen}
              >
                <span className="font-inter font-medium text-base text-[#111111] group-hover:text-[#A3181A] transition-colors leading-snug">
                  {item.question}
                </span>

                <span className="text-[#5A5A57] flex-shrink-0 mt-0.5">
                  {isOpen ? (
                    <Minus className="w-4 h-4" strokeWidth={1.5} />
                  ) : (
                    <Plus className="w-4 h-4" strokeWidth={1.5} />
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="pt-3 pb-1 text-sm text-[#5A5A57] leading-relaxed max-w-[62ch]">
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
