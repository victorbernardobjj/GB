import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHero } from '../components/PageHero';
import { CTAFinal } from '../components/CTAFinal';
import { Button } from '../components/Button';
import {
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  ShoppingBag,
  Sparkles,
  Info,
} from 'lucide-react';
import { UNIFORM_DATA, UniformCategoryRule, UniformHotspot, UniformItem } from '../data/uniforms';
import { getWhatsAppLink } from '../data/info';

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
    <div className="bg-gb-black text-slate-100 min-h-screen">
      {/* Hero */}
      <PageHero
        image="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Alunos uniformizados com o kimono e rash guard oficial Gracie Barra"
        badge="IDENTIDADE & PADRÃO GB"
        title="REGRAS DE UNIFORME GRACIE BARRA"
        highlightWord="UNIFORME"
        subtitle="A armadura do guerreiro Gracie Barra. Entenda os padrões de vestimenta oficial para treinos Gi e No-Gi."
        actions={
          <Button
            variant="whatsapp"
            size="lg"
            whatsappMessage="Olá! Gostaria de tirar dúvidas sobre a compra do uniforme oficial Gracie Barra."
          >
            Dúvidas sobre o uniforme
          </Button>
        }
      />

      {/* Mandatory Uniform Notice Banner */}
      <div className="py-5 px-4 bg-gradient-to-r from-red-950 via-gb-red to-red-950 text-white border-y border-red-400/40 shadow-xl">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-3 text-center sm:text-left">
          <div className="relative flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <AlertTriangle className="w-6 h-6 text-yellow-300 relative" />
          </div>
          <p className="font-anton text-base sm:text-xl tracking-wider uppercase">
            Atenção: Todos os alunos matriculados devem obrigatoriamente usar o uniforme oficial Gracie Barra no tatame!
          </p>
        </div>
      </div>

      {/* Main Uniform Interactive Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Category Tabs (Masculino, Feminino, Kids Masc, Kids Fem) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {UNIFORM_DATA.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setSelectedCategory(cat.id);
                setActiveHotspot(null);
              }}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-anton tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gb-red text-white shadow-xl glow-red scale-105 border border-red-400/40'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gi vs No-Gi Switch */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-full bg-neutral-900 border border-white/10 flex items-center gap-1 shadow-lg">
            <button
              type="button"
              onClick={() => {
                setActiveTab('gi');
                setActiveHotspot(null);
              }}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-anton tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'gi'
                  ? 'bg-gb-red text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Gi (Com Kimono)
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('nogi');
                setActiveHotspot(null);
              }}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-anton tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'nogi'
                  ? 'bg-gb-red text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              No-Gi (Sem Kimono)
            </button>
          </div>
        </div>

        {/* Interactive Uniform Viewer & Piece Breakdown */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${activeTab}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            {/* Interactive Mannequin / Visual Mockup with Hotspots */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-neutral-900 to-gb-blue-dark/50 border border-white/15 p-6 sm:p-10 shadow-2xl flex flex-col items-center justify-center min-h-[440px]">
                {/* Stylized Uniform Silhouette Vector */}
                <div className="relative w-64 h-96 flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 320"
                    className="w-full h-full drop-shadow-2xl"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Head / Collar */}
                    <circle cx="100" cy="30" r="22" fill="#334155" opacity="0.4" />
                    {/* Kimono / Torso */}
                    {activeTab === 'gi' ? (
                      <>
                        <path
                          d="M50 70 L25 150 L55 155 L75 110 L75 200 L125 200 L125 110 L145 155 L175 150 L150 70 L100 80 Z"
                          fill="#FFFFFF"
                          stroke="#E10600"
                          strokeWidth="3"
                        />
                        <path d="M75 100 L100 160 L125 100" stroke="#E10600" strokeWidth="4" />
                        {/* Red GB Belt */}
                        <rect
                          x="70"
                          y="180"
                          width="60"
                          height="14"
                          rx="3"
                          fill="#E10600"
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                        />
                        <rect x="110" y="180" width="16" height="14" fill="#0A0A0A" />
                        {/* Pants */}
                        <path
                          d="M75 200 L70 300 L95 300 L100 230 L105 300 L130 300 L125 200 Z"
                          fill="#FFFFFF"
                          stroke="#E10600"
                          strokeWidth="3"
                        />
                      </>
                    ) : (
                      <>
                        {/* No-Gi Compression Rashguard & Shorts */}
                        <path
                          d="M55 75 L30 140 L58 145 L75 110 L75 185 L125 185 L125 110 L142 145 L170 140 L145 75 Z"
                          fill="#E10600"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                        />
                        {/* Rashguard GB Triangle Motif */}
                        <polygon points="100,105 115,130 85,130" fill="#FFFFFF" />
                        {/* Shorts / Legging */}
                        <path
                          d="M72 185 L65 250 L95 250 L100 215 L105 250 L135 250 L128 185 Z"
                          fill="#0A0A0A"
                          stroke="#0B3D91"
                          strokeWidth="2.5"
                        />
                      </>
                    )}
                  </svg>

                  {/* Pulsing Hotspots over the uniform */}
                  {currentBlock.hotspots.map((h) => {
                    const isActive = activeHotspot?.id === h.id;

                    return (
                      <button
                        key={h.id}
                        type="button"
                        onClick={() => setActiveHotspot(isActive ? null : h)}
                        style={{
                          left: `${h.xPercent}%`,
                          top: `${h.yPercent}%`,
                        }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20 focus:outline-none"
                        aria-label={h.title}
                      >
                        <span className="relative flex h-8 w-8 items-center justify-center">
                          <span
                            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                              isActive ? 'bg-yellow-400' : 'bg-gb-red'
                            }`}
                          ></span>
                          <span
                            className={`relative inline-flex rounded-full h-5 w-5 border-2 border-white items-center justify-center shadow-lg transition-transform ${
                              isActive ? 'bg-yellow-400 scale-125' : 'bg-gb-red group-hover:scale-110'
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Hotspot Floating Tooltip */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-gb-red" />
                    <span>Toque nos pontos pulsantes vermelhos para ver os detalhes da peça</span>
                  </p>
                </div>
              </div>
            </div>

            {/* List of Pieces in this Category */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold text-gb-red uppercase tracking-widest block mb-1">
                  Requisitos de Tatame
                </span>
                <h3 className="font-anton text-3xl sm:text-4xl text-white uppercase tracking-tight">
                  {currentBlock.title}
                </h3>
                <p className="text-sm text-slate-300 font-light mt-1">
                  {currentBlock.description}
                </p>
              </div>

              {/* Items Cards */}
              <div className="space-y-3.5">
                {currentBlock.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-1.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-anton text-lg text-white uppercase tracking-wider flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-gb-red flex-shrink-0" />
                        <span>{item.name}</span>
                      </h4>
                      <span className="text-[10px] font-bold text-slate-400 bg-white/5 px-2.5 py-1 rounded-full uppercase">
                        {item.requiredFor}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Active Hotspot Callout if clicked */}
              <AnimatePresence>
                {activeHotspot && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-4 rounded-2xl bg-gradient-to-r from-red-950/60 to-neutral-900 border border-gb-red/50 text-white"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-yellow-300 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Detalhe da Peça: {activeHotspot.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 mt-1 font-light">
                      {activeHotspot.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Section: "ONDE COMPRAR" */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-white/10 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-gb-red/20 text-gb-red flex items-center justify-center mx-auto glow-red">
              <ShoppingBag className="w-7 h-7" />
            </div>

            <h3 className="font-anton text-3xl sm:text-4xl text-white uppercase tracking-wider">
              ONDE COMPRAR SEU UNIFORME OFICIAL?
            </h3>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              Dúvidas sobre tamanhos, modelos (A0 a A5, F1 a F4, infantil) e onde adquirir o seu kimono ou rash guard oficial Gracie Barra? Nossa recepção tem todas as peças para você experimentar!
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="whatsapp"
                size="lg"
                whatsappMessage="Olá! Gostaria de consultar tamanhos e valores do uniforme oficial Gracie Barra."
              >
                Consultar na Secretaria via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTAFinal
        customTitle="VENHA COM ROUPA CONFORTÁVEL NA 1ª AULA"
        customText="Para a aula experimental você não precisa comprar kimono antecipado. Vista sua roupa esportiva e venha experimentar!"
        modalityName="Aula Experimental"
      />
    </div>
  );
};
