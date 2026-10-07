import React from 'react';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { CTAFinal } from '../components/CTAFinal';
import { FAQ } from '../components/FAQ';
import { Button } from '../components/Button';
import { Flame, Zap, HeartPulse, Target, CheckCircle2, Shield } from 'lucide-react';
import { STRIKING_FAQS } from '../data/faq';

export const BoxePage: React.FC = () => {
  return (
    <div className="bg-gb-black text-slate-100 min-h-screen">
      {/* Hero */}
      <PageHero
        image="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Treinamento com luvas de boxe na Gracie Barra Centro Juiz de Fora"
        badge="MATRÍCULAS ABERTAS • A NOBRE ARTE"
        title="BOXE ADULTO"
        highlightWord="BOXE"
        subtitle="Transforme seu condicionamento físico. Alivie o estresse e aprenda a arte do boxe com segurança e método."
        overlayType="darker"
        floatingBadges={['A Nobre Arte', 'Queima Calórica Alta', 'Footwork & Esquivas']}
        actions={
          <Button
            variant="whatsapp"
            size="lg"
            whatsappMessage="Olá! Gostaria de agendar uma aula experimental gratuita de Boxe Adulto na GB Centro JF."
          >
            Agendar aula experimental
          </Button>
        }
      />

      {/* Schedule highlight bar */}
      <div className="py-4 px-4 bg-gb-blue text-white text-center font-anton tracking-wider uppercase text-sm sm:text-base">
        Segunda, Quarta e Sexta às 12:00 • Segunda e Quarta às 20:00
      </div>

      {/* "O QUE VOCÊ APRENDE NO BOXE" */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-2">
            Fundamentos da Nobre Arte
          </span>
          <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
            O QUE VOCÊ APRENDE NO BOXE?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-light">
            Muito além de socos: um esporte de reflexos velozes, inteligência tática e equilíbrio corporal perfeito.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-sky-500/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Footwork & Esquivas
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Deslocamento ágil pelo ringue, pivôs e esquivas de tronco que tornam você um alvo impossível.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-sky-500/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-gb-red/20 text-gb-red flex items-center justify-center glow-red">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Combinações de Impacto
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Jabs, diretos, ganchos e cruzados conectados com cadência e potência máxima.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-sky-500/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Reflexos & Coordenação
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Tempo de reação acelerado e sintonia fina entre visão periférica e resposta motora.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-sky-500/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Anti-Estresse Absoluto
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Descarregue as tensões da semana nos sacos pesados e manoplas com segurança.
            </p>
          </div>
        </div>
      </section>

      {/* O que levar */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              Preparação Para a Aula
            </span>
            <h4 className="font-anton text-2xl sm:text-3xl text-white uppercase tracking-wider">
              O QUE LEVAR PARA A PRIMEIRA AULA?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300 pt-2 font-light">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Roupas esportivas confortáveis (bermuda/shorts e camiseta)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Tênis com solado limpo ou sapatilha</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Garrafa de água e toalha</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Luvas de apoio higienizadas disponíveis para a 1ª aula</span>
              </div>
            </div>
          </div>

          <Button
            variant="whatsapp"
            size="md"
            whatsappMessage="Olá! Quero agendar uma aula experimental de Boxe Adulto."
            className="flex-shrink-0"
          >
            Agendar Boxe
          </Button>
        </div>
      </section>

      {/* ScheduleGrid filtrado */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-anton text-3xl text-white uppercase tracking-wider">
              HORÁRIOS DE BOXE ADULTO
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Seg, Qua e Sex às 12:00 • Seg e Qua às 20:00
            </p>
          </div>
          <ScheduleGrid filterByModality="boxe" showFilters={false} showLegend={false} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FAQ items={STRIKING_FAQS} title="DÚVIDAS SOBRE O BOXE" />
      </section>

      {/* CTA Final */}
      <CTAFinal
        customTitle="CALCE AS LUVAS E VENHA TREINAR!"
        customText="Sua primeira aula de boxe é por nossa conta. Aprenda a nobre arte com didática de excelência na GB Centro JF."
        modalityName="Boxe Adulto"
      />
    </div>
  );
};
