import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { ScheduleGrid } from '../components/ScheduleGrid';
import { CTAFinal } from '../components/CTAFinal';
import { FAQ } from '../components/FAQ';
import { Button } from '../components/Button';
import { ArrowUpRight } from 'lucide-react';

const ADULTO_FAQS = [
  {
    id: 'afaq-1',
    question: 'Nunca pratiquei artes marciais. Posso iniciar na turma adulta?',
    answer: 'Sim. A maior parte dos nossos alunos ingressa na fase adulta sem experiência prévia. O programa GB1 é estruturado para introduzir os fundamentos com acompanhamento próximo dos professores.',
  },
  {
    id: 'afaq-2',
    question: 'Qual a diferença entre os treinos com quimono (Gi) e sem quimono (No-Gi)?',
    answer: 'O treino com quimono (Gi) enfatiza o controle posicional utilizando pegadas na lapela e nas mangas. O treino sem quimono (No-Gi) trabalha o domínio de punhos, controle de cabeça e transições mais dinâmicas com vestimenta de compressão.',
  },
  {
    id: 'afaq-3',
    question: 'Qual vestimenta é indicada para a aula experimental?',
    answer: 'Para a primeira aula experimental, recomenda-se vestimenta esportiva confortável sem fechos metálicos (bermuda de treino e camiseta). O quimono oficial passa a ser exigido após a matrícula.',
  },
];

