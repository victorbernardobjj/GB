import React from 'react';
import { motion } from 'motion/react';
import { BrushDivider } from './BrushDivider';

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
      {/* Background Image with parallax feeling */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={image}
          alt={imageAlt}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="w-full h-full object-cover object-center filter brightness-90"
        />

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 ${
            overlayType === 'hero'
              ? 'hero-gradient'
              : overlayType === 'darker'
              ? 'bg-gradient-to-t from-gb-black via-gb-black/85 to-gb-black/60'
              : 'hero-overlay-dark'
          }`}
        />

        {/* Diagonal accents in the background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none" aria-hidden="true">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 40%, rgba(225, 6, 0, 0.4) 0%, transparent 60%)',
            }}
          />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
          >
            <span
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md border ${
                accentPink
                  ? 'bg-gb-pink/20 text-pink-300 border-gb-pink/40'
                  : 'bg-white/10 text-white border-white/20'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  accentPink ? 'bg-gb-pink animate-ping' : 'bg-gb-red'
                }`}
              />
              {badge}
            </span>
          </motion.div>
        )}

        {/* H1 Title with word-by-word stagger */}
        <h1 className="font-anton text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight uppercase leading-[0.92] mb-6 hero-title-skew">
          {words.map((word, idx) => {
            const isHighlight =
              highlightWord && word.toLowerCase().includes(highlightWord.toLowerCase());

            return (
              <motion.span
                key={`${word}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.15 + idx * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`inline-block mr-2 sm:mr-4 ${
                  isHighlight
                    ? accentPink
                      ? 'text-gb-pink font-anton uppercase'
                      : 'text-gb-red font-anton uppercase'
                    : 'text-white'
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl font-light leading-relaxed mb-8"
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        {actions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto max-w-sm sm:max-w-none mx-auto"
          >
            {actions}
          </motion.div>
        )}

        {/* Optional Glass Badges */}
        {floatingBadges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-10 flex flex-wrap justify-center items-center gap-3"
          >
            {floatingBadges.map((fBadge, i) => (
              <div
                key={i}
                className="glass-panel px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-slate-100 flex items-center gap-2 shadow-sm"
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
