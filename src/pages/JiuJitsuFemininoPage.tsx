import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Heart,
  Sparkles,
  Users,
  Award,
  Flame,
  CheckCircle2,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { CTAFinal } from '../components/CTAFinal';
import { FAQ } from '../components/FAQ';
import { Button } from '../components/Button';

const FEMININO_BENEFITS = [
  {
    title: 'Defesa Pessoal Real',
    description: 'Aprenda a escapar de pegadas, puxões de braço, agressões de solo e intimidações urbanas.',
    icon: ShieldCheck,
  },
  {
    title: 'Autoconfiança e Postura',
    description: 'Descubra a força que você já tem e sinta-se segura no seu corpo em qualquer lugar.',
    icon: Award,
  },
  {
    title: 'Força, Saúde e Tonificação',
    description: 'Gasto calórico intenso de até 1.000 kcal, fortalecendo abdômen, pernas e braços sem monotonia.',
    icon: Flame,
  },
  {
    title: 'Comunidade Feminina',
    description: 'Uma rede acolhedora de mulheres que torcem pelo sucesso umas das outras dentro e fora do tatame.',
    icon: Users,
  },
];

const FEMININO_FAQS = [
  {
    id: 'ffaq-1',
    question: 'Nunca treinei nenhuma luta na vida. Vou conseguir acompanhar?',
    answer: 'Com certeza! Nossas turmas contam com alunas de todos os níveis. O ritmo é personalizado e respeitamos o tempo de cada mulher.',
  },
  {
    id: 'ffaq-2',
    question: 'Como funciona a primeira aula experimental feminina?',
    answer: 'A aula é 100% gratuita. Você só precisa vir com roupa de academia confortável (calça legging e camiseta). Venha conhecer as outras alunas e o ambiente!',
  },
  {
    id: 'ffaq-3',
    question: 'Mulheres podem treinar também nas turmas mistas?',
    answer: 'Sim! As alunas têm total liberdade de participar tanto das turmas exclusivas femininas quanto das turmas mistas da academia.',
  },
];

export const JiuJitsuFemininoPage: React.FC = () => {
  return (
    <div className="bg-gb-black text-slate-100 min-h-screen">
      {/* Hero with Pink Accent */}
      <PageHero
        image="https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Mulheres treinando jiu-jitsu juntas no tatame da Gracie Barra Centro JF"
        badge="PROGRAMA FEMININO GRACIE BARRA"
        title="LUGAR DE MULHER TAMBÉM É NO TATAME!"
        highlightWord="MULHER"
        subtitle="Aprenda a se defender, evoluir e se superar em um ambiente acolhedor e exclusivo."
        accentPink={true}
        floatingBadges={['Aula experimental GRATUITA', 'Turmas Exclusivas', 'Defesa Pessoal']}
        actions={
          <Button
            variant="whatsapp"
            size="lg"
            whatsappMessage="Olá! Quero agendar uma aula experimental de Jiu-Jitsu Feminino na Gracie Barra Centro JF."
          >
            Agendar minha aula grátis
          </Button>
        }
      />

      {/* "POR QUE TREINAR" Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-gb-pink uppercase tracking-widest block mb-2">
            Empoderamento & Saúde
          </span>
          <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
            POR QUE VOCÊ DEVE TREINAR JIU-JITSU?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 font-light leading-relaxed">
            Um ambiente acolhedor, com turmas femininas e professores preparados para te receber. Aqui você treina no seu ritmo, sem julgamentos, e desenvolve uma força que você nem sabia que existia.
          </p>
        </div>

        {/* 4 Benefits with Pink Accents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEMININO_BENEFITS.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-pink/60 transition-all space-y-3 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-gb-pink/20 text-gb-pink flex items-center justify-center group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-anton text-xl text-white uppercase tracking-wider">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote / Testimonial Highlight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-neutral-900 via-pink-950/30 to-neutral-900 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <Heart className="w-10 h-10 text-gb-pink mx-auto" />
          <blockquote className="font-anton text-2xl sm:text-4xl text-white uppercase tracking-wider">
            "Aqui eu encontrei muito mais do que condicionamento físico: encontrei amigas verdadeiras e a certeza de que sou capaz de me proteger."
          </blockquote>
          <p className="text-xs font-bold text-gb-pink tracking-widest uppercase">
            – Aluna do Programa Feminino GB Centro JF
          </p>
        </div>
      </section>

      {/* ScheduleGrid filtrado Feminino */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-gb-pink uppercase tracking-widest block mb-1">
            Grade Feminina
          </span>
          <h2 className="font-anton text-3xl sm:text-4xl text-white uppercase tracking-tight">
            HORÁRIOS DAS TURMAS FEMININAS
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Opções nos turnos da manhã, almoço, noite e aos sábados!
          </p>
        </div>

        <ScheduleGrid
          filterByModality="jiu-jitsu-feminino"
          showFilters={false}
          showLegend={false}
        />

        {/* Uniforme Feminino Resumo */}
        <div className="mt-12 p-8 rounded-3xl bg-neutral-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-gb-pink uppercase tracking-wider">
              Uniforme Oficial
            </span>
            <h4 className="font-anton text-2xl text-white uppercase tracking-wider">
              UNIFORME FEMININO (GI & NO-GI)
            </h4>
            <p className="text-sm text-slate-300 font-light max-w-xl">
              Kimono com modelagem feminina anatômica, rash guard oficial e legging de alta densidade sem transparência.
            </p>
          </div>

          <Link
            to="/uniforme"
            className="flex-shrink-0 px-6 py-3 rounded-full bg-white/10 hover:bg-gb-pink text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
          >
            <span>Ver regras completas</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <FAQ items={FEMININO_FAQS} title="DÚVIDAS FREQUENTES DAS ALUNAS" />
        </div>
      </section>

      {/* CTA */}
      <CTAFinal
        customTitle="VENHA DAR O PRIMEIRO PASSO!"
        customText="Sua primeira aula é gratuita e você será recebida com todo o carinho pelas alunas e professoras."
        modalityName="Jiu-Jitsu Feminino"
      />
    </div>
  );
};
