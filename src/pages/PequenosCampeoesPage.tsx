import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Sparkles,
  Heart,
  ShieldCheck,
  Zap,
  Users,
  Award,
  Clock,
  ArrowRight,
  Smile,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { AgeRecommender } from '../components/AgeRecommender';
import { CTAFinal } from '../components/CTAFinal';
import { FAQ } from '../components/FAQ';
import { Button } from '../components/Button';
import { PARENTS_FAQS } from '../data/faq';

export const PequenosCampeoesPage: React.FC = () => {
  return (
    <div className="bg-gb-black text-slate-100 min-h-screen">
      {/* Hero with Playful flair */}
      <PageHero
        image="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Crianças de 3 a 5 anos treinando de quimono no tatame infantil"
        badge="GBK 1 • 3 A 5 ANOS"
        title="PEQUENOS CAMPEÕES"
        highlightWord="CAMPEÕES"
        subtitle="Para crianças de 3 a 5 anos: disciplina, diversão e desenvolvimento em um ambiente seguro e acolhedor. Aqui nascem os Pequenos Campeões do Jiu-Jitsu!"
        actions={
          <Button
            variant="whatsapp"
            size="lg"
            whatsappMessage="Olá! Gostaria de agendar uma aula experimental de Pequenos Campeões (3 a 5 anos) para meu filho(a) na GB Centro JF."
          >
            Agendar aula para meu filho(a)
          </Button>
        }
      />

      {/* Floating playful elements */}
      <div className="py-6 px-4 bg-gb-red text-white text-center font-anton tracking-wider uppercase text-sm sm:text-base flex items-center justify-center gap-3">
        <Sparkles className="w-5 h-5 text-yellow-300 animate-spin" style={{ animationDuration: '6s' }} />
        <span>Terça e Quinta às 09h e 17h • Vagas limitadas por turma</span>
        <Sparkles className="w-5 h-5 text-yellow-300 animate-spin" style={{ animationDuration: '6s' }} />
      </div>

      {/* "O QUE A CRIANÇA APRENDE" Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-gb-red uppercase tracking-widest block mb-2">
            Pedagogia Infantil GB
          </span>
          <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
            O QUE A CRIANÇA APRENDE?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 font-light">
            Atividades planejadas com metodologia lúdica que constroem a base motora e moral para toda a vida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Coordenação Motora
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Circuitos que desenvolvem equilíbrio, agilidade, lateralidade e noção de espaço com alegria.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-gb-red/20 text-gb-red flex items-center justify-center glow-red">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Respeito e Disciplina
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Aprender a ouvir instruções com atenção, esperar a sua vez e respeitar colegas e professores.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Amizade e Afeto
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Um ambiente saudável onde as crianças aprendem a cooperar e fazer amigos para a vida inteira.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-anton text-xl text-white uppercase tracking-wider">
              Autonomia & Confiança
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Superar pequenos desafios na brincadeira para crescer sem medo de tentar coisas novas.
            </p>
          </div>
        </div>
      </section>

      {/* "COMO SÃO AS AULAS" */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-gb-red uppercase tracking-widest block mb-2">
              Dinâmica das Aulas
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
              COMO SÃO AS AULAS?
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Brincadeiras, circuitos dinâmicos e fundamentos do jiu-jitsu passados de forma lúdica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-neutral-900 border border-white/10 space-y-3">
              <span className="text-3xl font-anton text-gb-red">1. Boas-vindas & Jogos</span>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Brincadeiras dinâmicas e histórias que despertam a atenção e o aquecimento do corpinho de forma natural.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-neutral-900 border border-white/10 space-y-3">
              <span className="text-3xl font-anton text-gb-red">2. Circuito das Alavancas</span>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Pular, rolar em almofadões e aprender a cair com total segurança como se fossem super-heróis.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-neutral-900 border border-white/10 space-y-3">
              <span className="text-3xl font-anton text-gb-red">3. Roda de Valores</span>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Conversa sobre arrumar a cama em casa, obedecer aos pais, comer bem e ser gentil na escola.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Age Recommender */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AgeRecommender currentModalitySlug="/pequenos-campeoes" />
      </section>

      {/* ScheduleGrid filtrado */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-anton text-3xl text-white uppercase tracking-wider">
              HORÁRIOS DOS PEQUENOS CAMPEÕES
            </h3>
            <p className="text-xs text-slate-400 mt-1">Terça e Quinta às 09h e 17h</p>
          </div>
          <ScheduleGrid filterByModality="pequenos-campeoes" showFilters={false} showLegend={false} />
        </div>
      </section>

      {/* Dúvidas dos Pais */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FAQ items={PARENTS_FAQS} title="DÚVIDAS DOS PAIS E MÃES" />
      </section>

      {/* CTA Final */}
      <CTAFinal
        customTitle="AGENDE UMA AULA PARA SEU FILHO(A)"
        customText="Venha conhecer nosso tatame e assistir de perto a primeira aula do seu pequeno campeão!"
        modalityName="Pequenos Campeões (3 a 5 anos)"
      />
    </div>
  );
};
