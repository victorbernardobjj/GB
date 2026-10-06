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
    <div className="bg-[#F7F6F3] text-[#111111] font-inter">
      {/* Soft black #0E0E0E only on Hero as requested */}
      <PageHero
        image="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Prática de Muay Thai"
        badge="Parceria Técnica • Team Recruta"
        title="Muay Thai"
        subtitle="Condicionamento físico, controle de distância e ensino da tradicional arte marcial tailandesa com segurança técnica."
        isDark={true}
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="whatsapp"
              size="md"
              whatsappMessage="Olá. Gostaria de agendar uma aula experimental de Muay Thai na GB Centro JF."
            >
              Secretaria GB
            </Button>
            <Button
              variant="whatsapp-tr"
              size="md"
              whatsappMessage="Olá Team Recruta. Gostaria de informações sobre o Muay Thai na GB Centro JF."
            >
              Team Recruta
            </Button>
          </div>
        }
      />

      {/* Seção 01: As Oito Armas */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.12em] font-medium text-[#5A5A57] block">
              01 / Tradição
            </span>
            <h2 className="font-title text-3xl sm:text-4xl uppercase tracking-wide text-[#111111]">
              A arte das oito armas
            </h2>
            <p className="text-sm sm:text-base text-[#5A5A57] leading-relaxed">
              Sistema de combate em pé que integra o uso combinado de punhos, cotovelos, joelhos e canelas, priorizando mecânica articular correta e disciplina de treino em duplas.
            </p>
          </div>

          <div className="lg:col-span-7 border-t border-[#D9D6CF] divide-y divide-[#D9D6CF]">
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3">
              <span className="md:col-span-4 text-xs font-mono text-[#5A5A57]">01. Punhos e Cotovelos</span>
              <p className="md:col-span-8 text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
                Golpes de média e curta distância combinados a movimentação de guarda defensiva.
              </p>
            </div>
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3">
              <span className="md:col-span-4 text-xs font-mono text-[#5A5A57]">02. Joelhos e Canelas</span>
              <p className="md:col-span-8 text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
                Ataques de impacto em aparadores acolchoados e trabalho focado no fortalecimento do core e membros inferiores.
              </p>
            </div>
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3">
              <span className="md:col-span-4 text-xs font-mono text-[#5A5A57]">03. Cardiorrespiratório</span>
              <p className="md:col-span-8 text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
                Alta queima calórica e aumento da resistência física com exercícios intervalados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 02: Parceria Team Recruta */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <div className="p-8 border border-[#D9D6CF] bg-[#EDEBE6] rounded-[2px] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#5A5A57] font-medium">Equipe Parceira</span>
            <h3 className="font-title text-2xl sm:text-3xl uppercase tracking-wide text-[#111111]">
              Supervisão técnica Team Recruta
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5A57] leading-relaxed max-w-xl">
              As sessões de Muay Thai na unidade são conduzidas sob a metodologia da Team Recruta, equipe de referência regional em lutas de contato.
            </p>
          </div>

          <div className="md:col-span-4 flex items-center md:justify-end">
            <Button
              variant="secondary"
              size="sm"
              whatsappMessage="Olá Team Recruta. Gostaria de informações sobre o Muay Thai na GB Centro JF."
            >
              Falar com a Team Recruta
            </Button>
          </div>
        </div>
      </section>

      {/* Seção 03: Horários */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <ScheduleGrid filterByModality="muay-thai" showFilters={false} showLegend={false} title="Horários de Muay Thai" />
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <FAQ items={STRIKING_FAQS} title="Dúvidas sobre o Muay Thai" />
      </section>

      <CTAFinal
        customTitle="Agende uma aula de Muay Thai."
        customText="Sessão inaugural gratuita. Recomendamos vir com roupa de treino leve e garrafa de água."
        modalityName="Muay Thai"
      />
    </div>
  );
};
