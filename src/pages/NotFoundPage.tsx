import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../components/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-[#F7F6F3] text-[#111111] font-inter min-h-[70vh] flex items-center justify-center px-5 sm:px-8 py-24">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <span className="font-mono text-xs uppercase tracking-widest text-[#5A5A57] block">
          Erro 404 / Página não encontrada
        </span>

        <h1 className="font-title text-6xl sm:text-8xl text-[#111111] uppercase tracking-wide leading-none">
          404
        </h1>

        <p className="text-base text-[#5A5A57] leading-relaxed max-w-md mx-auto">
          O conteúdo solicitado não foi localizado em nosso servidor ou foi remanejado para uma nova seção.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-[2px] bg-[#A3181A] hover:bg-[#841315] text-white text-sm font-medium transition-colors"
          >
            Voltar à página inicial
          </Link>

          <Link
            to="/horarios"
            className="inline-flex items-center gap-1 px-5 py-2.5 rounded-[2px] border border-[#111111] text-[#111111] hover:bg-[#EDEBE6] text-sm font-medium transition-colors"
          >
            <span>Consultar horários</span>
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </div>
  );
};
