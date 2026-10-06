import React from 'react';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { CTAFinal } from '../components/CTAFinal';
import { FAQ } from '../components/FAQ';
import { Button } from '../components/Button';
import { STRIKING_FAQS } from '../data/faq';

export const BoxePage: React.FC = () => {
  return (
    <div className="bg-[#F7F6F3] text-[#111111] font-inter">
      {/* Soft black #0E0E0E only on Hero as requested */}
      <PageHero
        image="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Treino de Boxe na Gracie Barra"
        badge="Programa Adulto • A Nobre Arte"
        title="Boxe Adulto"
        subtitle="Postura, tempo de reação, movimentação de pernas e golpes fundamentais da escola clássica de boxe."
        isDark={true}
        actions={
          <Button
            variant="whatsapp"
            size="md"
            whatsappMessage="Olá. Gostaria de agendar uma aula experimental de Boxe Adulto na GB Centro JF."
          >
            Agendar aula experimental
          </Button>
        }
      />

      {/* Seção 01: Fundamentos */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.12em] font-medium text-[#5A5A57] block">
              01 / Fundamentos
            </span>
            <h2 className="font-title text-3xl sm:text-4xl uppercase tracking-wide text-[#111111]">
              A nobre arte
            </h2>
            <p className="text-sm sm:text-base text-[#5A5A57] leading-relaxed">
              O boxe desenvolve o alinhamento corporal, a rotação de quadril e a agilidade visual. Uma modalidade que alia intensidade cardiovascular ao aperfeiçoamento de esquivas e combinações de socos.
            </p>
          </div>

          <div className="lg:col-span-7 border-t border-[#D9D6CF] divide-y divide-[#D9D6CF]">
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3">
              <span className="md:col-span-4 text-xs font-mono text-[#5A5A57]">01. Footwork</span>
              <p className="md:col-span-8 text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
                Deslocamento coordenado, equilíbrio sobre as pontas dos pés e criação de ângulos favoráveis de ataque e defesa.
              </p>
            </div>
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3">
              <span className="md:col-span-4 text-xs font-mono text-[#5A5A57]">02. Esquivas</span>
              <p className="md:col-span-8 text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
                Movimentação de tronco e cabeça para amortecer ou desviar de golpes com economia de energia.
              </p>
            </div>
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3">
              <span className="md:col-span-4 text-xs font-mono text-[#5A5A57]">03. Golpes</span>
              <p className="md:col-span-8 text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
                Jabs, diretos, cruzados e ganchos aplicados com mecânica biomecânica segura em manoplas e sacos de pancada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 02: Horários */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <ScheduleGrid filterByModality="boxe" showFilters={false} showLegend={false} title="Horários de Boxe Adulto" />
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <FAQ items={STRIKING_FAQS} title="Dúvidas sobre o Boxe" />
      </section>

      <CTAFinal
        customTitle="Agende uma aula de Boxe Adulto."
        customText="Primeiro treino gratuito. Equipamentos de apoio são disponibilizados na primeira sessão."
        modalityName="Boxe Adulto"
      />
    </div>
  );
};
