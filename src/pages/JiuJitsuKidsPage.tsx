import React from 'react';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { AgeRecommender } from '../components/AgeRecommender';
import { CTAFinal } from '../components/CTAFinal';
import { FAQ } from '../components/FAQ';
import { Button } from '../components/Button';
import { ShieldCheck, Target, Users, Trophy } from 'lucide-react';
import { PARENTS_FAQS } from '../data/faq';

export const JiuJitsuKidsPage: React.FC = () => {
  return (
    <div className="bg-gb-black text-slate-100 min-h-screen">
      {/* Hero */}
      <PageHero
        image="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Crianças de 5 a 11 anos em fila e com kimono no tatame da Gracie Barra"
        badge="GBK 2 • 5 A 11 ANOS"
        title="JIU-JITSU KIDS"
        highlightWord="KIDS"
        subtitle="Para crianças de 5 a 11 anos: mais que um esporte, uma jornada de disciplina, amizade e confiança. Aqui formamos pequenos grandes campeões!"
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

      {/* Schedule highlight notice */}
      <div className="py-4 px-4 bg-gb-red text-white text-center font-anton tracking-wider uppercase text-sm">
        Segunda e Quarta às 09h • Quarta e Sexta às 19h
      </div>

      {/* "O QUE A CRIANÇA APRENDE" */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-gb-red uppercase tracking-widest block mb-2">
            Valores Para a Vida
          </span>
          <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
            BENEFÍCIOS DENTRO E FORA DO TATAME
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-light">
            O Jiu-Jitsu ajuda seu filho na escola, nas amizades e na postura contra o bullying.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-gb-red/20 text-gb-red flex items-center justify-center glow-red">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Antibullying Não-Violento
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Técnicas de controle e firmeza para neutralizar intimidações sem precisar desferir socos ou chutes.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Foco na Escola e Lições
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              A disciplina aprendida ao ouvir os mestres se reflete diretamente nas notas e no comportamento escolar.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Respeito e Companheirismo
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Respeito aos colegas mais graduados, cuidado com os mais novos e solidariedade entre parceiros.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Superação e Resiliência
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Aprender que o erro faz parte do aprendizado e que a constância supera o desânimo.
            </p>
          </div>
        </div>
      </section>

      {/* Age Recommender */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AgeRecommender currentModalitySlug="/jiu-jitsu-kids" />
      </section>

      {/* ScheduleGrid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-anton text-3xl text-white uppercase tracking-wider">
              HORÁRIOS DO JIU-JITSU KIDS
            </h3>
            <p className="text-xs text-slate-400 mt-1">Segunda e Quarta às 09h • Quarta e Sexta às 19h</p>
          </div>
          <ScheduleGrid filterByModality="jiu-jitsu-kids" showFilters={false} showLegend={false} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FAQ items={PARENTS_FAQS} title="DÚVIDAS FREQUENTES DOS PAIS" />
      </section>

      {/* CTA Final */}
      <CTAFinal
        customTitle="AGENDE UMA AULA EXPERIMENTAL GRATUITA"
        customText="Traga seu filho para experimentar uma aula de Jiu-Jitsu Kids na Gracie Barra Centro Juiz de Fora."
        modalityName="Jiu-Jitsu Kids"
      />
    </div>
  );
};
