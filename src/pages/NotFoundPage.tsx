import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';
import { Button } from '../components/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-gb-black text-slate-100 min-h-[75vh] flex items-center justify-center px-4 sm:px-6 py-24">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gb-red/10 border border-gb-red/30 text-gb-red text-xs font-bold tracking-widest uppercase">
          Erro 404 • Página não encontrada
        </span>

        <h1 className="font-anton text-7xl sm:text-9xl text-white uppercase tracking-tight leading-none">
          4<span className="text-gb-red">0</span>4
        </h1>

        <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-md mx-auto">
          O conteúdo solicitado não foi localizado em nosso servidor ou o link foi atualizado para uma nova página da academia.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto max-w-sm mx-auto">
          <Button
            to="/"
            variant="primary"
            size="md"
            className="w-full sm:w-auto"
            icon={<Home className="w-4 h-4" />}
          >
            Voltar ao Início
          </Button>

          <Button
            to="/horarios"
            variant="secondary"
            size="md"
            className="w-full sm:w-auto"
          >
            Quadro de Horários
          </Button>
        </div>
      </div>
    </div>
  );
};
