import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { GYM_INFO, getWhatsAppLink } from '../data/info';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gb-blue-dark text-slate-200 border-t border-white/10 text-xs">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Col 1: Identification (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-gb.png"
                alt="Gracie Barra"
                className="w-10 h-10 object-contain"
              />
              <div>
                <span className="font-anton text-xl text-white tracking-wider uppercase block leading-none">
                  GRACIE BARRA
                </span>
                <span className="text-[10px] text-slate-300 uppercase tracking-widest block mt-0.5">
                  Centro Juiz de Fora
                </span>
              </div>
            </div>

            <p className="text-[#A3B2CC] leading-relaxed max-w-sm pt-2">
              Jiu-Jitsu para todos. Aulas estruturadas para crianças, mulheres e adultos, além de Muay Thai, Boxe, Krav Maga e Hapkido.
            </p>

            <div className="text-[11px] text-[#A3B2CC] pt-2">
              <span>{GYM_INFO.social.hashtag}</span>
            </div>
          </div>

          {/* Col 2: Modalities (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-medium text-white tracking-wider uppercase block">
              Modalidades
            </span>
            <ul className="space-y-2 text-[#A3B2CC]">
              <li>
                <Link to="/jiu-jitsu-adulto" className="hover:text-white transition-colors">
                  Jiu-Jitsu Adulto
                </Link>
              </li>
              <li>
                <Link to="/jiu-jitsu-feminino" className="hover:text-white transition-colors">
                  Jiu-Jitsu Feminino
                </Link>
              </li>
              <li>
                <Link to="/jiu-jitsu-juniores" className="hover:text-white transition-colors">
                  Jiu-Jitsu Juniores (11 a 15 anos)
                </Link>
              </li>
              <li>
                <Link to="/jiu-jitsu-kids" className="hover:text-white transition-colors">
                  Jiu-Jitsu Kids (5 a 11 anos)
                </Link>
              </li>
              <li>
                <Link to="/pequenos-campeoes" className="hover:text-white transition-colors">
                  Pequenos Campeões (3 a 5 anos)
                </Link>
              </li>
              <li>
                <Link to="/muay-thai" className="hover:text-white transition-colors">
                  Muay Thai (Team Recruta)
                </Link>
              </li>
              <li>
                <Link to="/boxe" className="hover:text-white transition-colors">
                  Boxe Adulto
                </Link>
              </li>
              <li>
                <Link to="/krav-maga" className="hover:text-white transition-colors">
                  Krav Maga
                </Link>
              </li>
              <li>
                <Link to="/hapkido" className="hover:text-white transition-colors">
                  Hapkido
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic / Info (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-[11px] font-medium text-white tracking-wider uppercase block">
              Institucional
            </span>
            <ul className="space-y-2 text-[#A3B2CC]">
              <li>
                <Link to="/horarios" className="hover:text-white transition-colors">
                  Quadro de Horários
                </Link>
              </li>
              <li>
                <Link to="/uniforme" className="hover:text-white transition-colors">
                  Regras de Uniforme
                </Link>
              </li>
              <li>
                <Link to="/localizacao" className="hover:text-white transition-colors">
                  Localização
                </Link>
              </li>
              <li>
                <a
                  href={GYM_INFO.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={GYM_INFO.social.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Google Avaliações</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Endereço & Contatos (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] font-medium text-white tracking-wider uppercase block">
              Atendimento
            </span>
            <div className="space-y-2 text-[#A3B2CC] leading-relaxed">
              <p>{GYM_INFO.address.full}</p>
              <div className="pt-2">
                <span className="block text-white">WhatsApp Secretaria GB:</span>
                <a
                  href={getWhatsAppLink('Olá. Gostaria de informações sobre a Gracie Barra Centro JF.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline"
                >
                  {GYM_INFO.phones.whatsappGBFormatted}
                </a>
              </div>
              <div>
                <span className="block text-white">WhatsApp Team Recruta (Muay Thai):</span>
                <a
                  href={getWhatsAppLink('Olá Team Recruta. Gostaria de informações sobre o Muay Thai.', GYM_INFO.phones.whatsappTeamRecruta)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline"
                >
                  {GYM_INFO.phones.whatsappTeamRecrutaFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-12 mt-12 border-t border-[#1F3A6B] flex flex-col sm:flex-row items-center justify-between text-[#8E9FB8] gap-4">
          <p>© {new Date().getFullYear()} Gracie Barra Centro Juiz de Fora. Todos os direitos reservados.</p>
          <p className="text-[11px]">Metodologia oficial Carlos Gracie Jr.</p>
        </div>
      </div>
    </footer>
  );
};
