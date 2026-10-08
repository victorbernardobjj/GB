import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './Button';

interface AgeRecommenderProps {
  currentModalitySlug?: string;
}

export const AgeRecommender: React.FC<AgeRecommenderProps> = ({ currentModalitySlug }) => {
  const [selectedAge, setSelectedAge] = useState<number>(4);

  const ages = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  let recommendation = {
    name: 'Pequenos Campeões',
    slug: '/pequenos-campeoes',
    range: '3 a 5 anos',
    days: 'Terça e quinta, 09h e 17h',
    description: 'Atividades formativas com ênfase em coordenação motora, respeito e introdução segura ao tatame.',
  };

  if (selectedAge >= 5 && selectedAge <= 11) {
    recommendation = {
      name: 'Jiu-Jitsu Kids',
      slug: '/jiu-jitsu-kids',
      range: '5 a 11 anos',
      days: 'Segunda e quarta 09h; quarta e sexta 19h',
      description: 'Metodologia preventiva antibullying, disciplina escolar, companheirismo e fundamentos do esporte.',
    };
  } else if (selectedAge >= 11) {
    recommendation = {
      name: 'Jiu-Jitsu Juniores',
      slug: '/jiu-jitsu-juniores',
      range: '11 a 15 anos',
      days: 'Segunda, quarta e sexta, 16h',
      description: 'Aperfeiçoamento técnico, preparação física equilibrada e valores de liderança para jovens.',
    };
  }

  const isCurrentPage = currentModalitySlug === recommendation.slug;

  return (
    <div className="border border-white/10 bg-neutral-900 p-6 sm:p-8 rounded-3xl">
      <div className="mb-6">
        <span className="text-xs text-gb-red font-bold uppercase tracking-widest block mb-1">
          Guia de Idade Oficial GB
        </span>
        <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-wider text-white">
          Qual a idade do aluno?
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light">
          Selecione a faixa etária para visualizar a turma pedagógica correspondente.
        </p>
      </div>

      {/* Age buttons */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {ages.map((age) => (
          <button
            key={age}
            type="button"
            onClick={() => setSelectedAge(age)}
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-xs sm:text-sm font-anton transition-all cursor-pointer flex items-center justify-center ${
              selectedAge === age
                ? 'bg-gb-red text-white shadow-lg shadow-red-950/60 scale-105 border border-red-500/50'
                : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            {age}
          </button>
        ))}
        <span className="text-xs text-slate-400 font-medium ml-2">anos</span>
      </div>

      {/* Result Card */}
      <div className="p-5 sm:p-6 border border-white/10 bg-white/5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="space-y-1.5">
          <span className="text-xs text-gb-red uppercase tracking-wider font-bold">
            Turma recomendada: {recommendation.range}
          </span>
          <h4 className="font-anton text-xl sm:text-2xl text-white uppercase tracking-wider">
            {recommendation.name}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl leading-relaxed">
            {recommendation.description}
          </p>
          <p className="text-xs text-slate-200 pt-1 font-semibold flex items-center gap-1.5">
            <span className="text-gb-red">•</span> Horários: {recommendation.days}
          </p>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto justify-end">
          {!isCurrentPage && (
            <Link
              to={recommendation.slug}
              className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white inline-flex items-center gap-1 transition-colors whitespace-nowrap"
            >
              <span>Ver turma</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gb-red" />
            </Link>
          )}

          <Button
            variant="whatsapp"
            size="sm"
            whatsappMessage={`Olá! Gostaria de agendar uma aula experimental de ${recommendation.name} (${selectedAge} anos) na GB Centro JF.`}
          >
            Agendar aula
          </Button>
        </div>
      </div>
    </div>
  );
};
