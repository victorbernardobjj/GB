import React from 'react';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { CTAFinal } from '../components/CTAFinal';
import { FAQ } from '../components/FAQ';
import { Button } from '../components/Button';
import { Flame, Zap, Target, CheckCircle2, ShieldCheck, HeartPulse, Clock, Sparkles } from 'lucide-react';
import { MMA_FAQS } from '../data/faq';
import { GYM_INFO, getWhatsAppLink } from '../data/info';

export const MmaPage: React.FC = () => {
  return (
    <div className="bg-gb-black text-slate-100 min-h-screen">
      {/* Hero */}
      <PageHero
        slug="/mma"
        image="/images/mma.jpg"
        fallbackImage="https://images.unsplash.com/photo-1517438322307-e67111335449?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Treinamento integrado de MMA na Gracie Barra Centro Juiz de Fora"
        badge="COMBATE INTEGRADO • ALTA PERFORMANCE"
        title="MMA (ARTES MARCIAIS MISTAS)"
        highlightWord="MMA"
        subtitle="A união perfeita de trocação em pé, quedas de wrestling e jogo de solo do Jiu-Jitsu. Treino dinâmico, seguro e de alta queima calórica."
        overlayType="darker"
        floatingBadges={['Trocação & Solo', 'Condicionamento Extremo', 'Transições de Luta']}
        actions={
          <Button
            variant="whatsapp"
            size="lg"
            whatsappMessage="Olá! Gostaria de agendar uma aula experimental de MMA na Gracie Barra Centro Juiz de Fora."
          >
            Agendar aula experimental
          </Button>
        }
      />

      {/* Notice Bar */}
      <div className="py-4 px-4 bg-gb-blue text-white text-center font-anton tracking-wider uppercase text-xs sm:text-sm shadow-md flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-sky-300" />
        <span>Turmas de MMA em atualização • Entre em contato pelo WhatsApp para consultar horários e garantir sua vaga</span>
      </div>

      {/* "O QUE VOCÊ APRENDE NO MMA" */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-2">
            A Arte Marcial Mais Completa
          </span>
          <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
            O QUE VOCÊ APRENDE NO MMA?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-light">
            Desenvolva inteligência marcial em todas as distâncias de combate: em pé, na grade/clinch e no solo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-sky-500/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Striking Integrado
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Socos, chutes e joelhadas aplicados com postura adaptada para transição de quedas e movimentação fluida.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-gb-red/20 text-gb-red flex items-center justify-center glow-red">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Wrestling & Quedas
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Técnicas de single leg, double leg, defesa contra quedas (sprawl) e domínio de clinch no tatame.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-amber-500/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Ground & Pound Seguro
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Controle postural no solo, passagens de guarda e simulação técnica de golpes com segurança absoluta.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-emerald-500/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Condicionamento Atleta
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Circuitos de alta intensidade que queimam gordura, fortalecem o core e aumentam o fôlego a níveis superiores.
            </p>
          </div>
        </div>
      </section>

      {/* SEGURANÇA E AMBIENTE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              Segurança em Primeiro Lugar
            </span>
            <h4 className="font-anton text-2xl sm:text-3xl text-white uppercase tracking-wider">
              TREINO TÉCNICO, INTENSO E SEM VIOLÊNCIA
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300 pt-2 font-light">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Professores faixas-pretas supervisionando cada segundo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Alunos e parceiros conscientes, ambiente cooperativo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Equipamentos de proteção e tatame profissional GB</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Aberto tanto para iniciantes quanto praticantes avançados</span>
              </div>
            </div>
          </div>

          <Button
            variant="whatsapp"
            size="md"
            whatsappMessage="Olá! Quero agendar uma aula experimental de MMA na GB Centro JF."
            className="flex-shrink-0"
          >
            Agendar MMA
          </Button>
        </div>
      </section>

      {/* ScheduleGrid filtrado */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-anton text-3xl text-white uppercase tracking-wider">
              HORÁRIOS DE MMA
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Segunda e Quarta-feira às 19:00 na GB Centro JF.
            </p>
          </div>
          <ScheduleGrid filterByModality="mma" showFilters={false} showLegend={false} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FAQ items={MMA_FAQS} title="DÚVIDAS SOBRE O MMA" />
      </section>

      {/* CTA Final */}
      <CTAFinal
        customTitle="EVOLUA COM O TREINAMENTO COMPLETO DE MMA!"
        customText="Sua primeira aula de MMA na GB Centro JF vai te desafiar e levar sua preparação física a um novo patamar."
        modalityName="MMA"
      />
    </div>
  );
};
