import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { MODALITIES } from '../data/modalities';

export const ModalitiesIndex: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="w-full font-inter">
      {/* Editorial Table Header */}
      <div className="hidden md:grid md:grid-cols-12 pb-3 border-b border-[#111111] text-xs font-medium text-[#5A5A57] uppercase tracking-wider">
        <div className="col-span-1">Nº</div>
        <div className="col-span-4">Modalidade</div>
        <div className="col-span-3">Público / Idade</div>
        <div className="col-span-3">Frequência Semanal</div>
        <div className="col-span-1 text-right">Acesso</div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-[#D9D6CF] border-b border-[#D9D6CF]">
        {MODALITIES.map((mod, index) => {
          const num = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

          return (
            <Link
              key={mod.slug}
              to={mod.slug}
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group block py-5 md:py-6 transition-colors hover:bg-[#EDEBE6]/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center">
                {/* Index */}
                <div className="md:col-span-1 text-xs font-mono text-[#5A5A57] group-hover:text-[#A3181A]">
                  {num}
                </div>

                {/* Name */}
                <div className="md:col-span-4">
                  <h3 className="font-title text-xl sm:text-2xl text-[#111111] uppercase tracking-wide group-hover:text-[#A3181A] transition-colors font-medium">
                    {mod.name}
                  </h3>
                  <p className="text-xs text-[#5A5A57] line-clamp-1 mt-0.5 md:hidden">
                    {mod.oneLiner}
                  </p>
                </div>

                {/* Age */}
                <div className="md:col-span-3 text-xs sm:text-sm text-[#5A5A57]">
                  {mod.ageRange}
                </div>

                {/* Schedule Summary */}
                <div className="md:col-span-3 text-xs sm:text-sm text-[#5A5A57]">
                  {mod.scheduleSummary}
                </div>

                {/* Action Arrow */}
                <div className="md:col-span-1 flex items-center md:justify-end text-xs text-[#111111] font-medium group-hover:text-[#A3181A]">
                  <span className="md:hidden mr-1">Conhecer</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
