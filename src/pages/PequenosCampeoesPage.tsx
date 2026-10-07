import React from 'react';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { AgeRecommender } from '../components/AgeRecommender';
import { CTAFinal } from '../components/CTAFinal';
import { FAQ } from '../components/FAQ';
import { Button } from '../components/Button';
import { PARENTS_FAQS } from '../data/faq';

export const PequenosCampeoesPage: React.FC = () => {
  return (
    <div className="bg-[#F7F6F3] text-[#111111] font-inter">
      <PageHero
        image="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Turma infantil de Jiu-Jitsu para crianças pequenas"
        badge="Programa Infantil • 3 a 5 anos"
        title="Pequenos Campeões"
        subtitle="Desenvolvimento motor, socialização e disciplina inicial em ambiente seguro para crianças de 3 a 5 anos."
        actions={
          <Button
            variant="whatsapp"
            size="md"
            whatsappMessage="Olá. Gostaria de agendar uma aula experimental no programa Pequenos Campeões (3 a 5 anos) na GB Centro JF."
          >
            Agendar aula para meu filho(a)
          </Button>
        }
      />

      {/* Seção 01: Metodologia GBK 1 */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.12em] font-medium text-[#5A5A57] block">
              01 / Formação
            </span>
            <h2 className="font-title text-3xl sm:text-4xl uppercase tracking-wide text-[#111111]">
              A base motora e comportamental
            </h2>
            <p className="text-sm sm:text-base text-[#5A5A57] leading-relaxed">
              O programa para a primeira infância introduz a disciplina e a convivência coletiva por meio de dinâmicas guiadas, circuitos motores e noções fundamentais de respeito ao professor e aos colegas.
            </p>
          </div>

          <div className="lg:col-span-7 border-t border-[#D9D6CF] divide-y divide-[#D9D6CF]">
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3">
              <span className="md:col-span-4 text-xs font-mono text-[#5A5A57]">01. Coordenação</span>
              <p className="md:col-span-8 text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
                Exercícios que aprimoram lateralidade, equilíbrio, agilidade e noção espacial.
              </p>
            </div>
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3">
              <span className="md:col-span-4 text-xs font-mono text-[#5A5A57]">02. Disciplina</span>
              <p className="md:col-span-8 text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
                Compreensão da importância de ouvir instruções, aguardar a vez e respeitar regras de convivência.
              </p>
            </div>
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3">
              <span className="md:col-span-4 text-xs font-mono text-[#5A5A57]">03. Socialização</span>
              <p className="md:col-span-8 text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
                Integração saudável com outras crianças em um ambiente protegido e monitorado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 02: Guia de idades */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <AgeRecommender currentModalitySlug="/pequenos-campeoes" />
      </section>

      {/* Seção 03: Horários */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <ScheduleGrid filterByModality="pequenos-campeoes" showFilters={false} showLegend={false} title="Horários dos Pequenos Campeões" />
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <FAQ items={PARENTS_FAQS} title="Dúvidas dos pais" />
      </section>

      <CTAFinal
        customTitle="Agende uma aula para seu filho(a)."
        customText="Os pais são bem-vindos para acompanhar a aula inaugural da área de convivência."
        modalityName="Pequenos Campeões (3 a 5 anos)"
      />
    </div>
  );
};
