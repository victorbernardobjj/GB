import React from 'react';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { AgeRecommender } from '../components/AgeRecommender';
import { CTAFinal } from '../components/CTAFinal';
import { FAQ } from '../components/FAQ';
import { Button } from '../components/Button';

const JUNIORES_FAQS = [
  {
    id: 'jfaq-1',
    question: 'A turma de juniores aceita iniciantes sem experiência prévia?',
    answer: 'Sim. Os treinos são adaptados ao nível de cada praticante. Alunos que ingressam sem bagagem anterior recebem instrução fundamental dos professores.',
  },
  {
    id: 'jfaq-2',
    question: 'Há preparação para torneios e campeonatos?',
    answer: 'Para jovens que demonstram interesse na vertente esportiva, a escola oferece treinamento direcionado e suporte nos calendários competitivos oficiais.',
  },
  {
    id: 'jfaq-3',
    question: 'Qual a vestimenta recomendada para a aula experimental?',
    answer: 'Roupa leve de treino (bermuda esportiva sem bolsos e camiseta). Recomenda-se trazer garrafa de água individual.',
  },
];

export const JiuJitsuJunioresPage: React.FC = () => {
  return (
    <div className="bg-[#F7F6F3] text-[#111111] font-inter">
      <PageHero
        image="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Jovens treinando Jiu-Jitsu"
        badge="Programa Juvenil • 11 a 15 anos"
        title="Jiu-Jitsu Juniores"
        subtitle="Foco, disciplina técnica e superação física para adolescentes em fase de desenvolvimento."
        actions={
          <Button
            variant="whatsapp"
            size="md"
            whatsappMessage="Olá. Gostaria de agendar uma aula experimental de Jiu-Jitsu Juniores (11 a 15 anos) na GB Centro JF."
          >
            Agendar aula experimental
          </Button>
        }
      />

      {/* Seção 01: Formação Juvenil */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.12em] font-medium text-[#5A5A57] block">
              01 / Transição
            </span>
            <h2 className="font-title text-3xl sm:text-4xl uppercase tracking-wide text-[#111111]">
              Valores para a juventude
            </h2>
            <p className="text-sm sm:text-base text-[#5A5A57] leading-relaxed">
              Fase formativa decisiva em que a prática marcial oferece referências sólidas de autocontrole, postura e convivência em um grupo com hábitos saudáveis.
            </p>
          </div>

          <div className="lg:col-span-7 border-t border-[#D9D6CF] divide-y divide-[#D9D6CF]">
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3">
              <span className="md:col-span-4 text-xs font-mono text-[#5A5A57]">01. Liderança</span>
              <p className="md:col-span-8 text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
                Desenvolvimento de autonomia pessoal, pontualidade e responsabilidade individual.
              </p>
            </div>
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3">
              <span className="md:col-span-4 text-xs font-mono text-[#5A5A57]">02. Condicionamento</span>
              <p className="md:col-span-8 text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
                Fortalecimento muscular progressivo e prevenção de vícios posturais da adolescência.
              </p>
            </div>
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3">
              <span className="md:col-span-4 text-xs font-mono text-[#5A5A57]">03. Companheirismo</span>
              <p className="md:col-span-8 text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
                Convivência em ambiente protegido, focado em esforço sadio e respeito recíproco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 02: Guia de idades */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <AgeRecommender currentModalitySlug="/jiu-jitsu-juniores" />
      </section>

      {/* Seção 03: Horários */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <ScheduleGrid filterByModality="jiu-jitsu-juniores" showFilters={false} showLegend={false} title="Horários dos Juniores" />
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <FAQ items={JUNIORES_FAQS} title="Dúvidas frequentes" />
      </section>

      <CTAFinal
        customTitle="Agende uma aula para seu filho(a)."
        customText="Primeiro treino sem custo de matrícula. Venha conhecer as turmas de juniores."
        modalityName="Jiu-Jitsu Juniores (11 a 15 anos)"
      />
    </div>
  );
};
