import React from 'react';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { CTAFinal } from '../components/CTAFinal';
import { FAQ } from '../components/FAQ';
import { Button } from '../components/Button';
import { ShieldCheck, Target, Activity, Award } from 'lucide-react';

const HAPKIDO_FAQS = [
  {
    id: 'hpfaq-1',
    question: 'O que diferencia o Hapkido de outras artes marciais?',
    answer: 'O Hapkido combina chutes circulares acrobáticos da tradição coreana com torções articulares de punho e braço (joint locks) e projeções, utilizando o próprio impulso do adversário.',
  },
  {
    id: 'hpfaq-2',
    question: 'Preciso ter flexibilidade para começar?',
    answer: 'Não. A flexibilidade e o equilíbrio são desenvolvidos progressivamente ao longo das aulas com alongamentos específicos e exercícios de respiração marcial.',
  },
  {
    id: 'hpfaq-3',
    question: 'Qual o horário do Hapkido na GB Centro JF?',
    answer: 'Aulas nas segundas e quintas-feiras, sempre às 21:00.',
  },
];

export const HapkidoPage: React.FC = () => {
  return (
    <div className="bg-gb-black text-slate-100 min-h-screen">
      {/* Hero */}
      <PageHero
        image="https://images.unsplash.com/photo-1509563457123-ab5432811fd8?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Praticante de Hapkido demonstrando torção de punho e controle articular"
        badge="ARTE MARCIAL COREANA • DEFESA PESSOAL"
        title="HAPKIDO"
        highlightWord="HAPKIDO"
        subtitle="Defesa pessoal com técnicas refinadas de alavancas, torções, projeções e controle articular."
        overlayType="darker"
        floatingBadges={['Tradição Coreana', 'Alavancas Articulares', 'Defesa Pessoal']}
        actions={
          <Button
            variant="whatsapp"
            size="lg"
            whatsappMessage="Olá! Gostaria de agendar uma aula experimental de Hapkido na GB Centro JF."
          >
            Agendar aula experimental
          </Button>
        }
      />

      {/* Schedule Banner */}
      <div className="py-4 px-4 bg-neutral-900 border-b border-white/10 text-white text-center font-anton tracking-wider uppercase text-sm sm:text-base">
        Segunda e Quinta às 21:00
      </div>

      {/* "O QUE É O HAPKIDO" */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-gb-red uppercase tracking-widest block mb-2">
            Harmonia e Força
          </span>
          <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
            A HARMONIA DO CORPO E DA ENERGIA
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-light">
            O Hapkido ensina a desviar e redirecionar a força do agressor por meio de círculos, imobilizando-o com precisão anatômica sem depender de força física bruta.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-gb-red/20 text-gb-red flex items-center justify-center glow-red">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Torções & Alavancas
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Imobilização imediata atuando nos pulsos, cotovelos e ombros do oponente.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Redirecionamento
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              O impulso do ataque é usado contra o próprio agressor, desequilibrando-o.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Chutes Circulares
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Variedade de chutes em diversas alturas desenvolvendo flexibilidade e agilidade.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Disciplina Oriental
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Controle da respiração, foco meditativo e serenidade perante situações de conflito.
            </p>
          </div>
        </div>
      </section>

      {/* ScheduleGrid filtrado */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-anton text-3xl text-white uppercase tracking-wider">
              HORÁRIOS DE HAPKIDO
            </h3>
            <p className="text-xs text-slate-400 mt-1">Segunda e Quinta às 21:00</p>
          </div>
          <ScheduleGrid filterByModality="hapkido" showFilters={false} showLegend={false} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FAQ items={HAPKIDO_FAQS} title="PERGUNTAS FREQUENTES SOBRE O HAPKIDO" />
      </section>

      {/* CTA Final */}
      <CTAFinal
        customTitle="CONHEÇA O HAPKIDO NA GB CENTRO JF"
        customText="Sua aula experimental é gratuita. Venha aprender as torções e alavancas da tradicional arte marcial coreana."
        modalityName="Hapkido"
      />
    </div>
  );
};
