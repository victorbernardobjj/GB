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
      {/* Main Container Card */}
      <div className="relative rounded-lg overflow-hidden border border-white/10 bg-neutral-900 shadow-sm">
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
            className="w-full h-full filter grayscale-[0.6] contrast-100"
          />
        </div>

        {/* Floating / Bottom Card Details */}
        {showDetails && (
          <div className="p-4 sm:p-6 bg-gb-blue-dark text-white border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gb-red flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-anton text-lg tracking-wide uppercase">
                  {GYM_INFO.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  {GYM_INFO.address.full}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Fácil acesso no centro de Juiz de Fora • Estacionamento nas proximidades
                </p>
              </div>
            </div>

            <a
              href={GYM_INFO.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gb-red hover:bg-gb-red-dark text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer shrink-0 border border-gb-red whitespace-nowrap"
            >
              <Navigation className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Como chegar (GPS)</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
