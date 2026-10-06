import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Flame,
  HeartPulse,
  Users,
  Target,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { CTAFinal } from '../components/CTAFinal';
import { FAQ } from '../components/FAQ';
import { Button } from '../components/Button';
import { TESTIMONIALS } from '../data/testimonials';

const ADULTO_BENEFITS = [
  {
    title: 'Defesa Pessoal Eficaz',
    description: 'Aprenda técnicas reais de alavancas para neutralizar adversários mais pesados e fortes.',
    icon: ShieldCheck,
  },
  {
    title: 'Condicionamento Físico',
    description: 'Treino de alta intensidade que queima calorias, define músculos e aumenta sua resistência.',
    icon: Flame,
  },
  {
    title: 'Menos Estresse e Ansiedade',
    description: 'Desconecte da rotina diária no tatame e volte para casa com a mente relaxada e renovada.',
    icon: HeartPulse,
  },
  {
    title: 'Comunidade & Disciplina',
    description: 'Ambiente acolhedor, sem julgamentos, onde todos evoluem juntos da faixa branca à preta.',
    icon: Users,
  },
];

const STEPS = [
  {
    step: '01',
    title: 'Aquecimento Funcional',
    description: '15 minutos de movimentações de solo, mobilidade articular e aquecimento cardiovascular preparando o corpo.',
  },
  {
    step: '02',
    title: 'Técnica do Dia (GB Curriculum)',
    description: 'Ensino detalhado passo a passo de posições, raspagens e defesas guiadas com precisão pelo mestre.',
  },
  {
    step: '03',
    title: 'Treino Prático (Rola)',
    description: 'Aplicação ao vivo das posições em rounds amigáveis e supervisionados com parceiros do mesmo nível.',
  },
];

const ADULTO_FAQS = [
  {
    id: 'afaq-1',
    question: 'Nunca pratiquei nenhuma luta. Posso começar agora no adulto?',
    answer: 'Com certeza! A maior parte dos nossos alunos começou na fase adulta sem nenhum histórico em esportes de combate. Você será acompanhado de perto pelo professor desde a primeira aula.',
  },
  {
    id: 'afaq-2',
    question: 'Qual a diferença entre treinar com kimono e sem kimono (No-Gi)?',
    answer: 'O treino com quimono (Gi) enfatiza o controle fino das pegadas na gola e nas mangas. O No-Gi (sem quimono) é mais veloz, focado em esgrima, domínio de punhos e movimentos ágeis.',
  },
  {
    id: 'afaq-3',
    question: 'O que devo vestir na minha aula experimental?',
    answer: 'Venha com roupa esportiva confortável sem botões ou zíperes metálicos (bermuda de treino e camiseta). Nós fornecemos toda a orientação para você.',
  },
];

