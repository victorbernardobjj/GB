import React from 'react';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { CTAFinal } from '../components/CTAFinal';
import { FAQ } from '../components/FAQ';
import { Button } from '../components/Button';
import { STRIKING_FAQS } from '../data/faq';
import { GYM_INFO } from '../data/info';

export const MuayThaiPage: React.FC = () => {
  return (
    <div className="bg-gb-black text-slate-100 min-h-screen">
      <PageHero
        image="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Prática de Muay Thai com aparadores e luvas"
        badge="Parceria Técnica • Team Recruta"
        title="Muay Thai"
        highlightWord="Thai"
        subtitle="Condicionamento físico de alta intensidade, controle de distância e ensino da tradicional arte marcial tailandesa com segurança técnica."
        overlayType="darker"
        floatingBadges={['Arte das 8 Armas', 'Parceria Team Recruta', 'Alta Intensidade']}
        actions={
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Button
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto"
              whatsappMessage="Olá! Gostaria de agendar uma aula experimental de Muay Thai na GB Centro JF."
            >
              Secretaria GB
            </Button>
            <Button
              variant="whatsapp-tr"
              size="lg"
              className="w-full sm:w-auto"
              whatsappMessage="Olá Team Recruta! Gostaria de informações sobre o Muay Thai na GB Centro JF."
            >
              Team Recruta
            </Button>
          </div>
        }
      />

      {/* Seção 01: As Oito Armas */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-sky-400 block">
              01 / Tradição Tailandesa
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-white">
              A arte das oito armas
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Sistema de combate em pé que integra o uso combinado de punhos, cotovelos, joelhos e canelas, priorizando mecânica articular correta e disciplina de treino em duplas.
            </p>
          </div>

          <div className="lg:col-span-7 border-t border-white/10 divide-y divide-white/10">
            <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              <span className="md:col-span-4 font-anton text-lg text-white uppercase tracking-wider flex items-center gap-2">
                <span className="text-sky-400">01.</span> Punhos & Cotovelos
              </span>
              <p className="md:col-span-8 text-sm text-slate-300 font-light leading-relaxed">
                Golpes de média e curta distância combinados a movimentação de guarda defensiva e esquivas.
              </p>
            </div>
            <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              <span className="md:col-span-4 font-anton text-lg text-white uppercase tracking-wider flex items-center gap-2">
                <span className="text-sky-400">02.</span> Joelhos & Canelas
              </span>
              <p className="md:col-span-8 text-sm text-slate-300 font-light leading-relaxed">
                Ataques de impacto em aparadores acolchoados e trabalho focado no fortalecimento do core e membros inferiores.
              </p>
            </div>
            <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              <span className="md:col-span-4 font-anton text-lg text-white uppercase tracking-wider flex items-center gap-2">
                <span className="text-sky-400">03.</span> Cardio Explosivo
              </span>
              <p className="md:col-span-8 text-sm text-slate-300 font-light leading-relaxed">
                Alta queima calórica e aumento da resistência física com exercícios intervalados e manoplas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 02: Parceria Team Recruta */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-10 border border-sky-500/30 bg-gradient-to-r from-blue-950/60 to-neutral-900 rounded-3xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-2xl">
          <div className="md:col-span-8 space-y-2">
            <span className="text-xs uppercase tracking-widest text-sky-400 font-bold">Equipe Parceira Oficial</span>
            <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-wider text-white">
              Supervisão técnica Team Recruta
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl">
              As sessões de Muay Thai na unidade são conduzidas sob a metodologia da Team Recruta, equipe de referência regional em lutas de contato.
            </p>
          </div>

          <div className="md:col-span-4 flex items-center md:justify-end">
            <Button
              variant="whatsapp-tr"
              size="md"
              whatsappMessage="Olá Team Recruta! Gostaria de informações sobre o Muay Thai na GB Centro JF."
            >
              Falar com a Team Recruta
            </Button>
          </div>
        </div>
      </section>

      {/* Seção 03: Horários */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <ScheduleGrid filterByModality="muay-thai" showFilters={false} showLegend={false} title="Horários de Muay Thai" />
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <FAQ items={STRIKING_FAQS} title="Dúvidas sobre o Muay Thai" />
      </section>

      <CTAFinal
        customTitle="Agende sua aula de Muay Thai"
        customText="Venha conhecer o treino de Muay Thai da Team Recruta na GB Centro JF. Recomendamos vir com roupa de treino leve e garrafa de água."
        modalityName="Muay Thai"
      />
    </div>
  );
};
