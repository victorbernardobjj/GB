import React from 'react';
import { PageHero } from '../components/PageHero';
import { MapEmbed } from '../components/MapEmbed';
import { CTAFinal } from '../components/CTAFinal';
import { Button } from '../components/Button';
import { MapPin, Navigation, Clock, ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';
import { GYM_INFO, getWhatsAppLink } from '../data/info';

const ESTRUTURA_ITEMS = [
  {
    title: 'Tatame Olímpico Oficial GB',
    description: 'Tatame de alta densidade revestido e higienizado diariamente para treinos seguros com amortecimento de quedas.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Vestiários Completos',
    description: 'Estrutura masculina e feminina com duchas aquecidas, armários e ventilação adequada.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Área de Convivência & Recepção',
    description: 'Ambiente climatizado para pais assistirem aos treinos dos filhos e confraternização entre alunos.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Equipamentos de Striking & Sacos',
    description: 'Área dedicada com aparadores de chute, manoplas e sacos pesados para Muay Thai e Boxe.',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80',
  },
];

export const LocalizacaoPage: React.FC = () => {
  return (
    <div className="bg-gb-black text-slate-100 min-h-screen">
      {/* Hero */}
      <PageHero
        image="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Fachada e estrutura da Gracie Barra Centro Juiz de Fora"
        badge="LOCALIZAÇÃO PRIVILEGIADA"
        title="NOSSA ACADEMIA NO CENTRO DE JUIZ DE FORA"
        highlightWord="CENTRO"
        subtitle="Av. Barão do Rio Branco, 267 – Manuel Honório. Conheça nossa estrutura e venha fazer uma visita!"
        actions={
          <a
            href={GYM_INFO.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gb-red hover:bg-gb-red-dark text-white font-anton text-base uppercase tracking-wider shadow-xl glow-red transition-all cursor-pointer"
          >
            <Navigation className="w-5 h-5" />
            <span>Abrir no GPS / Como chegar</span>
          </a>
        }
      />

      {/* Main Address Card & Map */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-gb-red uppercase tracking-widest block">
              Ponto Estratégico
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
              ONDE ESTAMOS LOCALIZADOS
            </h2>

            <div className="p-6 rounded-3xl bg-neutral-900 border border-white/10 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-gb-red flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-anton text-xl text-white uppercase tracking-wider">
                    Gracie Barra Centro JF
                  </h4>
                  <p className="text-sm text-slate-300 font-light mt-1">
                    {GYM_INFO.address.full}
                  </p>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 space-y-1">
                <p>• Próximo a paradas centrais de ônibus interbairros</p>
                <p>• Estacionamento e facilidade de embarque/desembarque</p>
                <p>• Bairro nobre e seguro com iluminação pública</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={GYM_INFO.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 rounded-full bg-gb-red hover:bg-gb-red-dark text-white font-bold text-xs uppercase tracking-wider text-center shadow-lg glow-red transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Como Chegar (Google Maps)</span>
              </a>

              <Button
                variant="whatsapp"
                size="md"
                whatsappMessage="Olá! Estou indo visitar a academia Gracie Barra Centro JF agora."
              >
                Avisar Recepção
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <MapEmbed showDetails={false} />
          </div>
        </div>

        {/* Galeria da Estrutura */}
        <div className="pt-10 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-gb-red uppercase tracking-widest block mb-2">
              Conforto & Padrão GB
            </span>
            <h3 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
              ESTRUTURA COMPLETA PARA VOCÊ E SUA FAMÍLIA
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-2 font-light">
              Espaço projetado pensando no bem-estar, higiene e segurança dos praticantes de artes marciais.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ESTRUTURA_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all flex flex-col justify-between group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                </div>
                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <h4 className="font-anton text-xl text-white uppercase tracking-wider">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTAFinal
        customTitle="FAÇA UMA VISITA E CONHEÇA DE PERTO"
        customText="Nossa equipe está pronta para receber você e sua família na Av. Barão do Rio Branco, 267."
      />
    </div>
  );
};
