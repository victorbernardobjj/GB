import React from 'react';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { CTAFinal } from '../components/CTAFinal';
import { FAQ } from '../components/FAQ';
import { Button } from '../components/Button';
import { KRAV_MAGA_FAQS } from '../data/faq';

export const KravMagaPage: React.FC = () => {
  return (
    <div className="bg-[#F7F6F3] text-[#111111] font-inter">
      {/* Soft black #0E0E0E on Hero only */}
      <PageHero
        image="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Treinamento de Krav Maga"
        badge="Supervisão Oficial • Grão Mestre Kobi"
        title="Krav Maga"
        subtitle="Sistema israelense de defesa pessoal. Instrução objetiva voltada à preservação da integridade física em situações urbanas reais."
        isDark={true}
        actions={
          <Button
            variant="whatsapp"
            size="md"
            whatsappMessage="Olá. Gostaria de agendar uma aula experimental de Krav Maga na GB Centro JF."
          >
            Agendar aula experimental
          </Button>
        }
      />

      {/* Seção 01: Defesa Pessoal Real */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.12em] font-medium text-[#5A5A57] block">
              01 / Defesa Urbana
            </span>
            <h2 className="font-title text-3xl sm:text-4xl uppercase tracking-wide text-[#111111]">
              Respostas instintivas e controle
            </h2>
            <p className="text-sm sm:text-base text-[#5A5A57] leading-relaxed">
              O Krav Maga baseia-se em reações naturais do organismo humano. Não se trata de uma modalidade de competição com regras arbitrárias, mas de um sistema concebido para permitir que qualquer indivíduo retorne em segurança para casa.
            </p>
          </div>

          <div className="lg:col-span-7 border-t border-[#D9D6CF] divide-y divide-[#D9D6CF]">
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3">
              <span className="md:col-span-4 text-xs font-mono text-[#5A5A57]">01. Situações Reais</span>
              <p className="md:col-span-8 text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
                Defesas contra estrangulamentos, tentativas de assalto, intimidações armadas e agarramentos surpresa.
              </p>
            </div>
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3">
              <span className="md:col-span-4 text-xs font-mono text-[#5A5A57]">02. Simplicidade</span>
              <p className="md:col-span-8 text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
                Movimentos diretos e econômicos sem acrobacias, aplicáveis independentemente de compleição física.
              </p>
            </div>
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3">
              <span className="md:col-span-4 text-xs font-mono text-[#5A5A57]">03. Supervisão</span>
              <p className="md:col-span-8 text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
                Fidelidade técnica com a chancela oficial da linhagem do Grão Mestre Kobi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 02: Horários */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <ScheduleGrid filterByModality="krav-maga" showFilters={false} showLegend={false} title="Horários de Krav Maga" />
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <FAQ items={KRAV_MAGA_FAQS} title="Dúvidas sobre o Krav Maga" />
      </section>

      <CTAFinal
        customTitle="Agende uma aula de Krav Maga."
        customText="Sessão inaugural sem custo de matrícula sob a supervisão do Grão Mestre Kobi."
        modalityName="Krav Maga"
      />
    </div>
  );
};
