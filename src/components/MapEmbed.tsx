import React from 'react';
import { MapPin, Navigation, ArrowUpRight } from 'lucide-react';
import { GYM_INFO } from '../data/info';

interface MapEmbedProps {
  className?: string;
  showDetails?: boolean;
}

export const MapEmbed: React.FC<MapEmbedProps> = ({ className = '', showDetails = true }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Red offset graphic accent behind frame (as in the original site) */}
      <div className="absolute -inset-2 sm:-inset-3 bg-gb-red/80 rounded-3xl transform rotate-1 sm:rotate-2 -z-10 shadow-2xl glow-red pointer-events-none" />

      {/* Main Container Card */}
      <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 bg-neutral-950 shadow-2xl">
        {/* Map iframe */}
        <div className="relative h-72 sm:h-96 w-full">
          <iframe
            title="Localização da Gracie Barra Centro Juiz de Fora"
            src={GYM_INFO.maps.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full filter contrast-105"
          />
        </div>

        {/* Floating / Bottom Card Details */}
        {showDetails && (
          <div className="p-4 sm:p-6 bg-gb-blue-dark text-white border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-2xl bg-gb-red text-white flex-shrink-0 glow-red">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-anton text-lg tracking-wide uppercase">
                  {GYM_INFO.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  {GYM_INFO.address.full}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Fácil acesso no coração de Juiz de Fora • Estacionamento nas proximidades
                </p>
              </div>
            </div>

            <a
              href={GYM_INFO.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gb-red hover:bg-gb-red-dark text-white font-bold text-xs uppercase tracking-wider shadow-lg glow-red transition-all cursor-pointer flex-shrink-0"
            >
              <Navigation className="w-4 h-4" />
              <span>Como chegar (GPS)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
