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
    <div className="border border-[#D9D6CF] bg-[#F7F6F3] p-8 rounded-[2px] font-inter">
      <div className="mb-6">
        <span className="text-xs text-[#5A5A57] uppercase tracking-[0.12em] block mb-1">
          Guia de idade
        </span>
        <h3 className="font-title text-2xl sm:text-3xl uppercase tracking-wide text-[#111111]">
          Qual a idade do aluno?
        </h3>
        <p className="text-xs text-[#5A5A57] mt-1">
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
            className={`w-9 h-9 border rounded-[2px] text-xs font-mono transition-colors cursor-pointer ${
              selectedAge === age
                ? 'border-[#111111] bg-[#111111] text-white font-medium'
                : 'border-[#D9D6CF] bg-white text-[#111111] hover:bg-[#EDEBE6]'
            }`}
          >
            {age}
          </button>
        ))}
        <span className="text-xs text-[#5A5A57] ml-2">anos</span>
      </div>

      {/* Result Card */}
      <div className="p-5 border border-[#D9D6CF] bg-[#EDEBE6] rounded-[2px] flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="space-y-1">
          <span className="text-[11px] text-[#A3181A] uppercase tracking-wider font-medium">
            Turma recomendada: {recommendation.range}
          </span>
          <h4 className="font-title text-xl text-[#111111] uppercase tracking-wide">
            {recommendation.name}
          </h4>
          <p className="text-xs text-[#5A5A57] max-w-xl leading-relaxed">
            {recommendation.description}
          </p>
          <p className="text-xs text-[#111111] pt-1 font-mono">
            Horários: {recommendation.days}
          </p>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          {!isCurrentPage && (
            <Link
              to={recommendation.slug}
              className="text-xs text-[#111111] underline hover:text-[#A3181A] inline-flex items-center gap-1"
            >
              <span>Ver turma</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}

          <Button
            variant="whatsapp"
            size="sm"
            whatsappMessage={`Olá. Gostaria de agendar uma aula experimental de ${recommendation.name} (${selectedAge} anos) na GB Centro JF.`}
          >
            Agendar aula
          </Button>
        </div>
      </div>
    </div>
  );
};
