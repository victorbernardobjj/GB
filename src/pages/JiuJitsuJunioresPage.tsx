import React from 'react';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { AgeRecommender } from '../components/AgeRecommender';
import { CTAFinal } from '../components/CTAFinal';
import { FAQ } from '../components/FAQ';
import { Button } from '../components/Button';
import { Target, Zap, Users, Trophy } from 'lucide-react';

const JUNIORES_FAQS = [
  {
    id: 'jfaq-1',
    question: 'Meu filho(a) de 12 anos nunca lutou. Essa turma é avançada demais?',
    answer: 'Não! Nossos professores dividem a turma por níveis técnicos. Os iniciantes aprendem os conceitos básicos com atenção total enquanto os mais experientes aprimoram suas técnicas.',
  },
  {
    id: 'jfaq-2',
    question: 'Existe oportunidade para quem quer competir em campeonatos?',
    answer: 'Sim! Para os jovens que demonstram interesse na vertente esportiva, oferecemos preparação técnica e suporte nos principais campeonatos oficiais de Jiu-Jitsu do país.',
  },
  {
    id: 'jfaq-3',
    question: 'O que levar no primeiro dia de aula experimental?',
    answer: 'Roupa leve de treino (bermuda sem zíper e camiseta), garrafinha de água e toalha. A aula é gratuita!',
  },
];

export const JiuJitsuJunioresPage: React.FC = () => {
  return (
    <div className="bg-gb-black text-slate-100 min-h-screen">
      {/* Hero */}
      <PageHero
        image="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Jovens adolescentes praticando jiu-jitsu com foco e dedicação"
        badge="PROGRAMA TEEN • 11 A 15 ANOS"
        title="JIU-JITSU JUNIORES"
        highlightWord="JUNIORES"
        subtitle="Para jovens de 11 a 15 anos: jiu-jitsu como ferramenta de foco, respeito e superação. Aqui começa a jornada dos futuros campeões!"
        actions={
          <Button
            variant="whatsapp"
            size="lg"
            whatsappMessage="Olá! Quero agendar uma aula experimental de Jiu-Jitsu Juniores (11 a 15 anos) na GB Centro JF."
          >
            Agendar aula experimental
          </Button>
        }
      />

      {/* Schedule Banner */}
      <div className="py-4 px-4 bg-gb-red text-white text-center font-anton tracking-wider uppercase text-sm">
        Segunda, Quarta e Sexta às 16:00
      </div>

      {/* "O QUE O JOVEM DESENVOLVE" */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-gb-red uppercase tracking-widest block mb-2">
            Formação da Personalidade
          </span>
          <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
            O QUE O JOVEM DESENVOLVE?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-light">
            Uma fase de transição crucial em que a prática marcial traz equilíbrio mental, amigos positivos e saúde.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-gb-red/20 text-gb-red flex items-center justify-center glow-red">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Foco & Liderança
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Autonomia, senso de dever e capacidade de se concentrar em objetivos desafiadores.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Condicionamento & Postura
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Crescimento saudável, prevenção de desvios posturais e gasto de energia acumulada.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Comunidade Positiva
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Um grupo saudável longe de hábitos nocivos, focado na prática esportiva e na evolução.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Caminho Competitivo
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Oportunidade de disputar torneios regionais e estaduais com suporte do time GB.
            </p>
          </div>
        </div>
      </section>

      {/* Age Recommender */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AgeRecommender currentModalitySlug="/jiu-jitsu-juniores" />
      </section>

      {/* ScheduleGrid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-anton text-3xl text-white uppercase tracking-wider">
              HORÁRIOS DOS JUNIORES
            </h3>
            <p className="text-xs text-slate-400 mt-1">Segunda, Quarta e Sexta às 16:00</p>
          </div>
          <ScheduleGrid filterByModality="jiu-jitsu-juniores" showFilters={false} showLegend={false} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FAQ items={JUNIORES_FAQS} title="DÚVIDAS SOBRE A TURMA DE JUNIORES" />
      </section>

      {/* CTA Final */}
      <CTAFinal
        customTitle="TRAGA SEU FILHO(A) PARA UMA AULA EXPERIMENTAL"
        customText="Aulas dinâmicas, instrutores experientes e um tatame seguro no centro de Juiz de Fora."
        modalityName="Jiu-Jitsu Juniores"
      />
    </div>
  );
};
