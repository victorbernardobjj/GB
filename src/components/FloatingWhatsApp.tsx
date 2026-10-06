import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink, GYM_INFO } from '../data/info';

export const FloatingWhatsApp: React.FC = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const defaultMsg =
    'Olá! Estive no site da Gracie Barra Centro Juiz de Fora e quero agendar minha aula experimental gratuita!';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 floating-whatsapp">
      {/* Tooltip bubble on hover or initial hint */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-gb-black/90 text-white text-xs py-2 px-3.5 rounded-full border border-white/20 shadow-xl backdrop-blur-md transition-all duration-300 ${
          isTooltipOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Fale com a gente pelo WhatsApp</span>
      </div>

      <a
        href={getWhatsAppLink(defaultMsg, GYM_INFO.phones.whatsappGB)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        onMouseEnter={() => setIsTooltipOpen(true)}
        onMouseLeave={() => setIsTooltipOpen(false)}
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gb-red text-white shadow-2xl shadow-red-950/80 hover:bg-gb-red-dark hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Continuous soft pulse ring */}
        <span
          className="absolute -inset-1 rounded-full bg-gb-red opacity-60 animate-ping pointer-events-none"
          style={{ animationDuration: '2.5s' }}
        />
        <span className="absolute -inset-2 rounded-full border-2 border-gb-red/40 animate-pulse pointer-events-none" />

        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 transition-transform group-hover:scale-110" />

        <span className="sr-only">Agendar no WhatsApp</span>
      </a>
    </div>
  );
};
