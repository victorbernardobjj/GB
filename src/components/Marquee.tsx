import React from 'react';

interface MarqueeProps {
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ className = '' }) => {
  const items = [
    'JIU-JITSU',
    'MUAY THAI',
    'BOXE ADULTO',
    'KRAV MAGA',
    'HAPKIDO',
    'JIU-JITSU KIDS',
    'PEQUENOS CAMPEÕES',
    'DEFESA PESSOAL FEMININA',
  ];

  return (
    <div
      className={`relative w-full overflow-hidden bg-gb-red py-3 text-white shadow-2xl -rotate-1 sm:-rotate-2 my-8 z-20 ${className}`}
    >
      <div className="flex whitespace-nowrap group">
        <div className="flex items-center gap-6 animate-marquee group-hover:[animation-play-state:paused]">
          {[...items, ...items, ...items, ...items].map((text, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <span className="font-anton text-lg sm:text-2xl uppercase tracking-widest">
                {text}
              </span>
              <span className="w-2 h-2 rounded-full bg-white opacity-60"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
