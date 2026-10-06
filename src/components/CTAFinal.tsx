import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, MapPin, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { DiagonalStripes } from './DiagonalStripes';
import { MapEmbed } from './MapEmbed';
import { GYM_INFO } from '../data/info';

interface CTAFinalProps {
  customTitle?: string;
  customText?: string;
  whatsappMessage?: string;
  modalityName?: string;
}

export const CTAFinal: React.FC<CTAFinalProps> = ({
  customTitle = 'AGENDE SUA AULA EXPERIMENTAL GRATUITA',
  customText = 'Sua primeira aula é gratuita. Venha conhecer a Gracie Barra Centro Juiz de Fora e comece a treinar.',
  whatsappMessage,
  modalityName,
}) => {
  const finalMessage =
    whatsappMessage ||
    (modalityName
      ? `Olá! Gostaria de agendar minha aula experimental gratuita de ${modalityName} na GB Centro JF.`
      : 'Olá! Gostaria de agendar minha aula experimental gratuita na Gracie Barra Centro JF.');

  return (
    <section className="relative overflow-hidden bg-gb-red text-white py-24 px-4 sm:px-6 lg:px-8 border-t border-red-800/40">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/35 text-xs font-semibold tracking-wider uppercase border border-white/15">
              <span>Sem custos • Sem compromisso</span>
            </div>

            <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-[0.95] text-white">
              {customTitle}
            </h2>

            <p className="text-base sm:text-lg text-white/90 max-w-xl font-light leading-relaxed">
              {customText}
            </p>

            {/* Checklist highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 max-w-lg mx-auto lg:mx-0 text-left text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>Professores faixas-pretas certificados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>Ambiente seguro para toda a família</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>Roupa confortável para começar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>Horários de manhã, tarde e noite</span>
              </div>
            </div>

            {/* Direct button without pulse */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                whatsappMessage={finalMessage}
                href={`https://wa.me/${GYM_INFO.phones.whatsappGB.replace(
                  /\D/g,
                  ''
                )}?text=${encodeURIComponent(finalMessage)}`}
                className="bg-gb-black hover:bg-neutral-900 text-white border-neutral-900 font-anton tracking-wider text-base sm:text-lg py-3.5 px-7"
              >
                Agendar aula experimental gratuita
              </Button>

              <span className="text-xs text-white/80 max-w-xs text-center lg:text-left">
                Vagas organizadas por turma para garantir atendimento próximo.
              </span>
            </div>
          </div>

          {/* Right Map & Address */}
          <div className="lg:col-span-5">
            <MapEmbed showDetails={true} />
          </div>
        </div>
      </div>
    </section>
  );
};
