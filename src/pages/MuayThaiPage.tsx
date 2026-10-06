import React from 'react';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { CTAFinal } from '../components/CTAFinal';
import { FAQ } from '../components/FAQ';
import { Button } from '../components/Button';
import { Flame, Zap, HeartPulse, Target, CheckCircle2, MessageCircle, Shield } from 'lucide-react';
import { STRIKING_FAQS } from '../data/faq';
import { GYM_INFO, getWhatsAppLink } from '../data/info';

const EIGHT_WEAPONS = [
  { weapon: 'Punhos', description: 'Socos diretos, cruzados e uppercuts com biomecânica precisa' },
  { weapon: 'Cotovelos', description: 'Golpes curtos e cortantes característicos do Muay Thai tailandês' },
  { weapon: 'Joelhos', description: 'Ataques potentes de curta e média distância que trabalham o core' },
  { weapon: 'Canelas', description: 'Chutes circulares de alto impacto nos aparadores e sacos pesados' },
];

export const MuayThaiPage: React.FC = () => {
  return (
    <div className="bg-gb-black text-slate-100 min-h-screen">
      {/* Hero "Fight Night" Dark */}
      <PageHero
        image="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Treino de Muay Thai com aparadores e luvas na Gracie Barra Centro JF"
        badge="MATRÍCULAS ABERTAS • PARCERIA TEAM RECRUTA"
        title="MUAY THAI"
        highlightWord="THAI"
        subtitle="Transforme seu condicionamento físico. Alivie o estresse e aprenda a arte do Muay Thai com máxima segurança."
        overlayType="darker"
        brushColor="black"
        floatingBadges={['Arte das 8 Armas', 'Parceria Team Recruta', 'Alta Intensidade']}
        actions={
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button
              variant="whatsapp"
              size="lg"
              whatsappMessage="Olá! Quero agendar uma aula experimental de Muay Thai na Gracie Barra Centro JF."
            >
              WhatsApp Gracie Barra
            </Button>
            <Button
              variant="whatsapp-tr"
              size="lg"
              whatsappMessage="Olá Team Recruta! Gostaria de informações sobre as aulas de Muay Thai na GB Centro JF."
            >
              WhatsApp Team Recruta
            </Button>
          </div>
        }
      />

      {/* Schedule highlight bar */}
      <div className="py-4 px-4 bg-gb-blue text-white text-center font-anton tracking-wider uppercase text-sm sm:text-base">
        Segunda e Quarta às 20:15 • Terça e Quinta às 18:00
      </div>

      {/* "A ARTE DAS OITO ARMAS" */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-2">
            Tradição Tailandesa
          </span>
          <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
            A ARTE DAS OITO ARMAS
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-light">
            Diferente de modalidades tradicionais de boxe, o Muay Thai utiliza todo o arsenal corporal com controle técnico rigoroso.
          </p>
        </div>

        {/* 4 Weapons Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EIGHT_WEAPONS.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-sky-500/50 transition-all space-y-3"
            >
              <div className="font-anton text-4xl text-sky-400">0{idx + 1}</div>
              <h3 className="font-anton text-2xl text-white uppercase tracking-wider">
                {item.weapon}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bloco Parceria TEAM RECRUTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-neutral-950 via-gb-blue-dark to-neutral-950 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase text-sky-300">
            <Shield className="w-4 h-4 text-sky-400" />
            <span>Parceria de Alto Rendimento</span>
          </div>

          <h3 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
            SUPERVISÃO & PARCERIA TEAM RECRUTA
          </h3>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            As aulas de Muay Thai na Gracie Barra Centro JF contam com a chancela e a expertise técnica da consagrada <strong>Team Recruta</strong>. Instrutores experientes, treinos dinâmicos e ambiente seguro para alunos de todos os níveis.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={getWhatsAppLink('Olá Team Recruta! Gostaria de agendar uma aula experimental de Muay Thai na GB Centro JF.', GYM_INFO.phones.whatsappTeamRecruta)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-gb-blue hover:bg-gb-blue-dark text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar com a Team Recruta ({GYM_INFO.phones.whatsappTeamRecrutaFormatted})</span>
            </a>
          </div>
        </div>
      </section>

      {/* "O QUE LEVAR" Checklist */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              Primeira Aula Experimental
            </span>
            <h4 className="font-anton text-2xl sm:text-3xl text-white uppercase tracking-wider">
              O QUE LEVAR PARA O SEU PRIMEIRO TREINO?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300 pt-2 font-light">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Roupas esportivas leves e confortáveis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Garrafa de água individual</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Toalha de rosto</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Nós emprestamos equipamentos de apoio na 1ª aula</span>
              </div>
            </div>
          </div>

          <Button
            variant="whatsapp"
            size="md"
            whatsappMessage="Olá! Quero agendar minha aula experimental de Muay Thai."
            className="flex-shrink-0"
          >
            Quero Agendar
          </Button>
        </div>
      </section>

      {/* ScheduleGrid filtrado */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-anton text-3xl text-white uppercase tracking-wider">
              HORÁRIOS DE MUAY THAI
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Seg e Qua às 20:15 • Ter e Qui às 18:00
            </p>
          </div>
          <ScheduleGrid filterByModality="muay-thai" showFilters={false} showLegend={false} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FAQ items={STRIKING_FAQS} title="DÚVIDAS SOBRE O MUAY THAI" />
      </section>

      {/* CTA Final */}
      <CTAFinal
        customTitle="VENHA TREINAR MUAY THAI!"
        customText="Aumente seu condicionamento e queime até 800 calorias por treino com a Team Recruta na GB Centro JF."
        modalityName="Muay Thai"
      />
    </div>
  );
};
