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
  customTitle = 'PRONTO PARA MUDAR SUA VIDA?',
  customText = 'Sua primeira aula é por nossa conta. Venha conhecer a Gracie Barra Centro Juiz de Fora e sinta a energia do nosso tatame.',
  whatsappMessage,
  modalityName,
}) => {
  const finalMessage =
    whatsappMessage ||
    (modalityName
      ? `Olá! Gostaria de agendar minha aula experimental gratuita de ${modalityName} na GB Centro JF.`
      : 'Olá! Gostaria de agendar minha aula experimental gratuita na Gracie Barra Centro JF.');

  return (
    <section className="relative overflow-hidden bg-gb-red text-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Background with Blue diagonal stripes */}
      <DiagonalStripes variant="blue-only" className="opacity-25" angle="-12deg" />

      {/* Radial soft lighting */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 75% 30%, rgba(11, 61, 145, 0.7) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/25 backdrop-blur-sm text-xs font-bold tracking-widest uppercase border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Sem custos • Sem compromisso</span>
            </div>

            <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-[0.95] text-white">
              {customTitle}
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl font-light leading-relaxed">
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

            {/* Pulsing button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div className="relative group">
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-full bg-white opacity-40 blur-md group-hover:opacity-75 transition duration-300 animate-pulse" />
                <Button
                  variant="primary"
                  size="lg"
                  whatsappMessage={finalMessage}
                  href={`https://wa.me/${GYM_INFO.phones.whatsappGB.replace(
                    /\D/g,
                    ''
                  )}?text=${encodeURIComponent(finalMessage)}`}
                  className="bg-gb-black hover:bg-neutral-900 text-white shadow-2xl relative z-10 font-anton tracking-wider text-sm sm:text-lg md:text-xl py-3.5 sm:py-5 px-5 sm:px-10 whitespace-nowrap"
                >
                  Agendar minha aula grátis
                </Button>
              </div>

              <span className="text-xs text-white/80 max-w-xs text-center lg:text-left">
                Vagas limitadas por turma para garantir atendimento personalizado.
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
