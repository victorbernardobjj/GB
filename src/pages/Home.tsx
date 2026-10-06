import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Award,
  Users,
  Flame,
  Clock,
  ArrowRight,
  Instagram,
  HeartHandshake,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Marquee } from '../components/Marquee';
import { Button } from '../components/Button';
import { BrushDivider } from '../components/BrushDivider';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { BeltTimeline } from '../components/BeltTimeline';
import { AudienceSelector } from '../components/AudienceSelector';
import { FAQ } from '../components/FAQ';
import { CTAFinal } from '../components/CTAFinal';
import { MODALITIES } from '../data/modalities';
import { HOME_FAQS } from '../data/faq';
import { GYM_INFO, getWhatsAppLink } from '../data/info';

const INSTAGRAM_PHOTOS = [
  {
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    alt: 'Tatame cheio na aula de Jiu-Jitsu',
    caption: 'Família reunida no tatame!',
  },
  {
    url: 'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=600&q=80',
    alt: 'Graduação feminina de Jiu-Jitsu',
    caption: 'Força feminina na Gracie Barra Centro JF',
  },
  {
    url: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=600&q=80',
    alt: 'Treino de Muay Thai Team Recruta',
    caption: 'Energia lá em cima com a Team Recruta!',
  },
  {
    url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    alt: 'Crianças nos Pequenos Campeões',
    caption: 'Futuros campeões aprendendo disciplina',
  },
  {
    url: 'https://images.unsplash.com/photo-1564415051543-cb73a7468103?auto=format&fit=crop&w=600&q=80',
    alt: 'Treino adulto de Jiu-Jitsu no-gi e com kimono',
    caption: 'Superação a cada round',
  },
  {
    url: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=600&q=80',
    alt: 'Treino de Boxe na Gracie Barra',
    caption: 'Foco e técnica na nobre arte',
  },
  {
    url: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=600&q=80',
    alt: 'Krav Maga com Mestre Kobi',
    caption: 'Defesa pessoal para situações reais',
  },
  {
    url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=600&q=80',
    alt: 'Turma de jovens juniores',
    caption: 'Companheirismo e foco nos estudos e tatame',
  },
];

