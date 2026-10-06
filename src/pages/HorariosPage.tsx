import React from 'react';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { MapEmbed } from '../components/MapEmbed';
import { Button } from '../components/Button';
import { MessageCircle, Clock, Calendar, HelpCircle, CheckCircle2 } from 'lucide-react';
import { GYM_INFO, getWhatsAppLink } from '../data/info';

export const HorariosPage: React.FC = () => {
  return (
    <div className="bg-gb-black text-slate-100 min-h-screen">
      {/* Hero */}
      <PageHero
        image="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Foto do tatame da Gracie Barra Centro Juiz de Fora durante treino"
        badge="PLANEJAMENTO SEMANAL"
        title="QUADRO DE HORÁRIOS"
        highlightWord="HORÁRIOS"
        subtitle="Gracie Barra Centro Juiz de Fora. Encontre a aula ideal para a sua rotina diária."
        brushColor="black"
        actions={
          <Button
            variant="whatsapp"
            size="lg"
            whatsappMessage="Olá! Gostaria de agendar uma aula experimental de acordo com a grade de horários."
          >
            Agendar aula experimental
          </Button>
        }
      />

      {/* Main Schedule Container */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScheduleGrid
          initialFilter="all"
          showFilters={true}
          showLegend={true}
          showPrintButton={true}
          title="Grade Oficial Semanal"
        />

        {/* Section: "NÃO ACHOU SEU HORÁRIO?" */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-white/10 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-gb-red/20 text-gb-red flex items-center justify-center mx-auto glow-red">
              <HelpCircle className="w-6 h-6" />
            </div>

            <h3 className="font-anton text-3xl sm:text-4xl text-white uppercase tracking-wider">
              NÃO ACHOU O SEU HORÁRIO?
            </h3>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Temos turmas em formação contínua e horários especiais para aulas particulares (personal) e pequenos grupos. Fale diretamente com nossa coordenação!
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="whatsapp"
                size="md"
                whatsappMessage="Olá! Consultei a grade de horários da GB Centro JF e gostaria de tirar dúvidas sobre turmas e disponibilidades."
              >
                Fale com a gente no WhatsApp
              </Button>

              <span className="text-xs text-slate-400">
                Atendimento rápido de segunda a sábado.
              </span>
            </div>
          </div>
        </div>

        {/* MapEmbed + Endereço */}
        <div className="mt-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-gb-red uppercase tracking-widest block mb-1">
              Como Chegar
            </span>
            <h3 className="font-anton text-2xl sm:text-3xl text-white uppercase tracking-wider">
              NOSSO ENDEREÇO EM JUIZ DE FORA
            </h3>
          </div>
          <MapEmbed showDetails={true} />
        </div>
      </section>
    </div>
  );
};
