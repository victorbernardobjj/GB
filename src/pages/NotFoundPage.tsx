import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import { Button } from '../components/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gb-black text-white flex items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(225, 6, 0, 0.4) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
        {/* Animated Falling & Swinging Black Belt */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ y: -80, opacity: 0, rotate: -20 }}
            animate={{
              y: 0,
              opacity: 1,
              rotate: [0, -10, 8, -4, 0],
            }}
            transition={{
              duration: 1.4,
              ease: 'easeOut',
              rotate: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
            }}
            className="relative flex flex-col items-center"
          >
            {/* Belt ribbon graphic */}
            <div className="w-10 sm:w-12 h-36 sm:h-44 bg-neutral-900 border-2 border-gb-red rounded-b-xl shadow-2xl flex flex-col justify-end items-center pb-4 relative overflow-hidden">
              {/* Red bar on black belt */}
              <div className="w-full h-8 bg-gb-red flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-white"></span>
              </div>
              <div className="w-full h-2 bg-white mt-1"></div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-3">
          <span className="font-anton text-7xl sm:text-9xl text-gb-red tracking-tight block">
            404
          </span>
          <h1 className="font-anton text-3xl sm:text-5xl uppercase tracking-wider text-white">
            ESSA LUTA VOCÊ NÃO PERDEU, SÓ SE PERDEU NO CAMINHO.
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto font-light leading-relaxed">
            A página que você está procurando foi movida, renomeada ou nunca pisou neste tatame.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gb-red hover:bg-gb-red-dark text-white font-anton text-base uppercase tracking-wider shadow-xl glow-red transition-all"
          >
            <Home className="w-5 h-5" />
            <span>Voltar ao início</span>
          </Link>

          <Link
            to="/horarios"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-anton text-base uppercase tracking-wider transition-all"
          >
            <Compass className="w-5 h-5" />
            <span>Ver horários</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
