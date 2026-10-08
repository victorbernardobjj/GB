import React from 'react';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { AgeRecommender } from '../components/AgeRecommender';
import { CTAFinal } from '../components/CTAFinal';
import { FAQ } from '../components/FAQ';
import { Button } from '../components/Button';
import { PARENTS_FAQS } from '../data/faq';

export const JiuJitsuKidsPage: React.FC = () => {
  return (
    <div className="bg-gb-black text-slate-100 min-h-screen">
      <PageHero
        image="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Crianças em formação no tatame da Gracie Barra"
        badge="Programa Infantil • 5 a 11 anos"
        title="Jiu-Jitsu Kids"
        highlightWord="Kids"
        subtitle="Disciplina, autoconfiança e prevenção contra o bullying para crianças em idade escolar."
        actions={
          <Button
            variant="whatsapp"
            size="lg"
            whatsappMessage="Olá! Gostaria de agendar uma aula experimental de Jiu-Jitsu Kids (5 a 11 anos) na GB Centro JF."
          >
            Agendar aula experimental
          </Button>
        }
      />

      {/* Seção 01: Metodologia GBK 2 */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-gb-red block">
              01 / Princípios GB Kids
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-white">
              Educação esportiva para a infância
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              O currículo GB Kids proporciona desenvolvimento atlético e estabilidade emocional. Ensinamos a resolução pacífica de conflitos e a postura segura para evitar intimidações verbais ou físicas.
            </p>
          </div>

          <div className="lg:col-span-7 border-t border-white/10 divide-y divide-white/10">
            <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              <span className="md:col-span-4 font-anton text-lg text-white uppercase tracking-wider flex items-center gap-2">
                <span className="text-gb-red">01.</span> Antibullying
              </span>
              <p className="md:col-span-8 text-sm text-slate-300 font-light leading-relaxed">
                Técnicas de controle posicional para neutralizar agressões de forma não-violenta e com total respeito ao parceiro.
              </p>
            </div>
            <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              <span className="md:col-span-4 font-anton text-lg text-white uppercase tracking-wider flex items-center gap-2">
                <span className="text-gb-red">02.</span> Foco escolar
              </span>
              <p className="md:col-span-8 text-sm text-slate-300 font-light leading-relaxed">
                O hábito de concentração e respeito às instruções no tatame reflete-se diretamente no rendimento escolar.
              </p>
            </div>
            <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              <span className="md:col-span-4 font-anton text-lg text-white uppercase tracking-wider flex items-center gap-2">
                <span className="text-gb-red">03.</span> Resiliência
              </span>
              <p className="md:col-span-8 text-sm text-slate-300 font-light leading-relaxed">
                Aprender a lidar com frustrações, superar pequenos desafios e valorizar a constância do treinamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 02: Guia de idades */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AgeRecommender currentModalitySlug="/jiu-jitsu-kids" />
      </section>

      {/* Seção 03: Horários */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <ScheduleGrid filterByModality="jiu-jitsu-kids" showFilters={false} showLegend={false} title="Horários do Jiu-Jitsu Kids" />
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <FAQ items={PARENTS_FAQS} title="Dúvidas frequentes dos pais" />
      </section>

      <CTAFinal
        customTitle="Agende uma aula de Jiu-Jitsu Kids"
        customText="A primeira aula é sem custos para que a criança conheça os professores e a turma."
        modalityName="Jiu-Jitsu Kids (5 a 11 anos)"
      />
    </div>
  );
};
