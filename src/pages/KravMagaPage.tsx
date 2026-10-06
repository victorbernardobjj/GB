import React from 'react';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { CTAFinal } from '../components/CTAFinal';
import { FAQ } from '../components/FAQ';
import { Button } from '../components/Button';
import { BadgeNovo } from '../components/BadgeNovo';
import { ShieldCheck, Zap, Target, Award, CheckCircle2 } from 'lucide-react';
import { KRAV_MAGA_FAQS } from '../data/faq';
import { getWhatsAppLink } from '../data/info';

export const KravMagaPage: React.FC = () => {
  return (
    <div className="bg-gb-black text-slate-100 min-h-screen">
      {/* Hero */}
      <PageHero
        image="https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Prática de defesa pessoal e técnicas de Krav Maga"
        badge="SUPERVISÃO GRÃO MESTRE KOBI"
        title="KRAV MAGA"
        highlightWord="MAGA"
        subtitle="Mais horários, mais chances de você evoluir no Krav Maga com a chancela oficial israelense."
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
      <div className="py-4 px-4 bg-gradient-to-r from-gb-red via-neutral-900 to-gb-red text-white flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
        <BadgeNovo text="NOVO HORÁRIO" size="md" />
        <span className="font-anton text-base sm:text-lg tracking-wider uppercase">
          Segunda e Quarta às 18:00 • Garanta sua vaga na nova turma!
        </span>
        <a
          href={getWhatsAppLink('Olá! Quero me inscrever na nova turma de Krav Maga às 18h (Seg/Qua).')}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold bg-white text-gb-red px-3 py-1 rounded-full uppercase tracking-wider hover:bg-slate-200"
        >
          Reservar Vaga
        </a>
      </div>

      {/* "O QUE É O KRAV MAGA" */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-gb-red uppercase tracking-widest block mb-2">
            Defesa Pessoal Pura
          </span>
          <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
            DEFESA PESSOAL PARA SITUAÇÕES REAIS
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-light">
            Não é esporte com regras ou pontuação: é um sistema desenhado para que qualquer pessoa consiga voltar para casa em segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-gb-red/20 text-gb-red flex items-center justify-center glow-red">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Cenários Urbanos
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Defesas contra agarrões, puxões, estrangulamentos, tentativas de agressão armada e múltiplos oponentes.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Reflexos Instintivos
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Técnicas baseadas nos reflexos naturais do corpo humano, facilitando o aprendizado e a rápida execução sob estresse.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Controle sob Adrenalina
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Treinamento de calma mental e tomada de decisões assertivas em momentos de perigo iminente.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Chancela Grão Mestre Kobi
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Garantia de autenticidade da Federação Sul-Americana de Krav Maga, com metodologia fidedigna às origens.
            </p>
          </div>
        </div>
      </section>

      {/* ScheduleGrid filtrado Krav Maga */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-anton text-3xl text-white uppercase tracking-wider">
              TODOS OS HORÁRIOS DE KRAV MAGA
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Seg/Qua 18h (NOVO) • Ter/Qui 16:30 & 17:30 • Sex 08:30 às 10:30
            </p>
          </div>
          <ScheduleGrid filterByModality="krav-maga" showFilters={false} showLegend={false} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FAQ items={KRAV_MAGA_FAQS} title="PERGUNTAS SOBRE O KRAV MAGA" />
      </section>

      {/* CTA Final */}
      <CTAFinal
        customTitle="APRENDA A SE DEFENDER DE VERDADE"
        customText="Sua primeira aula de Krav Maga é gratuita. Venha conhecer a supervisão oficial do Grão Mestre Kobi na GB Centro JF."
        modalityName="Krav Maga"
      />
    </div>
  );
};
