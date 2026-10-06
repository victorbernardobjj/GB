import React from 'react';
import { motion } from 'motion/react';
import { BrushDivider } from './BrushDivider';
import { BadgeNovo } from './BadgeNovo';

interface PageHeroProps {
  image: string;
  imageAlt: string;
  badge?: string;
  title: string;
  highlightWord?: string; // Word in Playfair italic or red highlight
  subtitle: string;
  actions?: React.ReactNode;
  accentPink?: boolean;
  brushColor?: 'white' | 'blue' | 'black' | 'ice';
  overlayType?: 'hero' | 'dark' | 'darker';
  floatingBadges?: string[];
}

export const PageHero: React.FC<PageHeroProps> = ({
  image,
  imageAlt,
  badge,
  title,
  highlightWord,
  subtitle,
  actions,
  accentPink = false,
  brushColor = 'black',
  overlayType = 'hero',
  floatingBadges = [],
}) => {
  // Split title into words for stagger effect
  const words = title.split(' ');

  return (
    <section className="relative min-h-[68vh] md:min-h-[78vh] flex items-center justify-center overflow-hidden pt-28 pb-20 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover object-center filter brightness-90"
        />

        {/* Clean solid dark overlay (45-55% opacity) */}
        <div className="absolute inset-0 bg-neutral-950/60" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-semibold tracking-wider uppercase bg-neutral-900 border border-white/15 text-slate-200">
              <span className="w-2 h-2 rounded-full bg-gb-red" />
              {badge}
            </span>
          </motion.div>
        )}

        {/* H1 Title with word-by-word stagger */}
        <h1 className="font-anton text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.95] mb-6">
          {words.map((word, idx) => {
            const isHighlight =
              highlightWord && word.toLowerCase().includes(highlightWord.toLowerCase());

            return (
              <motion.span
                key={`${word}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + idx * 0.05,
                  ease: 'easeOut',
                }}
                className={`inline-block mr-3 sm:mr-4 ${
                  isHighlight ? 'text-gb-red font-anton uppercase' : 'text-white'
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
          className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl font-light leading-relaxed mb-8"
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        {actions && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {actions}
          </motion.div>
        )}

        {/* Informational Badges */}
        {floatingBadges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5, ease: 'easeOut' }}
            className="mt-10 flex flex-wrap justify-center items-center gap-2.5"
          >
            {floatingBadges.map((fBadge, i) => (
              <div
                key={i}
                className="px-3.5 py-1.5 rounded text-xs font-medium text-slate-200 bg-neutral-900 border border-white/10 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gb-red" />
                <span>{fBadge}</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Brush Divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <BrushDivider color={brushColor} position="bottom" />
      </div>
    </section>
  );
};