export const JiuJitsuAdultoPage: React.FC = () => {
  return (
    <div className="bg-[#F7F6F3] text-[#111111] font-inter">
      <PageHero
        image="https://images.unsplash.com/photo-1564415051543-cb73a7468103?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Prática de Jiu-Jitsu adulto no tatame da Gracie Barra"
        badge="Programa Adulto"
        title="Jiu-Jitsu Adulto"
        subtitle="Defesa pessoal, condicionamento físico e metodologia estruturada para quem busca praticar com seriedade e segurança."
        actions={
          <Button
            variant="whatsapp"
            size="md"
            whatsappMessage="Olá. Gostaria de agendar uma aula experimental de Jiu-Jitsu Adulto na GB Centro JF."
          >
            Agendar aula experimental
          </Button>
        }
      />

      {/* Seção 01: Definição e Princípios */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.12em] font-medium text-[#5A5A57] block">
              01 / Fundamento
            </span>
            <h2 className="font-title text-3xl sm:text-4xl uppercase tracking-wide text-[#111111]">
              A arte suave
            </h2>
            <p className="text-sm sm:text-base text-[#5A5A57] leading-relaxed">
              O Jiu-Jitsu utiliza alavancas biomecânicas e distribuição de peso para anular disparidades de força e estatura física. Desenvolvido para permitir que qualquer indivíduo se defenda de forma racional no solo.
            </p>
          </div>

          <div className="lg:col-span-7 border-t border-[#D9D6CF] divide-y divide-[#D9D6CF]">
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3">
              <span className="md:col-span-4 text-xs font-mono text-[#5A5A57]">01. Defesa Pessoal</span>
              <p className="md:col-span-8 text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
                Neutralização de agarramentos e situações comuns de agressão através de alavancas articulares e estrangulamentos controlados.
              </p>
            </div>
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3">
              <span className="md:col-span-4 text-xs font-mono text-[#5A5A57]">02. Condicionamento</span>
              <p className="md:col-span-8 text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
                Desenvolvimento da mobilidade articular, fortalecimento da musculatura do core e resistência cardiorrespiratória.
              </p>
            </div>
            <div className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3">
              <span className="md:col-span-4 text-xs font-mono text-[#5A5A57]">03. Clareza Mental</span>
              <p className="md:col-span-8 text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
                Resolução de problemas sob pressão física, ensinando controle emocional e foco em situações adversas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 02: Como é a aula */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.12em] font-medium text-[#5A5A57] block mb-1">
            02 / Dinâmica
          </span>
          <h2 className="font-title text-3xl sm:text-4xl uppercase tracking-wide text-[#111111]">
            Estrutura da sessão de treino
          </h2>
          <p className="text-xs sm:text-sm text-[#5A5A57] mt-1 max-w-xl">
            Sessões de 60 minutos organizadas pelo programa curricular GB1 e GB2.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-[#D9D6CF] bg-[#EDEBE6] rounded-[2px] space-y-2">
            <span className="text-xs font-mono text-[#5A5A57] block">Etapa 01</span>
            <h3 className="font-title text-xl text-[#111111] uppercase tracking-wide">
              Aquecimento funcional
            </h3>
            <p className="text-xs text-[#5A5A57] leading-relaxed">
              Exercícios de solo, rolamentos de amortecimento e mobilidade articular preparando o corpo para o contato físico seguro.
            </p>
          </div>

          <div className="p-6 border border-[#D9D6CF] bg-[#EDEBE6] rounded-[2px] space-y-2">
            <span className="text-xs font-mono text-[#5A5A57] block">Etapa 02</span>
            <h3 className="font-title text-xl text-[#111111] uppercase tracking-wide">
              Instrução técnica
            </h3>
            <p className="text-xs text-[#5A5A57] leading-relaxed">
              Demonstração detalhada das posições e repetição metódica dos movimentos com parceiro de treino designado.
            </p>
          </div>

          <div className="p-6 border border-[#D9D6CF] bg-[#EDEBE6] rounded-[2px] space-y-2">
            <span className="text-xs font-mono text-[#5A5A57] block">Etapa 03</span>
            <h3 className="font-title text-xl text-[#111111] uppercase tracking-wide">
              Aplicação prática (Rola)
            </h3>
            <p className="text-xs text-[#5A5A57] leading-relaxed">
              Simulação de combate controlado com parceiros do mesmo estágio técnico, sob supervisão direta do professor.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 03: Gi e No-Gi */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-[#D9D6CF] rounded-[2px] space-y-3 bg-white">
            <span className="text-xs font-mono text-[#5A5A57] uppercase tracking-wider block">Modalidade Clássica</span>
            <h3 className="font-title text-2xl uppercase tracking-wide text-[#111111]">
              Treino com Quimono (Gi)
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
              Prática tradicional com o uniforme completo oficial. Permite o controle mecânico refinado das pegadas nas lapelas, punhos e calça, exigindo raciocínio tático cadenciado.
            </p>
          </div>

          <div className="p-8 border border-[#D9D6CF] rounded-[2px] space-y-3 bg-white">
            <span className="text-xs font-mono text-[#5A5A57] uppercase tracking-wider block">Modalidade Moderna</span>
            <h3 className="font-title text-2xl uppercase tracking-wide text-[#111111]">
              Treino sem Quimono (No-Gi)
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5A57] leading-relaxed">
              Prática com rash guard e bermuda oficial. Devido à ausência de pegadas no tecido, o ritmo das passagens de guarda e raspagens torna-se mais dinâmico e veloz.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 04: Horários da Turma Adulta */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <ScheduleGrid filterByModality="jiu-jitsu-adulto" showFilters={false} showLegend={false} title="Horários das turmas adultas" />

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#5A5A57] border-t border-[#D9D6CF] pt-4 gap-2">
          <span>Uniforme exigido após a matrícula: Quimono oficial GB (branco ou azul) e rash guard.</span>
          <Link to="/uniforme" className="text-[#111111] hover:text-[#A3181A] underline font-medium inline-flex items-center gap-1">
            <span>Consultar guia de uniforme</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-[1240px] mx-auto border-b border-[#D9D6CF]">
        <FAQ items={ADULTO_FAQS} title="Dúvidas comuns sobre a turma adulta" />
      </section>

      <CTAFinal
        customTitle="Agende uma aula de Jiu-Jitsu Adulto."
        customText="A aula inaugural é gratuita e permite que você conheça a metodologia e o tatame antes de efetuar a matrícula."
        modalityName="Jiu-Jitsu Adulto"
      />
    </div>
  );
};
