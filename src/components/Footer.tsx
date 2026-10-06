import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, Star, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { BrushDivider } from './BrushDivider';
import { GYM_INFO, getWhatsAppLink } from '../data/info';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gb-black text-slate-300 pt-0 border-t border-neutral-900 overflow-hidden">
      {/* Torn brush on top of footer transitioning from whatever section is above */}
      <BrushDivider color="black" position="top" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <Link to="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                  <img
                    src="/logo-gb.png"
                    alt="Gracie Barra Oficial"
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-anton text-2xl text-white tracking-wider block leading-none text-center">
                    GRACIE BARRA
                  </span>
                  <span className="w-full text-center text-[10px] font-bold text-gb-red tracking-[0.24em] uppercase leading-tight font-poppins">
                    CENTRO JUIZ DE FORA
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Jiu-Jitsu para todos. Do primeiro treino à faixa preta. Estrutura profissional, professores certificados e uma metodologia pioneira no mundo.
            </p>

            <div className="pt-1">
              <span className="inline-block text-xs font-bold text-gb-red tracking-wider bg-gb-red/10 border border-gb-red/20 px-3 py-1 rounded-full">
                {GYM_INFO.social.hashtag}
              </span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={GYM_INFO.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gb-red flex items-center justify-center text-white transition-colors"
                aria-label="Instagram Oficial"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={GYM_INFO.social.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center text-white transition-colors"
                aria-label="Google Avaliações"
              >
                <Star className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppLink('Olá! Vim pelo site da Gracie Barra Centro JF.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-emerald-600 flex items-center justify-center text-white transition-colors"
                aria-label="WhatsApp Direto"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Modalities */}
          <div>
            <h3 className="font-anton text-lg text-white uppercase tracking-wider mb-4 border-l-2 border-gb-red pl-2.5">
              Modalidades
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/jiu-jitsu-adulto" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gb-red"></span>
                  Jiu-Jitsu Adulto (Misto/No-Gi)
                </Link>
              </li>
              <li>
                <Link to="/jiu-jitsu-feminino" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gb-pink"></span>
                  Jiu-Jitsu Feminino
                </Link>
              </li>
              <li>
                <Link to="/jiu-jitsu-juniores" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gb-red"></span>
                  Jiu-Jitsu Juniores (11-15a)
                </Link>
              </li>
              <li>
                <Link to="/jiu-jitsu-kids" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gb-red"></span>
                  Jiu-Jitsu Kids (5-11a)
                </Link>
              </li>
              <li>
                <Link to="/pequenos-campeoes" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gb-red"></span>
                  Pequenos Campeões (3-5a)
                </Link>
              </li>
              <li>
                <Link to="/muay-thai" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gb-blue"></span>
                  Muay Thai (Team Recruta)
                </Link>
              </li>
              <li>
                <Link to="/boxe" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gb-blue"></span>
                  Boxe Adulto
                </Link>
              </li>
              <li>
                <Link to="/krav-maga" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  Krav Maga (Mestre Kobi)
                </Link>
              </li>
              <li>
                <Link to="/hapkido" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  Hapkido
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts & Hours shortcut */}
          <div>
            <h3 className="font-anton text-lg text-white uppercase tracking-wider mb-4 border-l-2 border-gb-red pl-2.5">
              Contato & Local
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-gb-red flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">Endereço Oficial:</strong>
                  {GYM_INFO.address.street}, {GYM_INFO.address.number} – {GYM_INFO.address.neighborhood}, {GYM_INFO.address.city} – {GYM_INFO.address.state}
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <Phone className="w-5 h-5 text-gb-red flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">WhatsApp Gracie Barra:</strong>
                  <a
                    href={getWhatsAppLink('Olá! Gostaria de falar com a recepção da Gracie Barra Centro JF.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-gb-red transition-colors"
                  >
                    {GYM_INFO.phones.whatsappGBFormatted}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Phone className="w-5 h-5 text-gb-blue flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">WhatsApp Team Recruta (Muay Thai):</strong>
                  <a
                    href={getWhatsAppLink('Olá Team Recruta! Gostaria de saber sobre Muay Thai.', GYM_INFO.phones.whatsappTeamRecruta)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-sky-400 transition-colors"
                  >
                    {GYM_INFO.phones.whatsappTeamRecrutaFormatted}
                  </a>
                </div>
              </li>

              <li className="pt-1">
                <Link
                  to="/horarios"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gb-red uppercase tracking-wider hover:underline"
                >
                  <Clock className="w-4 h-4" />
                  <span>Ver quadro de horários completo</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Mini Map & Quick Access */}
          <div>
            <h3 className="font-anton text-lg text-white uppercase tracking-wider mb-4 border-l-2 border-gb-red pl-2.5">
              Como Chegar
            </h3>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg relative h-40 bg-neutral-900 group">
              <iframe
                title="Mini Mapa Gracie Barra Centro Juiz de Fora"
                src={GYM_INFO.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-75 group-hover:opacity-100 transition-opacity"
              />
              <a
                href={GYM_INFO.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 px-3 py-1.5 rounded-full bg-gb-red text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1 hover:bg-gb-red-dark transition-colors"
              >
                <span>Rotas</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-xs text-slate-400 mt-2.5">
              Ponto central com fácil acesso na Av. Barão do Rio Branco, próximo a linhas de ônibus e estacionamento.
            </p>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-12 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Gracie Barra Centro Juiz de Fora. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link to="/uniforme" className="hover:text-white transition-colors">
              Regras de Uniforme
            </Link>
            <Link to="/horarios" className="hover:text-white transition-colors">
              Horários
            </Link>
            <Link to="/localizacao" className="hover:text-white transition-colors">
              Localização
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
