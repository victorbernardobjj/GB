import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '../data/testimonials';
import { GYM_INFO } from '../data/info';

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      next();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Google verified badge top notice */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-slate-200">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span className="font-semibold text-white">4.9 / 5.0 estrelas</span>
          <span className="text-slate-400">no Google Avaliações</span>
        </div>
      </div>

      {/* Main card */}
      <div className="relative rounded-3xl bg-gradient-to-b from-neutral-900 to-gb-blue-dark/60 border border-white/15 p-6 sm:p-10 shadow-2xl backdrop-blur-md overflow-hidden min-h-[290px] flex flex-col justify-between">
        <Quote className="absolute top-6 right-6 w-16 h-16 text-white/5 pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* Sequential Animated Stars */}
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.08 * i, duration: 0.2 }}
                >
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </motion.div>
              ))}
              <span className="ml-2 text-xs text-slate-400">{current.timeAgo}</span>
            </div>

            {/* Testimonial Quote */}
            <p className="text-base sm:text-xl text-slate-100 font-light leading-relaxed italic">
              "{current.quote}"
            </p>

            {/* Author info */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                {current.avatarUrl && (
                  <img
                    src={current.avatarUrl}
                    alt={current.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gb-red"
                  />
                )}
                <div>
                  <h4 className="font-anton text-lg text-white uppercase tracking-wider">
                    {current.author}
                  </h4>
                  <p className="text-xs text-gb-red font-medium">{current.modality}</p>
                </div>
              </div>

              <span className="hidden sm:inline-block text-[11px] text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                {current.badge}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center justify-between pt-6 mt-4">
          {/* Indicators */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-gb-red' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Ir para avaliação ${idx + 1}`}
              />
            ))}
          </div>

          {/* Prev/Next arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-gb-red text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Avaliação anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-gb-red text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Próxima avaliação"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Button link to Google Reviews */}
      <div className="mt-6 text-center">
        <a
          href={GYM_INFO.social.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
        >
          <span>Ver todas as avaliações no Google</span>
          <ExternalLink className="w-4 h-4 text-gb-red" />
        </a>
      </div>
    </div>
  );
};