export const Home: React.FC = () => {
  return (
    <div className="bg-gb-black text-slate-100 overflow-hidden">
      {/* ==================== S1. HERO (TELA CHEIA) ==================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-20 text-white">
        {/* Background Image / Video effect */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=80"
            alt="Tatame da academia Gracie Barra Centro Juiz de Fora repleto de alunos"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="w-full h-full object-cover object-center filter brightness-75"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-gradient-to-t from-gb-black via-transparent to-gb-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-anton tracking-widest uppercase bg-white/10 text-white border border-white/20 backdrop-blur-md shadow-lg">
              <img src="/logo-gb.png" alt="Gracie Barra" className="w-5 h-5 rounded-full object-contain" />
              <span>GRACIE BARRA • JUIZ DE FORA</span>
            </span>
          </motion.div>

          {/* H1 Main Title */}
          <h1 className="font-anton text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.92] mb-6 hero-title-skew">
            <span className="text-white block sm:inline mr-2">JIU-JITSU PARA</span>{' '}
            <span className="text-gb-red font-anton uppercase">TODOS</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-200 max-w-2xl font-light leading-relaxed mb-8"
          >
            Do primeiro treino à faixa preta. Aulas para crianças, mulheres e adultos, além de Muay Thai, Boxe, Krav Maga e Hapkido.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button
              variant="whatsapp"
              size="lg"
              whatsappMessage="Olá! Gostaria de agendar minha aula experimental gratuita na Gracie Barra Centro Juiz de Fora."
            >
              Agendar aula experimental grátis
            </Button>

            <Button variant="secondary" size="lg" to="/horarios">
              Ver horários
            </Button>
          </motion.div>

          {/* 3 Glass Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-3"
          >
            <div className="glass-panel px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gb-red" />
              <span>Aula experimental gratuita</span>
            </div>
            <div className="glass-panel px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>Dos 3 anos ao adulto</span>
            </div>
            <div className="glass-panel px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gb-blue" />
              <span>6 modalidades oficiais</span>
            </div>
          </motion.div>
        </div>

        {/* Base Brush Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <BrushDivider color="black" position="bottom" />
        </div>
      </section>

      {/* ==================== S2. MARQUEE ==================== */}
      <Marquee />

      {/* ==================== S3. ENCONTRE SEU ESTILO DE LUTA ==================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-gb-red uppercase tracking-widest block mb-2">
            Metodologia & Tradição
          </span>
          <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
            ENCONTRE SEU <span className="text-gb-red font-anton uppercase">ESTILO</span> DE LUTA
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 font-light leading-relaxed">
            Seis modalidades, uma só família. Escolha a sua e comece hoje mesmo sua transformação física e mental.
          </p>
        </div>

        {/* 3-column Grid of Modality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MODALITIES.map((mod, index) => (
            <motion.div
              key={mod.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-gb-red/50 shadow-xl flex flex-col justify-between hover:-translate-y-2 transition-all duration-300"
            >
              {/* Card Photo with Hover Zoom */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={mod.cardImage}
                  alt={mod.heroAlt}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

                {mod.badge && (
                  <span className="absolute top-4 left-4 bg-gb-red text-white text-[11px] font-anton px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {mod.badge}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-anton text-2xl text-white uppercase tracking-wider group-hover:text-gb-red transition-colors">
                    {mod.name}
                  </h3>
                  <p className="text-xs text-gb-red font-semibold uppercase tracking-wider mt-1">
                    Faixa etária: {mod.ageRange}
                  </p>
                  <p className="text-sm text-slate-300 font-light mt-2.5 leading-relaxed">
                    {mod.oneLiner}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-gb-red flex-shrink-0" />
                    <span className="truncate">{mod.scheduleSummary}</span>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-1">
                    <Link
                      to={mod.slug}
                      className="text-xs font-bold uppercase tracking-wider text-slate-200 group-hover:text-white flex items-center gap-1.5 hover:underline"
                    >
                      <span>Saiba mais</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gb-red transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Button
                      variant="whatsapp"
                      size="sm"
                      whatsappMessage={`Olá! Quero agendar uma aula experimental de ${mod.name} na GB Centro JF.`}
                      className="text-[11px] py-2 px-3.5"
                    >
                      Aula Grátis
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================== S4. SELETOR INTERATIVO ==================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-gb-red uppercase tracking-widest block mb-2">
              Orientação Personalizada
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
              PARA QUEM VOCÊ QUER TREINAR?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 font-light">
              Clique no perfil desejado e veja na hora as turmas com vagas e metodologias indicadas.
            </p>
          </div>

          <AudienceSelector />
        </div>
      </section>

      {/* ==================== S5. CAMINHO PARA A FAIXA PRETA ==================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-gb-red uppercase tracking-widest block mb-2">
            Evolução Constante
          </span>
          <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
            SEU CAMINHO PARA A <span className="text-gb-red font-anton uppercase">FAIXA PRETA</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 font-light leading-relaxed">
            A jornada começa na faixa branca. Cada faixa é uma conquista construída com treino, respeito e constância.
          </p>
        </div>

        <BeltTimeline />
      </section>

      {/* ==================== S6. POR QUE A GRACIE BARRA? ==================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gb-blue-dark/50 to-neutral-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-gb-red uppercase tracking-widest block mb-2">
              Diferenciais GB
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
              POR QUE A GRACIE BARRA?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 font-light">
              Mais de 1.000 escolas no mundo inteiro unidas pela mesma paixão e código de conduta.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-gb-red/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-gb-red/20 text-gb-red flex items-center justify-center mb-5 glow-red">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-anton text-xl text-white uppercase tracking-wider mb-2">
                Ambiente Seguro e Acolhedor
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Todos são bem-vindos, do iniciante ao avançado. Zero ego, total respeito pelo parceiro.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-gb-red/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-gb-blue/30 text-sky-400 flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-anton text-xl text-white uppercase tracking-wider mb-2">
                Metodologia Comprovada
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Uma estrutura de ensino reconhecida no mundo todo, dividida em módulos pedagógicos claros.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-gb-red/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-anton text-xl text-white uppercase tracking-wider mb-2">
                Para Todas as Idades
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Turmas separadas por faixa etária e nível técnico: dos 3 anos à melhor idade com total segurança.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-gb-red/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-anton text-xl text-white uppercase tracking-wider mb-2">
                Comunidade e Irmandade
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Mais que treino: amizades e evolução mútua. Você nunca treina sozinho na Gracie Barra.
              </p>
            </div>
          </div>

          {/* Numbers Bar */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-gb-red via-red-700 to-gb-red-dark text-white shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
              <div className="pt-4 md:pt-0">
                <div className="font-anton text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                  {GYM_INFO.stats.studentsCount}
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider mt-1 opacity-90">
                  Alunos Ativos
                </div>
              </div>

              <div className="pt-4 md:pt-0">
                <div className="font-anton text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                  {GYM_INFO.stats.yearsOperating}
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider mt-1 opacity-90">
                  Anos em Juiz de Fora
                </div>
              </div>

              <div className="pt-4 md:pt-0">
                <div className="font-anton text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                  {GYM_INFO.stats.modalitiesCount}
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider mt-1 opacity-90">
                  Modalidades Oficiais
                </div>
              </div>

              <div className="pt-4 md:pt-0">
                <div className="font-anton text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                  {GYM_INFO.stats.freeTrialPercent}
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider mt-1 opacity-90">
                  Aulas Gratuitas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== S7. HORÁRIOS EM DESTAQUE ==================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-gb-red uppercase tracking-widest block mb-2">
            Planejamento Semanal
          </span>
          <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
            HORÁRIOS EM DESTAQUE
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 font-light">
            Aulas de manhã, tarde e noite para se adequar perfeitamente à sua rotina diária.
          </p>
        </div>

        <ScheduleGrid isCompact={true} showLegend={true} showPrintButton={false} />

        <div className="mt-10 text-center">
          <Button variant="secondary" size="lg" to="/horarios">
            Ver quadro completo de horários →
          </Button>
        </div>
      </section>

      {/* ==================== S8. AVALIAÇÕES DOS ALUNOS ==================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-gb-red uppercase tracking-widest block mb-2">
              Depoimentos Reais
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
              VEJA O QUE NOSSOS ALUNOS ESTÃO FALANDO
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 font-light">
              Histórias reais de quem transformou a saúde e a mente no tatame da GB Centro JF.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* ==================== S9. GALERIA / INSTAGRAM ==================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold text-gb-red uppercase tracking-widest block mb-1">
              Dia a Dia no Tatame
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
              {GYM_INFO.social.hashtag}
            </h2>
          </div>

          <a
            href={GYM_INFO.social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-4 h-4" />
            <span>Seguir no Instagram</span>
          </a>
        </div>

        {/* 8-Photo Masonry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {INSTAGRAM_PHOTOS.map((item, index) => (
            <a
              key={index}
              href={GYM_INFO.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-48 sm:h-60 rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 block"
            >
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gb-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <Instagram className="w-6 h-6 text-white mb-2" />
                <p className="text-xs text-white font-medium line-clamp-2">{item.caption}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ==================== S10. FAQ ==================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <FAQ items={HOME_FAQS} />
        </div>
      </section>

      {/* ==================== S11. CTAFINAL & MAPEMBED ==================== */}
      <CTAFinal />
    </div>
  );
};
