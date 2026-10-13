import React from 'react';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { CTAFinal } from '../components/CTAFinal';
import { FAQ } from '../components/FAQ';
import { Button } from '../components/Button';
import { Flame, Zap, Award, Target, CheckCircle2, ShieldCheck, HeartPulse, Clock, Sparkles } from 'lucide-react';
import { KARATE_FAQS } from '../data/faq';
import { GYM_INFO, getWhatsAppLink } from '../data/info';

export const KaratePage: React.FC = () => {
  return (
    <div className="bg-gb-black text-slate-100 min-h-screen">
      {/* Hero */}
      <PageHero
        slug="/karate"
        image="/images/karate.jpg"
        fallbackImage="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Praticante em postura marcial de Karatê no tatame na Gracie Barra Centro JF"
        badge="DISCIPLINA MILENAR • TRADIÇÃO JAPONESA"
        title="KARATÊ TRADICIONAL"
        highlightWord="KARATÊ"
        subtitle="Disciplina, precisão e foco mental. A arte marcial milenar que desenvolve corpo, mente e defesa pessoal para crianças, jovens e adultos."
        overlayType="darker"
        floatingBadges={['Katas & Kihon', 'Foco & Disciplina', 'Infantil ao Adulto']}
        actions={
          <Button
            variant="whatsapp"
            size="lg"
            whatsappMessage="Olá! Gostaria de agendar uma aula experimental de Karatê na Gracie Barra Centro Juiz de Fora."
          >
            Agendar aula experimental
          </Button>
        }
      />

      {/* Notice Bar */}
      <div className="py-4 px-4 bg-gb-red text-white text-center font-anton tracking-wider uppercase text-xs sm:text-sm shadow-md flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4" />
        <span>Novas turmas de Karatê em formação • Fale com nossa recepção no WhatsApp para horários e vagas</span>
      </div>

      {/* "O QUE VOCÊ APRENDE NO KARATÊ" */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-gb-red uppercase tracking-widest block mb-2">
            Fundamentos & Filosofia Marcial
          </span>
          <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
            O QUE VOCÊ APRENDE NO KARATÊ?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-light">
            Muito mais que golpes físicos: uma formação integral que alinha respiração, postura, serenidade e poder de impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-gb-red/20 text-gb-red flex items-center justify-center glow-red">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Kihon & Precisão
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Fundamentos de golpes traumáticos, bloqueios e chutes executados com alinhamento biomecânico e firmeza.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-amber-500/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Katas & Foco Mental
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Formas sequenciais milenares que aprimoram memória motora, ritmo de combate, equilíbrio e respiração profunda.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-emerald-500/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Disciplina & Respeito
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Ambiente de honra marcial, etiqueta do dojo e perseverança que transforma a postura do aluno na vida e nos estudos.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-sky-500/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Kumite Controlado
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Aplicação de contra-ataques, esquivas e noções de distância com controle de contato rigoroso e segurança total.
            </p>
          </div>
        </div>
      </section>

      {/* PARA QUEM É INDICADO */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-anton text-2xl sm:text-4xl text-white uppercase tracking-wider">
              PARA TODAS AS FAIXAS ETÁRIAS
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Metodologia que se adapta ao momento de vida e objetivos de cada praticante.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2 relative overflow-hidden">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gb-red/20 text-gb-red border border-gb-red/30 mb-1">
                Ter e Qui • 16h
              </span>
              <span className="text-white font-anton text-lg uppercase tracking-wider block">
                Karatê Baby (2,5 a 5 anos)
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Desenvolvimento psicomotor, noções lúdicas de equilíbrio, socialização saudável e disciplina inicial para os primeiros passos na arte marcial.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2 relative overflow-hidden">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gb-red/20 text-gb-red border border-gb-red/30 mb-1">
                Qua e Sex • 19h
              </span>
              <span className="text-white font-anton text-lg uppercase tracking-wider block">
                Karatê Infantil (6 a 11 anos)
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Foco e concentração escolar, respeito e postura, autoconfiança contra o bullying e domínio das técnicas básicas e katas formativos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2 relative overflow-hidden">
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gb-red/20 text-gb-red border border-gb-red/30 mb-1">
                Ter e Qui • 15h
              </span>
              <span className="text-white font-anton text-lg uppercase tracking-wider block">
                Karatê Adulto
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Alívio do estresse diário, ganho substancial de mobilidade articular, fortalecimento muscular, disciplina mental e defesa pessoal tradicional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O que levar */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-gb-red uppercase tracking-wider">
              Preparação Para a Aula
            </span>
            <h4 className="font-anton text-2xl sm:text-3xl text-white uppercase tracking-wider">
              O QUE LEVAR PARA A PRIMEIRA AULA?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300 pt-2 font-light">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gb-red" />
                <span>Roupas esportivas confortáveis (bermuda/calça e camiseta)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gb-red" />
                <span>Prática descalça sobre tatame higienizado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gb-red" />
                <span>Garrafa de água e toalha de rosto</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gb-red" />
                <span>Se já possui kimono (karate-gi), sinta-se à vontade para trazê-lo</span>
              </div>
            </div>
          </div>

          <Button
            variant="whatsapp"
            size="md"
            whatsappMessage="Olá! Quero agendar uma aula experimental de Karatê na GB Centro JF."
            className="flex-shrink-0"
          >
            Agendar Karatê
          </Button>
        </div>
      </section>

      {/* ScheduleGrid filtrado */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-anton text-3xl text-white uppercase tracking-wider">
              HORÁRIOS DE KARATÊ
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Terça e Quinta às 15h (Adulto) e 16h (Baby) • Quarta e Sexta às 19h (Infantil).
            </p>
          </div>
          <ScheduleGrid filterByModality="karate" showFilters={false} showLegend={false} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FAQ items={KARATE_FAQS} title="DÚVIDAS SOBRE O KARATÊ" />
      </section>

      {/* CTA Final */}
      <CTAFinal
        customTitle="DESPERTE SUA DISCIPLINA COM O KARATÊ!"
        customText="Sua primeira aula de Karatê é a oportunidade perfeita para conhecer nossa estrutura e a metodologia da GB Centro JF."
        modalityName="Karatê"
      />
    </div>
  );
};
