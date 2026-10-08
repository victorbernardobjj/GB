import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppLink, GYM_INFO } from '../data/info';

export const FloatingWhatsApp: React.FC = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const defaultMsg =
    'Olá! Estive no site da Gracie Barra Centro Juiz de Fora e quero agendar minha aula experimental!';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 floating-whatsapp">
      {/* Tooltip bubble on hover */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-neutral-900 text-white text-xs py-2 px-3.5 rounded border border-white/10 shadow-xs transition-opacity duration-200 ${
          isTooltipOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
        <span>Fale com a gente pelo WhatsApp</span>
      </div>

      <a
        href={getWhatsAppLink(defaultMsg, GYM_INFO.phones.whatsappGB)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        onMouseEnter={() => setIsTooltipOpen(true)}
        onMouseLeave={() => setIsTooltipOpen(false)}
        className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gb-red text-white border border-white/10 shadow-sm hover:bg-gb-red-dark transition-colors duration-200"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        <span className="sr-only">Agendar no WhatsApp</span>
      </a>
    </div>
  );
};
