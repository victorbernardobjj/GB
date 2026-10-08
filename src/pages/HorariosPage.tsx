import React from 'react';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { MapEmbed } from '../components/MapEmbed';
import { Button } from '../components/Button';
import { CTAFinal } from '../components/CTAFinal';
import { GYM_INFO, getWhatsAppLink } from '../data/info';

export const HorariosPage: React.FC = () => {
  return (
    <div className="bg-gb-black text-slate-100 min-h-screen">
      <PageHero
        image="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Tatame durante treino de fundamentos da Gracie Barra Centro JF"
        badge="Planejamento Semanal"
        title="Quadro de Horários"
        highlightWord="Horários"
        subtitle="Aulas matutinas, no intervalo do almoço, tarde e noite. Encontre a turma compatível com sua rotina."
        actions={
          <Button
            variant="whatsapp"
            size="lg"
            whatsappMessage="Olá! Gostaria de agendar uma aula experimental de acordo com o quadro de horários."
          >
            Agendar aula experimental
          </Button>
        }
      />

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <ScheduleGrid
          initialFilter="all"
          showFilters={true}
          showLegend={true}
          showPrintButton={true}
          title="Grade Regular de Aulas"
        />

        {/* Section: Horários particulares / dúvidas */}
        <div className="mt-16 p-6 sm:p-10 rounded-3xl bg-neutral-900 border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-2">
            <span className="text-xs font-bold text-gb-red uppercase tracking-widest block">
              Aulas Particulares
            </span>
            <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-wider text-white">
              Aulas particulares e horários específicos
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
              Caso necessite de horários individualizados ou acompanhamento particular com os professores faixas-pretas, consulte a disponibilidade de agenda diretamente com a coordenação técnica.
            </p>
          </div>

          <div className="md:col-span-4 flex items-center md:justify-end">
            <Button
              variant="secondary"
              size="md"
              whatsappMessage="Olá! Gostaria de consultar a disponibilidade de aulas particulares na GB Centro JF."
            >
              Consultar coordenação
            </Button>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8 text-center sm:text-left">
          <span className="text-xs uppercase tracking-widest font-bold text-gb-red block mb-1">
            Local da academia
          </span>
          <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-wider text-white">
            {GYM_INFO.address.street}, {GYM_INFO.address.number} – {GYM_INFO.address.neighborhood}
          </h3>
        </div>
        <MapEmbed showDetails={true} />
      </section>

      <CTAFinal />
    </div>
  );
};
