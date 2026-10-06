import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQItem } from '../data/faq';

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export const FAQ: React.FC<FAQProps> = ({
  items,
  title = 'DÚVIDAS FREQUENTES',
  subtitle = 'Tudo o que você precisa saber antes de pisar no tatame pela primeira vez.',
  className = '',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      {title && (
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gb-red text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="space-y-3.5">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-neutral-900 border-gb-red/50 shadow-lg shadow-red-950/20'
                  : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-poppins font-semibold text-sm sm:text-base text-white tracking-wide">
                  {item.question}
                </span>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-gb-red text-white rotate-180' : 'bg-white/10 text-slate-300'
                  }`}
                >
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-5 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