export const JiuJitsuAdultoPage: React.FC = () => {
  return (
    <div className="bg-gb-black text-slate-100 min-h-screen">
      {/* Hero */}
      <PageHero
        image="https://images.unsplash.com/photo-1564415051543-cb73a7468103?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Alunos adultos praticando Jiu-Jitsu no tatame Gracie Barra"
        badge="METODOLOGIA OFICIAL GRACIE BARRA"
        title="JIU-JITSU ADULTO"
        highlightWord="ADULTO"
        subtitle="Aprenda defesa pessoal, ganhe condicionamento e faça parte de uma equipe mundial."
        actions={
          <Button
            variant="whatsapp"
            size="lg"
            whatsappMessage="Olá! Quero agendar uma aula experimental de Jiu-Jitsu Adulto na GB Centro JF."
          >
            Agendar aula experimental grátis
          </Button>
        }
      />

      {/* "O QUE É O JIU-JITSU" Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-gb-red uppercase tracking-widest block">
              Arte Suave
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
              O QUE É O JIU-JITSU?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              O Jiu-Jitsu é a arte suave que usa alavancas e técnica biomecânica para superar a força bruta e a disparidade de tamanho. É considerado um dos esportes mais completos do planeta para o condicionamento físico, flexibilidade e saúde mental.
            </p>
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              Na Gracie Barra Centro Juiz de Fora, ensinamos o programa estruturado GB1 e GB2, garantindo que iniciantes aprendam de forma segura, progressiva e sem riscos de lesão desnecessários.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-gb-red flex-shrink-0" />
              <span className="text-sm text-slate-200">
                Acompanhamento personalizado por professores graduados em todas as aulas.
              </span>
            </div>
          </div>

          {/* 4 Benefits Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ADULTO_BENEFITS.map((b, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gb-red/20 text-gb-red flex items-center justify-center glow-red">
                  <b.icon className="w-5 h-5" />
                </div>
                <h3 className="font-anton text-xl text-white uppercase tracking-wider">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "COMO É A AULA" Section (3 Steps) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-gb-red uppercase tracking-widest block mb-2">
              Dinâmica de Treino
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
              COMO É A AULA
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 font-light">
              Uma estrutura de 60 minutos pensada para maximizar seu aprendizado e segurança.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((s, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-neutral-900 border border-white/10 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="font-anton text-6xl text-white/10 absolute top-4 right-6 pointer-events-none">
                  {s.step}
                </div>

                <div className="space-y-4 relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-gb-red text-white font-anton text-xs uppercase tracking-wider">
                    Passo {s.step}
                  </span>
                  <h3 className="font-anton text-2xl text-white uppercase tracking-wider">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "GI E NO-GI" Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-gb-red uppercase tracking-widest block mb-2">
            Duas Modalidades em Uma
          </span>
          <h2 className="font-anton text-3xl sm:text-5xl text-white uppercase tracking-tight">
            GI E NO-GI
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 font-light">
            O jiu-jitsu completo com kimono e sem kimono na mesma academia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Gi Card */}
          <div className="p-8 rounded-3xl bg-neutral-900 border border-white/10 hover:border-gb-red/50 transition-all space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gb-red block">
              Tradição & Controle
            </span>
            <h3 className="font-anton text-3xl text-white uppercase tracking-wider">
              GI (COM KIMONO)
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Treino clássico com o kimono oficial Gracie Barra. É mais técnico e estratégico, permitindo o uso de pegadas na gola, mangas e calça para travar, raspar e finalizar o oponente.
            </p>
          </div>

          {/* No-Gi Card */}
          <div className="p-8 rounded-3xl bg-neutral-900 border border-white/10 hover:border-sky-500/50 transition-all space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 block">
              Dinâmica & Velocidade
            </span>
            <h3 className="font-anton text-3xl text-white uppercase tracking-wider">
              NO-GI (SEM KIMONO)
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Treino com rash guard e bermuda oficial. O jogo fica muito mais rápido e dinâmico, já que não há pegadas na roupa, focando em controle de cabeça, esgrima e quedas.
            </p>
          </div>
        </div>

        {/* Banner "Para Iniciantes" */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-neutral-900 via-gb-blue-dark to-neutral-900 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold text-gb-red uppercase tracking-wider">
              Sem Desculpas Para Não Começar
            </span>
            <h4 className="font-anton text-2xl text-white uppercase tracking-wider">
              NUNCA TREINOU ANTES? PERFEITO!
            </h4>
            <p className="text-sm text-slate-300 font-light">
              Você será acompanhado passo a passo pelo professor desde o primeiro minuto no tatame.
            </p>
          </div>

          <Button
            variant="whatsapp"
            size="md"
            whatsappMessage="Olá! Sou iniciante no Jiu-Jitsu e gostaria de agendar uma aula experimental gratuita na GB Centro JF."
          >
            Começar do Zero
          </Button>
        </div>
      </section>

      {/* ScheduleGrid filtrado Adulto */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ScheduleGrid
            filterByModality="jiu-jitsu-adulto"
            showFilters={false}
            showLegend={false}
            title="Horários das Turmas Adultas"
          />

          <div className="mt-8 flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300">
            <span>Uniforme obrigatório para alunos matriculados: Kimono Oficial GB e Rash Guard.</span>
            <Link to="/uniforme" className="text-gb-red font-bold hover:underline">
              Ver regras de uniforme →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Curto */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FAQ items={ADULTO_FAQS} title="DÚVIDAS SOBRE O JIU-JITSU ADULTO" />
      </section>

      {/* CTA Final */}
      <CTAFinal
        customTitle="PRONTO PARA O PRIMEIRO TREINO?"
        customText="Venha fazer sua aula experimental gratuita de Jiu-Jitsu Adulto na Gracie Barra Centro Juiz de Fora."
        modalityName="Jiu-Jitsu Adulto"
      />
    </div>
  );
};
