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
    <div className="bg-[#F7F6F3] text-[#111111] font-inter">
      <PageHero
        image="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Crianças em formação no tatame da Gracie Barra"
        badge="Programa Infantil • 5 a 11 anos"
        title="Jiu-Jitsu Kids"
        subtitle="Disciplina, autoconfiança e prevenção contra o bullying para crianças em idade escolar."
        actions={
          <Button
            variant="whatsapp"
            size="md"
            whatsappMessage="Olá. Gostaria de agendar uma aula experimental de Jiu-Jitsu Kids (5 a 11 anos) na GB Centro JF."
          >
            Agendar aula experimental
          </Button>
        }
      />

      {/* Seção 01: Metodologia GBK 2 */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.12em] font-medium text-[#5A5A57] block">
              01 / Princípios
            </span>
            <h2 className="font-title text-3xl sm:text-4xl uppercase tracking-wide text-[#111111]">
              Educação esportiva para a infância
            </h2>
            <p className="text-sm sm:text-base text-[#5A5A57] leading-relaxed">
              O currículo GB Kids proporciona desenvolvimento atlético e estabilidade emocional. Ensinamos a resolução pacífica de conflitos e a postura segura para evitar intimidações verbais ou físicas.
            </p>
          </div>

          <div className="lg:col-span-7 border-t border-[#D9D6CF] divide-y divide-[#D9D6CF]">
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3">
              <span className="md:col-span-4 text-xs font-mono text-[#5A5A57]">01. Antibullying</span>
              <p className="md:col-span-8 text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
                Técnicas de controle posicional para neutralizar agressões de forma não-violenta.
              </p>
            </div>
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3">
              <span className="md:col-span-4 text-xs font-mono text-[#5A5A57]">02. Foco escolar</span>
              <p className="md:col-span-8 text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
                O hábito de concentração no tatame reflete-se na retenção de atenção em sala de aula.
              </p>
            </div>
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3">
              <span className="md:col-span-4 text-xs font-mono text-[#5A5A57]">03. Resiliência</span>
              <p className="md:col-span-8 text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
                Aprender a lidar com frustrações e valorizar a constância do treinamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 02: Guia de idades */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <AgeRecommender currentModalitySlug="/jiu-jitsu-kids" />
      </section>

      {/* Seção 03: Horários */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <ScheduleGrid filterByModality="jiu-jitsu-kids" showFilters={false} showLegend={false} title="Horários do Jiu-Jitsu Kids" />
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <FAQ items={PARENTS_FAQS} title="Dúvidas frequentes dos pais" />
      </section>

      <CTAFinal
        customTitle="Agende uma aula de Jiu-Jitsu Kids."
        customText="A primeira aula é sem custos para que a criança conheça os professores e a turma."
        modalityName="Jiu-Jitsu Kids (5 a 11 anos)"
      />
    </div>
  );
};
