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
    <div className="bg-gb-black text-slate-100 min-h-screen">
      <PageHero
        image="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Turma infantil de Jiu-Jitsu para crianças pequenas"
        badge="Programa Infantil • 3 a 5 anos"
        title="Pequenos Campeões"
        highlightWord="Campeões"
        subtitle="Desenvolvimento motor, socialização e disciplina inicial em ambiente seguro para crianças de 3 a 5 anos."
        actions={
          <Button
            variant="whatsapp"
            size="lg"
            whatsappMessage="Olá! Gostaria de agendar uma aula experimental no programa Pequenos Campeões (3 a 5 anos) na GB Centro JF."
          >
            Agendar aula para meu filho(a)
          </Button>
        }
      />

      {/* Seção 01: Metodologia GBK 1 */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-gb-red block">
              01 / Formação & Primeira Infância
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-white">
              A base motora e comportamental
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              O programa para a primeira infância introduz a disciplina e a convivência coletiva por meio de dinâmicas guiadas, circuitos motores e noções fundamentais de respeito ao professor e aos colegas.
            </p>
          </div>

          <div className="lg:col-span-7 border-t border-white/10 divide-y divide-white/10">
            <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              <span className="md:col-span-4 font-anton text-lg text-white uppercase tracking-wider flex items-center gap-2">
                <span className="text-gb-red">01.</span> Coordenação
              </span>
              <p className="md:col-span-8 text-sm text-slate-300 font-light leading-relaxed">
                Exercícios lúdicos que aprimoram lateralidade, equilíbrio, agilidade e noção espacial.
              </p>
            </div>
            <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              <span className="md:col-span-4 font-anton text-lg text-white uppercase tracking-wider flex items-center gap-2">
                <span className="text-gb-red">02.</span> Disciplina
              </span>
              <p className="md:col-span-8 text-sm text-slate-300 font-light leading-relaxed">
                Compreensão da importância de ouvir instruções, aguardar a vez e respeitar regras de convivência.
              </p>
            </div>
            <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              <span className="md:col-span-4 font-anton text-lg text-white uppercase tracking-wider flex items-center gap-2">
                <span className="text-gb-red">03.</span> Socialização
              </span>
              <p className="md:col-span-8 text-sm text-slate-300 font-light leading-relaxed">
                Integração saudável com outras crianças em um ambiente protegido e carinhosamente monitorado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 02: Guia de idades */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AgeRecommender currentModalitySlug="/pequenos-campeoes" />
      </section>

      {/* Seção 03: Horários */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <ScheduleGrid filterByModality="pequenos-campeoes" showFilters={false} showLegend={false} title="Horários dos Pequenos Campeões" />
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <FAQ items={PARENTS_FAQS} title="Dúvidas dos pais" />
      </section>

      <CTAFinal
        customTitle="Agende uma aula para seu filho(a)"
        customText="Os pais são muito bem-vindos para acompanhar a aula inaugural da área de convivência da academia."
        modalityName="Pequenos Campeões (3 a 5 anos)"
      />
    </div>
  );
};
