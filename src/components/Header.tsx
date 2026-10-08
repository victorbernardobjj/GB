import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X, Clock, MapPin, ShieldCheck, Sparkles, Phone } from 'lucide-react';
import { Button } from './Button';
import { GYM_INFO, getWhatsAppLink } from '../data/info';

const MODALITY_LINKS = [
  { name: 'Jiu-Jitsu Adulto', path: '/jiu-jitsu-adulto', tag: 'Misto / No-Gi' },
  { name: 'Jiu-Jitsu Feminino', path: '/jiu-jitsu-feminino', tag: 'Exclusivo' },
  { name: 'Jiu-Jitsu Juniores (11-15a)', path: '/jiu-jitsu-juniores', tag: 'Juvenil' },
  { name: 'Jiu-Jitsu Kids (5-11a)', path: '/jiu-jitsu-kids', tag: 'Kids' },
  { name: 'Pequenos Campeões (3-5a)', path: '/pequenos-campeoes', tag: '3-5 anos' },
  { name: 'Muay Thai (Team Recruta)', path: '/muay-thai', tag: '8 Armas' },
  { name: 'Boxe Adulto', path: '/boxe', tag: 'Nobre Arte' },
  { name: 'Krav Maga (Mestre Kobi)', path: '/krav-maga', tag: 'Mestre Kobi' },
  { name: 'Hapkido', path: '/hapkido', tag: 'Defesa Pessoal' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalitiesDropdownOpen, setIsModalitiesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsModalitiesDropdownOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsModalitiesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isModalityActive = MODALITY_LINKS.some((m) => location.pathname === m.path);

  return (
    <>
      <header
        className={`fixed z-40 transition-all duration-300 left-3 right-3 sm:left-6 sm:right-6 md:left-8 md:right-8 max-w-7xl mx-auto rounded-2xl sm:rounded-full ${
          isScrolled
            ? 'top-2 sm:top-3.5 bg-gb-blue-dark/75 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/50 py-2 sm:py-2.5 px-3.5 sm:px-6'
            : 'top-3 sm:top-5 bg-gb-black/50 backdrop-blur-md border border-white/10 shadow-xl py-3 sm:py-3.5 px-4 sm:px-6'
        }`}
      >
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group transition-transform duration-300 hover:scale-102"
            aria-label="Gracie Barra Centro Juiz de Fora - Início"
          >
            {/* Logo image with NO wrapper border */}
            <div className="w-11 h-11 sm:w-13 sm:h-13 flex-shrink-0 flex items-center justify-center">
              <img
                src="/logo-gb.png"
                alt="Gracie Barra Oficial"
                className="w-full h-full object-contain filter drop-shadow-md"
              />
            </div>

            {/* Typography: "CENTRO JUIZ DE FORA" centered underneath "GRACIE BARRA" with matching width */}
            <div className="flex flex-col items-center justify-center">
              <span className="font-anton text-2xl sm:text-3xl text-white tracking-[0.05em] sm:tracking-[0.07em] leading-none text-center">
                GRACIE BARRA
              </span>
              <span className="w-full text-center text-[9px] sm:text-[11px] font-bold text-gb-red tracking-[0.18em] sm:tracking-[0.20em] uppercase leading-tight font-poppins mt-0.5">
                CENTRO JUIZ DE FORA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              to="/"
              className={`relative px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors ${
                isActive('/') ? 'text-white' : 'text-slate-200 hover:text-white'
              }`}
            >
              Início
              {isActive('/') && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-gb-red rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* Modalidades Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsModalitiesDropdownOpen(!isModalitiesDropdownOpen)}
                onMouseEnter={() => setIsModalitiesDropdownOpen(true)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors cursor-pointer ${
                  isModalityActive ? 'text-white' : 'text-slate-200 hover:text-white'
                }`}
                aria-expanded={isModalitiesDropdownOpen}
              >
                <span>Modalidades</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isModalitiesDropdownOpen ? 'rotate-180 text-gb-red' : ''
                  }`}
                />
                {isModalityActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-gb-red rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {isModalitiesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    onMouseLeave={() => setIsModalitiesDropdownOpen(false)}
                    className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-gb-blue-dark/95 border border-white/15 backdrop-blur-xl p-3 shadow-2xl z-50 divide-y divide-white/10"
                  >
                    <div className="py-1">
                      <div className="px-3 py-1.5 text-[11px] font-bold text-gb-red tracking-wider uppercase">
                        Jiu-Jitsu Gracie Barra
                      </div>
                      {MODALITY_LINKS.slice(0, 5).map((mod) => (
                        <Link
                          key={mod.path}
                          to={mod.path}
                          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          <span>{mod.name}</span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                            {mod.tag}
                          </span>
                        </Link>
                      ))}
                    </div>

                    <div className="pt-2">
                      <div className="px-3 py-1.5 text-[11px] font-bold text-sky-400 tracking-wider uppercase">
                        Lutas em Pé & Defesa Pessoal
                      </div>
                      {MODALITY_LINKS.slice(5).map((mod) => (
                        <Link
                          key={mod.path}
                          to={mod.path}
                          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          <span>{mod.name}</span>
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                              mod.tag.includes('Novo')
                                ? 'bg-gb-red text-white'
                                : 'bg-white/10 text-slate-300'
                            }`}
                          >
                            {mod.tag}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/horarios"
              className={`relative px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors ${
                isActive('/horarios') ? 'text-white' : 'text-slate-200 hover:text-white'
              }`}
            >
              Horários
              {isActive('/horarios') && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-gb-red rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            <Link
              to="/uniforme"
              className={`relative px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors ${
                isActive('/uniforme') ? 'text-white' : 'text-slate-200 hover:text-white'
              }`}
            >
              Uniforme
              {isActive('/uniforme') && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-gb-red rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            <Link
              to="/localizacao"
              className={`relative px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors ${
                isActive('/localizacao') ? 'text-white' : 'text-slate-200 hover:text-white'
              }`}
            >
              Localização
              {isActive('/localizacao') && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-gb-red rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="whatsapp"
              size="sm"
              whatsappMessage="Olá! Quero agendar minha aula experimental na Gracie Barra Centro Juiz de Fora."
            >
              Agendar aula
            </Button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-gb-red"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-gb-blue-dark text-white flex flex-col justify-between overflow-y-auto px-6 py-6"
          >
            {/* Top bar inside mobile drawer */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center">
                  <img
                    src="/logo-gb.png"
                    alt="Gracie Barra Oficial"
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-anton text-xl tracking-[0.05em] text-white leading-none text-center">
                    GRACIE BARRA
                  </span>
                  <span className="w-full text-center text-[9px] font-bold text-gb-red tracking-[0.18em] uppercase leading-tight font-poppins mt-0.5">
                    CENTRO JUIZ DE FORA
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links with Stagger */}
            <div className="py-6 flex flex-col space-y-4">
              <Link
                to="/"
                className="font-anton text-2xl uppercase tracking-wider text-slate-100 hover:text-gb-red transition-colors"
              >
                Início
              </Link>
              <Link
                to="/horarios"
                className="font-anton text-2xl uppercase tracking-wider text-slate-100 hover:text-gb-red transition-colors flex items-center justify-between"
              >
                <span>Quadro de Horários</span>
                <Clock className="w-5 h-5 text-gb-red" />
              </Link>
              <Link
                to="/uniforme"
                className="font-anton text-2xl uppercase tracking-wider text-slate-100 hover:text-gb-red transition-colors flex items-center justify-between"
              >
                <span>Regras de Uniforme</span>
                <ShieldCheck className="w-5 h-5 text-gb-red" />
              </Link>
              <Link
                to="/localizacao"
                className="font-anton text-2xl uppercase tracking-wider text-slate-100 hover:text-gb-red transition-colors flex items-center justify-between"
              >
                <span>Localização & Academia</span>
                <MapPin className="w-5 h-5 text-gb-red" />
              </Link>

              {/* Modalities expandable accordion */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">
                  Todas as Modalidades
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {MODALITY_LINKS.map((mod) => (
                    <Link
                      key={mod.path}
                      to={mod.path}
                      className="px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-slate-200 hover:bg-gb-red hover:text-white transition-all flex items-center justify-between"
                    >
                      <span>{mod.name}</span>
                      <span className="text-[10px] opacity-80">{mod.tag}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom info & Primary CTA */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <Button
                variant="whatsapp"
                fullWidth
                size="md"
                whatsappMessage="Olá! Gostaria de agendar uma aula experimental na Gracie Barra Centro Juiz de Fora."
              >
                Agendar aula experimental
              </Button>
              <p className="text-center text-xs text-slate-400">
                {GYM_INFO.address.full}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
