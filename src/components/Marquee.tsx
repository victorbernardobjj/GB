import React from 'react';

const MARQUEE_ITEMS = [
  'GRACIE BARRA CENTRO JF',
  'JIU-JITSU PARA TODOS',
  'DEFESA PESSOAL',
  'MUAY THAI TEAM RECRUTA',
  'AULA EXPERIMENTAL GRATUITA',
  'DOS 3 ANOS AO ADULTO',
  'METODOLOGIA CARLOS GRACIE JR',
  'KRAV MAGA & HAPKIDO',
  'BOXE NOBRE ARTE',
];

export const Marquee: React.FC = () => {
  return (
    <div className="relative w-full bg-gb-red text-white py-3 sm:py-3.5 overflow-hidden border-y border-red-700/60 shadow-lg select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Render twice for continuous loop */}
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
          <div key={index} className="flex items-center gap-8 shrink-0">
            <span className="font-anton text-sm sm:text-base tracking-widest uppercase">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-white opacity-80" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
};
