import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { MODALITIES } from '../data/modalities';

export const ModalitiesIndex: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Editorial Table Header */}
      <div className="hidden md:grid md:grid-cols-12 pb-3 border-b border-white/20 text-xs font-bold text-slate-400 uppercase tracking-wider">
        <div className="col-span-1">Nº</div>
        <div className="col-span-4">Modalidade</div>
        <div className="col-span-3">Público / Idade</div>
        <div className="col-span-3">Frequência Semanal</div>
        <div className="col-span-1 text-right">Acesso</div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-white/10 border-b border-white/10">
        {MODALITIES.map((mod, index) => {
          const num = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

          return (
            <Link
              key={mod.slug}
              to={mod.slug}
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group block py-5 md:py-6 transition-colors hover:bg-white/5"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center">
                {/* Index */}
                <div className="md:col-span-1 text-xs font-mono text-slate-400 group-hover:text-gb-red">
                  {num}
                </div>

                {/* Name */}
                <div className="md:col-span-4">
                  <h3 className="font-anton text-xl sm:text-2xl text-white uppercase tracking-wider group-hover:text-gb-red transition-colors">
                    {mod.name}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-1 mt-0.5 md:hidden">
                    {mod.oneLiner}
                  </p>
                </div>

                {/* Age */}
                <div className="md:col-span-3 text-xs sm:text-sm text-slate-300">
                  {mod.ageRange}
                </div>

                {/* Schedule Summary */}
                <div className="md:col-span-3 text-xs sm:text-sm text-slate-300">
                  {mod.scheduleSummary}
                </div>

                {/* Action Arrow */}
                <div className="md:col-span-1 flex items-center md:justify-end text-xs text-white font-medium group-hover:text-gb-red">
                  <span className="md:hidden mr-1">Conhecer</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
