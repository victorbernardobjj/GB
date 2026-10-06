import React from 'react';
import { PageHero } from '../components/PageHero';
import { MapEmbed } from '../components/MapEmbed';
import { CTAFinal } from '../components/CTAFinal';
import { Button } from '../components/Button';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { GYM_INFO } from '../data/info';

const ESTRUTURA_ITEMS = [
  {
    title: 'Tatame Oficial GB',
    specification: 'Área principal',
    description: 'Tatame de alta densidade revestido e higienizado diariamente para treinos seguros com amortecimento de quedas e espaço amplo para rolamentos.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Vestiários Completos',
    specification: 'Ala masculina e feminina',
    description: 'Instalações com duchas aquecidas, sanitários, armários individuais e ventilação adequada para o conforto pós-treino.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Recepção e Convivência',
    specification: 'Ambiente de acolhimento',
    description: 'Espaço climatizado para atendimento aos alunos, mostruário de quimonos e acomodação de pais e familiares durante as sessões infantis.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Área de Striking',
    specification: 'Muay Thai e Boxe',
    description: 'Setor estruturado com aparadores de chute, manoplas anatômicas e sacos pesados para a prática técnica orientada pela Team Recruta.',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80',
  },
];

export const LocalizacaoPage: React.FC = () => {
  return (
    <div className="bg-[#F7F6F3] text-[#111111] font-inter">
      {/* Hero Editorial */}
      <PageHero
        image="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Estrutura da Gracie Barra Centro Juiz de Fora"
        badge="Endereço e Instalações"
        title="Nossa Unidade"
        subtitle="Localizada na Av. Barão do Rio Branco, com tatame oficial, vestiários e estrutura completa para a prática segura de artes marciais."
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={GYM_INFO.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-[2px] bg-[#A3181A] hover:bg-[#841315] text-white text-sm font-medium transition-colors"
            >
              <span>Abrir rota no Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </a>

            <Button
              variant="secondary"
              size="md"
              whatsappMessage="Olá. Gostaria de agendar uma visita para conhecer as instalações da GB Centro JF."
            >
              Agendar visita presencial
            </Button>
          </div>
        }
      />

      {/* Seção 01: Endereço & Mapa */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Informações de Acesso (5 colunas) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.12em] font-medium text-[#5A5A57] block">
              01 / Acesso e Referências
            </span>

            <h2 className="font-title text-3xl sm:text-4xl uppercase tracking-wide text-[#111111]">
              Localização central
            </h2>

            <div className="p-6 border border-[#D9D6CF] bg-[#EDEBE6] rounded-[2px] space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-[#5A5A57] uppercase tracking-wider block">
                  Endereço oficial:
                </span>
                <p className="font-medium text-sm sm:text-base text-[#111111]">
                  {GYM_INFO.address.street}, {GYM_INFO.address.number}
                </p>
                <p className="text-xs text-[#5A5A57]">
                  Bairro {GYM_INFO.address.neighborhood} • {GYM_INFO.address.city} – {GYM_INFO.address.state}
                </p>
              </div>

              <div className="pt-3 border-t border-[#D9D6CF] space-y-2 text-xs text-[#5A5A57]">
                <div className="flex items-start gap-2">
                  <span className="font-mono text-[#111111]">•</span>
                  <span>Acesso facilitado por transporte público com linhas interbairros.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono text-[#111111]">•</span>
                  <span>Área com comércio consolidado e boa iluminação urbana.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono text-[#111111]">•</span>
                  <span>Vagas para embarque e desembarque rápido na via de acesso.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#5A5A57] space-y-1">
              <p>
                <span className="font-medium text-[#111111]">Atendimento:</span> Segunda a sexta, das 07:00 às 22:00; sábado das 09:00 às 12:00.
              </p>
              <p>
                <span className="font-medium text-[#111111]">Telefone / WhatsApp:</span> {GYM_INFO.phones.whatsappGBFormatted}
              </p>
            </div>
          </div>

          {/* Mapa Incorporado (7 colunas) */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.12em] font-medium text-[#5A5A57] block mb-4">
              Mapa Interativo
            </span>
            <MapEmbed showDetails={true} />
          </div>
        </div>
      </section>

      {/* Seção 02: Instalações e Estrutura */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <div className="mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.12em] font-medium text-[#5A5A57] block">
            02 / Instalações
          </span>
          <h2 className="font-title text-3xl sm:text-4xl uppercase tracking-wide text-[#111111]">
            Estrutura da academia
          </h2>
          <p className="text-sm sm:text-base text-[#5A5A57] max-w-2xl leading-relaxed">
            Ambiente concebido sob as diretrizes de qualidade do método Carlos Gracie Jr., priorizando higiene rigorosa, conforto e respeito aos alunos.
          </p>
        </div>

        {/* Grade Editorial 4 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ESTRUTURA_ITEMS.map((item, idx) => {
            const num = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;

            return (
              <div
                key={item.title}
                className="border border-[#D9D6CF] rounded-[2px] bg-[#EDEBE6] overflow-hidden flex flex-col justify-between"
              >
                <div className="aspect-[4/3] bg-[#D9D6CF] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover img-editorial"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#5A5A57] font-mono mb-1">
                      <span>{num}</span>
                      <span>{item.specification}</span>
                    </div>
                    <h3 className="font-title text-xl uppercase tracking-wide text-[#111111]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#5A5A57] leading-relaxed pt-2 border-t border-[#D9D6CF]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Final */}
      <CTAFinal
        customTitle="Venha conhecer o espaço pessoalmente."
        customText="Nossa equipe está pronta para receber sua visita e apresentar o tatame antes de sua primeira aula experimental."
        modalityName="Visita Presencial"
      />
    </div>
  );
};
