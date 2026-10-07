import React from 'react';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { MapEmbed } from '../components/MapEmbed';
import { Button } from '../components/Button';
import { CTAFinal } from '../components/CTAFinal';
import { GYM_INFO, getWhatsAppLink } from '../data/info';

export const HorariosPage: React.FC = () => {
  return (
    <div className="bg-[#F7F6F3] text-[#111111] font-inter">
      <PageHero
        image="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Tatame durante treino de fundamentos"
        badge="Planejamento Semanal"
        title="Quadro de Horários"
        subtitle="Aulas matutinas, no intervalo do almoço, tarde e noite. Encontre a turma compatível com sua rotina."
        actions={
          <Button
            variant="whatsapp"
            size="md"
            whatsappMessage="Olá. Gostaria de agendar uma aula experimental de acordo com o quadro de horários."
          >
            Agendar aula experimental
          </Button>
        }
      />

      <section className="py-16 sm:py-24 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <ScheduleGrid
          initialFilter="all"
          showFilters={true}
          showLegend={true}
          showPrintButton={true}
          title="Grade Regular de Aulas"
        />

        {/* Section: Horários particulares / dúvidas */}
        <div className="mt-16 pt-12 border-t border-[#D9D6CF] grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 space-y-2">
            <h3 className="font-title text-2xl uppercase tracking-wide text-[#111111]">
              Aulas particulares e horários específicos
            </h3>
            <p className="text-sm text-[#5A5A57] leading-relaxed max-w-[62ch]">
              Caso necessite de horários individualizados ou acompanhamento particular com os professores, consulte a disponibilidade de agenda diretamente com a coordenação técnica.
            </p>
          </div>

          <div className="md:col-span-4 flex items-center md:justify-end">
            <Button
              variant="secondary"
              size="sm"
              whatsappMessage="Olá. Gostaria de consultar a disponibilidade de aulas particulares na GB Centro JF."
            >
              Consultar coordenação
            </Button>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 max-w-[1240px] mx-auto">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-[0.12em] font-medium text-[#5A5A57] block mb-1">
            Local da academia
          </span>
          <h3 className="font-title text-2xl sm:text-3xl uppercase tracking-wide text-[#111111]">
            {GYM_INFO.address.street}, {GYM_INFO.address.number}
          </h3>
        </div>
        <MapEmbed showDetails={true} />
      </section>

      <CTAFinal />
    </div>
  );
};
