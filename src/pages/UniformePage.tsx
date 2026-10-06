import React, { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { CTAFinal } from '../components/CTAFinal';
import { Button } from '../components/Button';
import { ShieldCheck, Info, Check, ArrowUpRight } from 'lucide-react';
import { UNIFORM_DATA, UniformHotspot } from '../data/uniforms';
import { getWhatsAppLink, GYM_INFO } from '../data/info';

export const UniformePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    'masculino' | 'feminino' | 'kids-masculino' | 'kids-feminino'
  >('masculino');
  const [activeTab, setActiveTab] = useState<'gi' | 'nogi'>('gi');
  const [activeHotspot, setActiveHotspot] = useState<UniformHotspot | null>(null);

  const currentCategoryData =
    UNIFORM_DATA.find((c) => c.id === selectedCategory) || UNIFORM_DATA[0];

  const currentBlock = activeTab === 'gi' ? currentCategoryData.gi : currentCategoryData.noGi;

  return (
    <div className="bg-[#F7F6F3] text-[#111111] font-inter">
      {/* Hero Editorial */}
      <PageHero
        image="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Alunos uniformizados com quimono oficial no tatame"
        badge="Normas Técnicas"
        title="Regras de Uniforme"
        subtitle="Padronização oficial de vestimenta para sessões com quimono (Gi) e sem quimono (No-Gi), preservando a tradição e a higiene no tatame."
        actions={
          <Button
            variant="whatsapp"
            size="md"
            whatsappMessage="Olá. Gostaria de tirar dúvidas sobre a compra do uniforme oficial Gracie Barra."
          >
            Consultar tamanhos disponíveis
          </Button>
        }
      />

      {/* Aviso institucional sóbrio */}
      <div className="border-b border-[#D9D6CF] bg-[#EDEBE6] py-4 px-5 sm:px-8 text-xs text-[#111111]">
        <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#A3181A]">[Norma de conduta]</span>
            <span>O uso do quimono oficial Gracie Barra é mandatório para alunos matriculados após o período experimental.</span>
          </div>
          <span className="text-[#5A5A57] text-[11px]">Primeira aula: vestimenta esportiva livre</span>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        {/* Seletor de Categoria e Modalidade */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-[#D9D6CF]">
          {/* Categorias (Masculino, Feminino, Kids) */}
          <div className="flex flex-wrap items-center gap-2">
            {UNIFORM_DATA.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setActiveHotspot(null);
                  }}
                  className={`px-4 py-2 text-xs font-medium rounded-[2px] border transition-colors cursor-pointer ${
                    isSelected
                      ? 'border-[#111111] bg-[#111111] text-white'
                      : 'border-[#D9D6CF] bg-white text-[#5A5A57] hover:text-[#111111] hover:bg-[#EDEBE6]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Alternância Gi / No-Gi */}
          <div className="inline-flex items-center p-1 border border-[#D9D6CF] bg-[#EDEBE6] rounded-[2px] self-start md:self-auto">
            <button
              type="button"
              onClick={() => {
                setActiveTab('gi');
                setActiveHotspot(null);
              }}
              className={`px-4 py-1.5 text-xs font-medium rounded-[2px] transition-colors cursor-pointer ${
                activeTab === 'gi'
                  ? 'bg-white text-[#111111] shadow-xs'
                  : 'text-[#5A5A57] hover:text-[#111111]'
              }`}
            >
              Com Quimono (Gi)
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('nogi');
                setActiveHotspot(null);
              }}
              className={`px-4 py-1.5 text-xs font-medium rounded-[2px] transition-colors cursor-pointer ${
                activeTab === 'nogi'
                  ? 'bg-white text-[#111111] shadow-xs'
                  : 'text-[#5A5A57] hover:text-[#111111]'
              }`}
            >
              Sem Quimono (No-Gi)
            </button>
          </div>
        </div>

        {/* Quadro Interativo e Especificações */}
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Diagrama Visual Editorial com Hotspots Numerados */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border border-[#D9D6CF] rounded-[2px] bg-[#EDEBE6] p-8 relative flex flex-col items-center justify-center min-h-[460px]">
              <span className="text-[11px] font-mono text-[#5A5A57] uppercase tracking-wider absolute top-4 left-4">
                Visualização esquemática
              </span>

              {/* Silhueta esquemática */}
              <div className="relative w-56 h-88 flex items-center justify-center my-4">
                <svg
                  viewBox="0 0 200 320"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Cabeça / Pescoço */}
                  <circle cx="100" cy="32" r="20" fill="#D9D6CF" />
                  
                  {activeTab === 'gi' ? (
                    <>
                      {/* Quimono / Casaco */}
                      <path
                        d="M50 72 L25 150 L55 155 L75 110 L75 200 L125 200 L125 110 L145 155 L175 150 L150 72 L100 82 Z"
                        fill="#FFFFFF"
                        stroke="#111111"
                        strokeWidth="2"
                      />
                      {/* Lapelas cruzadas */}
                      <path d="M75 102 L100 162 L125 102" stroke="#A3181A" strokeWidth="2.5" />
                      {/* Faixa com ponteira vermelha */}
                      <rect
                        x="70"
                        y="180"
                        width="60"
                        height="14"
                        fill="#111111"
                        stroke="#111111"
                        strokeWidth="1"
                      />
                      <rect x="110" y="180" width="16" height="14" fill="#A3181A" />
                      {/* Calça */}
                      <path
                        d="M75 200 L70 300 L95 300 L100 230 L105 300 L130 300 L125 200 Z"
                        fill="#FFFFFF"
                        stroke="#111111"
                        strokeWidth="2"
                      />
                    </>
                  ) : (
                    <>
                      {/* Rashguard No-Gi */}
                      <path
                        d="M55 75 L30 140 L58 145 L75 110 L75 185 L125 185 L125 110 L142 145 L170 140 L145 75 Z"
                        fill="#14284B"
                        stroke="#111111"
                        strokeWidth="1.5"
                      />
                      <polygon points="100,105 114,128 86,128" fill="#A3181A" />
                      {/* Bermuda compressão */}
                      <path
                        d="M72 185 L65 250 L95 250 L100 215 L105 250 L135 250 L128 185 Z"
                        fill="#111111"
                        stroke="#111111"
                        strokeWidth="1.5"
                      />
                    </>
                  )}
                </svg>

                {/* Hotspots numerados elegantes */}
                {currentBlock.hotspots.map((h, idx) => {
                  const isActive = activeHotspot?.id === h.id;
                  const num = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;

                  return (
                    <button
                      key={h.id}
                      type="button"
                      onClick={() => setActiveHotspot(isActive ? null : h)}
                      style={{
                        left: `${h.xPercent}%`,
                        top: `${h.yPercent}%`,
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 focus:outline-none"
                      aria-label={h.title}
                    >
                      <span
                        className={`w-6 h-6 rounded-full border text-[10px] font-mono flex items-center justify-center transition-colors shadow-xs ${
                          isActive
                            ? 'bg-[#A3181A] border-[#A3181A] text-white font-semibold'
                            : 'bg-white border-[#111111] text-[#111111] hover:bg-[#EDEBE6]'
                        }`}
                      >
                        {num}
                      </span>
                    </button>
                  );
                })}
              </div>

              <p className="text-[11px] text-[#5A5A57] text-center pt-2">
                Clique nos pontos numerados para visualizar a especificação técnica da peça.
              </p>
            </div>

            {/* Chamada para o ponto ativo */}
            {activeHotspot && (
              <div className="p-4 border border-[#111111] bg-white rounded-[2px] space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3181A] block">
                  Ponto de inspeção
                </span>
                <h4 className="font-title text-lg uppercase text-[#111111] tracking-wide">
                  {activeHotspot.title}
                </h4>
                <p className="text-xs text-[#5A5A57] leading-relaxed">
                  {activeHotspot.description}
                </p>
              </div>
            )}
          </div>

          {/* Relação Editorial de Peças */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.12em] font-medium text-[#5A5A57] block mb-1">
                Especificação
              </span>
              <h3 className="font-title text-3xl sm:text-4xl text-[#111111] uppercase tracking-wide">
                {currentBlock.title}
              </h3>
              <p className="text-sm text-[#5A5A57] mt-2 leading-relaxed">
                {currentBlock.description}
              </p>
            </div>

            {/* Lista detalhada com divisórias finas */}
            <div className="border-t border-[#D9D6CF] divide-y divide-[#D9D6CF]">
              {currentBlock.items.map((item) => (
                <div key={item.id} className="py-5 space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-title text-xl text-[#111111] uppercase tracking-wide flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#A3181A] flex-shrink-0" strokeWidth={1.5} />
                      <span>{item.name}</span>
                    </h4>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 border border-[#D9D6CF] bg-[#EDEBE6] text-[#5A5A57] rounded-[1px]">
                      {item.requiredFor}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5A5A57] leading-relaxed max-w-[64ch]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seção Informativa: Aquisição e Atendimento */}
        <div className="mt-20 pt-12 border-t border-[#D9D6CF] grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 space-y-3">
            <span className="text-xs text-[#5A5A57] uppercase tracking-[0.12em] font-medium block">
              Atendimento e Aquisição
            </span>
            <h3 className="font-title text-2xl sm:text-3xl text-[#111111] uppercase tracking-wide">
              Como adquirir seu uniforme oficial
            </h3>
            <p className="text-sm text-[#5A5A57] leading-relaxed max-w-[62ch]">
              A recepção da Gracie Barra Centro Juiz de Fora dispõe de mostruário para prova de tamanhos infantis, femininos (F1 a F4) e masculinos (A0 a A5). Os modelos seguem o padrão regulamentar da Federação Internacional de Jiu-Jitsu (IBJJF).
            </p>
          </div>

          <div className="md:col-span-4 flex items-center md:justify-end pt-2">
            <Button
              variant="whatsapp"
              size="md"
              whatsappMessage="Olá. Gostaria de saber os valores e a disponibilidade de quimonos e uniformes na recepção da GB Centro JF."
            >
              Consultar recepção
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTAFinal
        customTitle="A primeira aula não requer quimono."
        customText="Para o treino experimental, compareça com vestimenta esportiva confortável (bermuda e camiseta sem zíperes). A escola disponibiliza a estrutura necessária."
        modalityName="Aula Experimental"
      />
    </div>
  );
};
