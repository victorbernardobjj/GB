import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, Shield, CheckCircle } from 'lucide-react';

interface BeltInfo {
  name: string;
  colorName: string;
  bgClass: string;
  borderClass: string;
  barColor: string;
  timeEstimate: string;
  description: string;
  focus: string;
}

const BELTS: BeltInfo[] = [
  {
    name: 'Faixa Branca',
    colorName: 'Iniciação',
    bgClass: 'bg-white text-neutral-900',
    borderClass: 'border-white',
    barColor: '#FFFFFF',
    timeEstimate: 'O ponto de partida',
    description: 'Aprender a sobreviver no tatame, entender a postura básica, respiração e defesa pessoal fundamental.',
    focus: 'Sobrevivência, humildade e defesa pessoal básica.',
  },
  {
    name: 'Faixa Azul',
    colorName: 'Fundamentos',
    bgClass: 'bg-blue-600 text-white',
    borderClass: 'border-blue-500',
    barColor: '#2563EB',
    timeEstimate: '1 a 2 anos de treino',
    description: 'Construção do repertório técnico amplo. Conhecimento dos principais ataques, passagens de guarda e raspagens.',
    focus: 'Repertório amplo, escapes fluidos e consistência.',
  },
  {
    name: 'Faixa Roxa',
    colorName: 'Refinamento',
    bgClass: 'bg-purple-700 text-white',
    borderClass: 'border-purple-500',
    barColor: '#7E22CE',
    timeEstimate: '3 a 5 anos de treino',
    description: 'Desenvolvimento do próprio estilo de luta. O jogo se torna instintivo, com combinações rápidas e antecipação.',
    focus: 'Identidade de jogo, transições e fluidez sem esforço.',
  },
  {
    name: 'Faixa Marrom',
    colorName: 'Lapidação',
    bgClass: 'bg-amber-900 text-white',
    borderClass: 'border-amber-700',
    barColor: '#78350F',
    timeEstimate: '5 a 8 anos de treino',
    description: 'Ajuste fino milimétrico. Poucos erros, domínio das finalizações mais técnicas e maturidade marcial total.',
    focus: 'Precisão máxima, controle de ritmo e liderança.',
  },
  {
    name: 'Faixa Preta',
    colorName: 'Mestria',
    bgClass: 'bg-neutral-950 text-white border-2 border-gb-red',
    borderClass: 'border-gb-red',
    barColor: '#E10600',
    timeEstimate: 'Um novo recomeço',
    description: 'A faixa preta é o início de uma nova jornada. Domínio não apenas das técnicas, mas da filosofia e do legado GB.',
    focus: 'Transmissão do conhecimento, sabedoria e vida exemplar.',
  },
];

export const BeltTimeline: React.FC = () => {
  const [selectedBelt, setSelectedBelt] = useState<number>(0);

  return (
    <div className="w-full">
      {/* Interactive Belts Bar */}
      <div className="overflow-x-auto py-6 scrollbar-none">
        <div className="min-w-[640px] flex items-center justify-between relative px-8 py-3">
          {/* Connecting line */}
          <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-1 bg-white/15 -z-0" />

          {/* Animated active line up to selected belt */}
          <div
            className="absolute left-10 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-white via-blue-500 to-gb-red transition-all duration-500 -z-0"
            style={{ width: `${(selectedBelt / (BELTS.length - 1)) * 88}%` }}
          />

          {BELTS.map((belt, idx) => {
            const isSelected = selectedBelt === idx;
            const isReached = idx <= selectedBelt;

            return (
              <div key={belt.name} className="flex flex-col items-center relative z-10">
                <button
                  type="button"
                  onClick={() => setSelectedBelt(idx)}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl relative overflow-hidden transition-all duration-300 cursor-pointer shadow-xl flex items-center justify-end ${
                    belt.bgClass
                  } ${
                    isSelected
                      ? 'scale-115 ring-4 ring-gb-red ring-offset-4 ring-offset-neutral-950 shadow-2xl'
                      : isReached
                      ? 'scale-100 opacity-95 hover:opacity-100'
                      : 'opacity-40 hover:opacity-80'
                  }`}
                  aria-label={belt.name}
                >
                  {/* Belt rank sleeve on edge (red sleeve on black belt, black sleeve on white/color belts) */}
                  <span
                    className={`h-full w-3 sm:w-3.5 absolute right-0 top-0 bottom-0 ${
                      belt.name === 'Faixa Preta'
                        ? 'bg-gb-red'
                        : belt.name === 'Faixa Branca'
                        ? 'bg-neutral-900'
                        : 'bg-black'
                    }`}
                  />
                </button>

                <span
                  className={`text-xs sm:text-sm font-anton tracking-wider mt-3 transition-colors text-center ${
                    isSelected ? 'text-white' : 'text-slate-400'
                  }`}
                >
                  {belt.name}
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium text-center">
                  {belt.timeEstimate}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Belt Details Card */}
      <motion.div
        key={selectedBelt}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-8 p-6 sm:p-8 rounded-3xl bg-neutral-900 border border-white/10 shadow-2xl relative overflow-hidden"
      >
        <div
          className="absolute top-0 left-0 right-0 h-1.5"
          style={{ backgroundColor: BELTS[selectedBelt].barColor }}
        />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase font-bold text-gb-red tracking-widest">
                Graduação Oficial Gracie Barra
              </span>
              <span className="text-xs text-slate-400">• {BELTS[selectedBelt].timeEstimate}</span>
            </div>

            <h3 className="font-anton text-2xl sm:text-3xl text-white tracking-wide uppercase">
              {BELTS[selectedBelt].name} – {BELTS[selectedBelt].colorName}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
              {BELTS[selectedBelt].description}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:max-w-xs flex-shrink-0">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Foco Desta Etapa:
            </span>
            <p className="text-xs sm:text-sm text-white font-medium">
              {BELTS[selectedBelt].focus}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
