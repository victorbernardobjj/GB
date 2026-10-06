import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

interface AgeRecommenderProps {
  currentModalitySlug?: string;
}

export const AgeRecommender: React.FC<AgeRecommenderProps> = ({ currentModalitySlug }) => {
  const [selectedAge, setSelectedAge] = useState<number>(4);

  const ages = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  let recommendation = {
    name: 'Pequenos Campeões',
    slug: '/pequenos-campeoes',
    range: '3 a 5 anos',
    days: 'Terça e Quinta às 09h e 17h',
    description: 'Aulas lúdicas com foco em coordenação motora, respeito e introdução segura ao tatame.',
  };

  if (selectedAge >= 5 && selectedAge <= 11) {
    recommendation = {
      name: 'Jiu-Jitsu Kids',
      slug: '/jiu-jitsu-kids',
      range: '5 a 11 anos',
      days: 'Seg/Qua 09h e Qua/Sex 19h',
      description: 'Metodologia antibullying, foco na escola, amizade e fundamentos do jiu-jitsu.',
    };
  } else if (selectedAge >= 11 && selectedAge <= 15) {
    recommendation = {
      name: 'Jiu-Jitsu Juniores',
      slug: '/jiu-jitsu-juniores',
      range: '11 a 15 anos',
      days: 'Segunda, Quarta e Sexta às 16h',
      description: 'Técnica refinada, condicionamento físico, liderança e preparação para a juventude.',
    };
  } else if (selectedAge >= 16) {
    recommendation = {
      name: 'Jiu-Jitsu Adulto',
      slug: '/jiu-jitsu-adulto',
      range: 'A partir de 16 anos',
      days: 'Manhã, almoço e noite (seg a sex) + finais de semana',
      description: 'Turma de adultos com defesa pessoal completa, condicionamento e suporte do time.',
    };
  }

  const isCurrentPage = currentModalitySlug === recommendation.slug;

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900 border border-white/10 text-white max-w-3xl mx-auto shadow-2xl">
      <div className="text-center mb-6">
        <span className="text-xs font-bold text-gb-red uppercase tracking-widest block mb-1">
          Guia de Idades GB Kids
        </span>
        <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-wider">
          Quantos anos tem seu filho(a)?
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Selecione a idade para descobrir a turma pedagógica ideal na Gracie Barra Centro JF
        </p>
      </div>

      {/* Age buttons horizontal bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        {ages.map((age) => (
          <button
            key={age}
            type="button"
            onClick={() => setSelectedAge(age)}
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl font-anton text-sm sm:text-base flex items-center justify-center transition-all cursor-pointer ${
              selectedAge === age
                ? 'bg-gb-red text-white scale-110 shadow-lg glow-red ring-2 ring-white/50'
                : 'bg-white/5 hover:bg-white/10 text-slate-300'
            }`}
          >
            {age}
          </button>
        ))}
        <span className="text-xs text-slate-400 font-medium self-center ml-1">anos</span>
      </div>

      {/* Result Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={recommendation.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="p-5 rounded-2xl bg-gb-blue-dark/80 border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gb-red uppercase tracking-wider">
                Turma Recomendada:
              </span>
              <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-slate-200">
                {recommendation.range}
              </span>
            </div>
            <h4 className="font-anton text-xl sm:text-2xl text-white uppercase tracking-wider">
              {recommendation.name}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg font-light">
              {recommendation.description}
            </p>
            <p className="text-xs text-amber-300 font-medium pt-1">
              Horários: {recommendation.days}
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full sm:w-auto flex-shrink-0">
            {!isCurrentPage && (
              <Link
                to={recommendation.slug}
                className="py-2.5 px-5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Ver turma</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}

            <Button
              variant="whatsapp"
              size="sm"
              whatsappMessage={`Olá! Meu filho(a) tem ${selectedAge} anos e quero agendar uma aula experimental de ${recommendation.name} na GB Centro JF.`}
            >
              Agendar para ele(a)
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
