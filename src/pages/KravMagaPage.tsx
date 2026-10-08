import React from 'react';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { CTAFinal } from '../components/CTAFinal';
import { FAQ } from '../components/FAQ';
import { Button } from '../components/Button';
import { KRAV_MAGA_FAQS } from '../data/faq';

export const KravMagaPage: React.FC = () => {
  return (
    <div className="bg-gb-black text-slate-100 min-h-screen">
      <PageHero
        image="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Prática de defesa pessoal e técnicas de Krav Maga"
        badge="Supervisão Oficial • Grão Mestre Kobi"
        title="Krav Maga"
        highlightWord="Maga"
        subtitle="Sistema israelense de defesa pessoal. Instrução objetiva voltada à preservação da integridade física em situações urbanas reais."
        overlayType="darker"
        floatingBadges={['Supervisão Grão Mestre Kobi', 'Novo Horário às 18h', 'Defesa Real']}
        actions={
          <Button
            variant="whatsapp"
            size="lg"
            whatsappMessage="Olá! Quero agendar uma aula experimental de Krav Maga na GB Centro JF."
          >
            Agendar aula experimental
          </Button>
        }
      />

      {/* NOVO HORÁRIO FEATURED BANNER */}
      <div className="py-4 px-4 bg-gradient-to-r from-gb-red via-neutral-900 to-gb-red text-white flex flex-col sm:flex-row items-center justify-center gap-3 text-center border-y border-red-500/30">
        <span className="font-anton text-xs uppercase px-2.5 py-1 rounded bg-gb-red text-white tracking-wider">
          NOVO HORÁRIO
        </span>
        <span className="font-anton text-base sm:text-lg tracking-wider uppercase">
          Segunda e Quarta às 18:00 • Garanta sua vaga na nova turma!
        </span>
      </div>

      {/* Seção 01: Defesa Pessoal Real */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-gb-red block">
              01 / Defesa Urbana & Sobrevivência
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-white">
              Respostas instintivas e controle
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              O Krav Maga baseia-se em reações naturais do organismo humano. Não se trata de uma modalidade de competição com regras arbitrárias, mas de um sistema concebido para permitir que qualquer indivíduo retorne em segurança para casa.
            </p>
          </div>

          <div className="lg:col-span-7 border-t border-white/10 divide-y divide-white/10">
            <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              <span className="md:col-span-4 font-anton text-lg text-white uppercase tracking-wider flex items-center gap-2">
                <span className="text-gb-red">01.</span> Situações Reais
              </span>
              <p className="md:col-span-8 text-sm text-slate-300 font-light leading-relaxed">
                Defesas contra estrangulamentos, tentativas de assalto, intimidações armadas e agarramentos surpresa.
              </p>
            </div>
            <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              <span className="md:col-span-4 font-anton text-lg text-white uppercase tracking-wider flex items-center gap-2">
                <span className="text-gb-red">02.</span> Simplicidade
              </span>
              <p className="md:col-span-8 text-sm text-slate-300 font-light leading-relaxed">
                Movimentos diretos e econômicos sem acrobacias, aplicáveis independentemente de compleição física.
              </p>
            </div>
            <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              <span className="md:col-span-4 font-anton text-lg text-white uppercase tracking-wider flex items-center gap-2">
                <span className="text-gb-red">03.</span> Supervisão
              </span>
              <p className="md:col-span-8 text-sm text-slate-300 font-light leading-relaxed">
                Fidelidade técnica com a chancela oficial da linhagem do Grão Mestre Kobi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 02: Horários */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <ScheduleGrid filterByModality="krav-maga" showFilters={false} showLegend={false} title="Horários de Krav Maga" />
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <FAQ items={KRAV_MAGA_FAQS} title="Dúvidas sobre o Krav Maga" />
      </section>

      <CTAFinal
        customTitle="Agende uma aula de Krav Maga"
        customText="Sessão inaugural sem custo de matrícula sob a supervisão do Grão Mestre Kobi."
        modalityName="Krav Maga"
      />
    </div>
  );
};
