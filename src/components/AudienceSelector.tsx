import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Baby, Users, Shield, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { MODALITIES, ModalityDetail } from '../data/modalities';
import { Button } from './Button';

type AudienceType = 'crianca' | 'jovem' | 'mulher' | 'adulto' | 'defesa-pessoal';

interface AudienceOption {
  id: AudienceType;
  label: string;
  icon: string;
  subtitle: string;
}

const AUDIENCE_OPTIONS: AudienceOption[] = [
  { id: 'crianca', label: 'Criança (3 a 11 anos)', icon: 'Baby', subtitle: 'Pequenos Campeões e Jiu-Jitsu Kids' },
  { id: 'jovem', label: 'Jovem (11 a 15 anos)', icon: 'Users', subtitle: 'Jiu-Jitsu Juniores e Teen' },
  { id: 'mulher', label: 'Mulher', icon: 'Shield', subtitle: 'Turmas femininas e defesa pessoal' },
  { id: 'adulto', label: 'Adulto', icon: 'Users', subtitle: 'Jiu-Jitsu, Muay Thai e Boxe' },
  { id: 'defesa-pessoal', label: 'Defesa Pessoal', icon: 'Shield', subtitle: 'Krav Maga, Hapkido e Jiu-Jitsu' },
];

export const AudienceSelector: React.FC = () => {
  const [selectedAudience, setSelectedAudience] = useState<AudienceType>('adulto');

  // Filter recommended modalities for this audience
  const recommendedModalities = MODALITIES.filter((mod) => {
    if (selectedAudience === 'crianca') {
      return mod.slug === '/pequenos-campeoes' || mod.slug === '/jiu-jitsu-kids';
    }
    if (selectedAudience === 'jovem') {
      return mod.slug === '/jiu-jitsu-juniores' || mod.slug === '/muay-thai';
    }
    if (selectedAudience === 'mulher') {
      return mod.slug === '/jiu-jitsu-feminino' || mod.slug === '/krav-maga' || mod.slug === '/muay-thai';
    }
    if (selectedAudience === 'adulto') {
      return mod.slug === '/jiu-jitsu-adulto' || mod.slug === '/muay-thai' || mod.slug === '/boxe';
    }
    if (selectedAudience === 'defesa-pessoal') {
      return mod.slug === '/krav-maga' || mod.slug === '/hapkido' || mod.slug === '/jiu-jitsu-adulto';
    }
    return true;
  });

  return (
    <div className="w-full">
      {/* 5 Chips Selector */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
        {AUDIENCE_OPTIONS.map((opt) => {
          const isSelected = selectedAudience === opt.id;

          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSelectedAudience(opt.id)}
              className={`px-4 py-2.5 rounded-md text-xs sm:text-sm font-semibold tracking-wider uppercase transition-colors duration-200 cursor-pointer flex items-center gap-2 ${
                isSelected
                  ? 'bg-gb-red text-white border border-gb-red'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <span>{opt.label}</span>
            </button>
          );
        })}
      </div>

      {/* Recommended Modalities Cards Grid with Layout Animation */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {recommendedModalities.map((mod) => (
            <motion.div
              key={mod.slug}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg overflow-hidden bg-neutral-900 border border-white/10 hover:border-white/20 flex flex-col justify-between group transition-colors shadow-xs"
            >
              {/* Image banner */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={mod.cardImage}
                  alt={mod.heroAlt}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-neutral-950/40" />

                {mod.badge && (
                  <span className="absolute top-3 left-3 bg-gb-red text-white text-[10px] font-semibold px-2.5 py-0.5 rounded uppercase tracking-wider">
                    {mod.badge}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-anton text-2xl text-white uppercase tracking-wider">
                    {mod.name}
                  </h4>
                  <p className="text-xs text-gb-red font-semibold uppercase tracking-wider mt-0.5">
                    Faixa etária: {mod.ageRange}
                  </p>
                  <p className="text-sm text-slate-300 font-light mt-2 leading-relaxed">
                    {mod.oneLiner}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-gb-red flex-shrink-0" />
                    <span>{mod.scheduleSummary}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to={mod.slug}
                      className="flex-1 py-2 px-3 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1.5 border border-white/10"
                    >
                      <span>Saiba mais</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Button
                      variant="whatsapp"
                      size="sm"
                      whatsappMessage={`Olá! Gostaria de agendar uma aula experimental de ${mod.name} na GB Centro JF.`}
                      className="py-2 px-3"
                    >
                      Aula Grátis
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
