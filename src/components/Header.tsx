import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { GYM_INFO, getWhatsAppLink } from '../data/info';

const MODALITY_LINKS = [
  { name: 'Jiu-Jitsu Adulto', path: '/jiu-jitsu-adulto', detail: 'Fundamentos e No-Gi' },
  { name: 'Jiu-Jitsu Feminino', path: '/jiu-jitsu-feminino', detail: 'Turma dedicada' },
  { name: 'Jiu-Jitsu Juniores', path: '/jiu-jitsu-juniores', detail: '11 a 15 anos' },
  { name: 'Jiu-Jitsu Kids', path: '/jiu-jitsu-kids', detail: '5 a 11 anos' },
  { name: 'Pequenos Campeões', path: '/pequenos-campeoes', detail: '3 a 5 anos' },
  { name: 'Muay Thai', path: '/muay-thai', detail: 'Team Recruta' },
  { name: 'Boxe Adulto', path: '/boxe', detail: 'Nobre arte' },
  { name: 'Krav Maga', path: '/krav-maga', detail: 'Mestre Kobi' },
  { name: 'Hapkido', path: '/hapkido', detail: 'Defesa pessoal' },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalitiesOpen, setIsModalitiesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsModalitiesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsModalitiesOpen(false);
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
      <header className="sticky top-0 z-40 h-[72px] bg-[#F7F6F3] border-b border-[#D9D6CF] text-[#111111]">
        <div className="max-w-[1240px] mx-auto h-full px-5 sm:px-8 flex items-center justify-between">
          {/* Logo & School Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Gracie Barra Centro Juiz de Fora"
          >
            <img
              src="/logo-gb.png"
              alt="Gracie Barra"
              className="w-10 h-10 object-contain flex-shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-title text-xl text-[#111111] tracking-wider leading-none font-semibold">
                GRACIE BARRA
              </span>
              <span className="text-[10px] font-inter font-medium text-[#5A5A57] tracking-[0.16em] uppercase mt-0.5">
                Centro Juiz de Fora
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-inter">
            <Link
              to="/"
              className={`transition-colors py-1 ${
                isActive('/') ? 'text-[#111111] font-medium border-b border-[#111111]' : 'text-[#5A5A57] hover:text-[#111111]'
              }`}
            >
              Início
            </Link>

            {/* Modalities Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsModalitiesOpen(!isModalitiesOpen)}
                className={`flex items-center gap-1 transition-colors py-1 cursor-pointer ${
                  isModalityActive ? 'text-[#111111] font-medium border-b border-[#111111]' : 'text-[#5A5A57] hover:text-[#111111]'
                }`}
              >
                <span>Modalidades</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isModalitiesOpen ? 'rotate-180' : ''
                  }`}
                  strokeWidth={1.5}
                />
              </button>

              {isModalitiesOpen && (
                <div className="absolute top-full left-0 mt-3 w-72 bg-[#F7F6F3] border border-[#D9D6CF] shadow-lg rounded-[2px] p-2 z-50">
                  <div className="px-3 py-1.5 text-[11px] font-inter font-medium text-[#5A5A57] uppercase tracking-wider border-b border-[#D9D6CF] mb-1">
                    Quadro de Modalidades
                  </div>
                  {MODALITY_LINKS.map((mod) => (
                    <Link
                      key={mod.path}
                      to={mod.path}
                      className="flex items-center justify-between px-3 py-2 text-xs font-inter text-[#111111] hover:bg-[#EDEBE6] transition-colors rounded-[2px]"
                    >
                      <span className="font-medium">{mod.name}</span>
                      <span className="text-[#5A5A57] text-[11px]">{mod.detail}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/horarios"
              className={`transition-colors py-1 ${
                isActive('/horarios') ? 'text-[#111111] font-medium border-b border-[#111111]' : 'text-[#5A5A57] hover:text-[#111111]'
              }`}
            >
              Horários
            </Link>

            <Link
              to="/uniforme"
              className={`transition-colors py-1 ${
                isActive('/uniforme') ? 'text-[#111111] font-medium border-b border-[#111111]' : 'text-[#5A5A57] hover:text-[#111111]'
              }`}
            >
              Uniforme
            </Link>

            <Link
              to="/localizacao"
              className={`transition-colors py-1 ${
                isActive('/localizacao') ? 'text-[#111111] font-medium border-b border-[#111111]' : 'text-[#5A5A57] hover:text-[#111111]'
              }`}
            >
              Localização
            </Link>
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={getWhatsAppLink('Olá. Gostaria de agendar uma aula experimental gratuita na Gracie Barra Centro JF.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white text-xs font-inter font-medium rounded-[2px] transition-colors duration-200"
            >
              <span>Aula experimental</span>
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#111111] hover:bg-[#EDEBE6] rounded-[2px]"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#F7F6F3] flex flex-col justify-between p-6 overflow-y-auto lg:hidden">
          <div className="flex items-center justify-between pb-6 border-b border-[#D9D6CF]">
            <div className="flex items-center gap-3">
              <img src="/logo-gb.png" alt="Gracie Barra" className="w-9 h-9 object-contain" />
              <div className="flex flex-col">
                <span className="font-title text-lg tracking-wider text-[#111111] font-semibold">GRACIE BARRA</span>
                <span className="text-[10px] text-[#5A5A57] uppercase tracking-wider">Centro Juiz de Fora</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-[#111111]"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>

          <div className="py-8 space-y-4 font-title text-2xl tracking-wide uppercase text-[#111111]">
            <div>
              <Link to="/" className="block py-2 border-b border-[#D9D6CF]">Início</Link>
            </div>
            <div>
              <Link to="/horarios" className="block py-2 border-b border-[#D9D6CF]">Quadro de Horários</Link>
            </div>
            <div>
              <Link to="/uniforme" className="block py-2 border-b border-[#D9D6CF]">Regras de Uniforme</Link>
            </div>
            <div>
              <Link to="/localizacao" className="block py-2 border-b border-[#D9D6CF]">Localização</Link>
            </div>

            <div className="pt-4">
              <span className="text-xs font-inter font-medium text-[#5A5A57] tracking-wider uppercase block mb-3">
                Modalidades
              </span>
              <div className="grid grid-cols-1 gap-2 font-inter text-sm normal-case">
                {MODALITY_LINKS.map((mod) => (
                  <Link
                    key={mod.path}
                    to={mod.path}
                    className="py-1.5 text-[#111111] flex items-center justify-between"
                  >
                    <span>{mod.name}</span>
                    <span className="text-xs text-[#5A5A57]">{mod.detail}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#D9D6CF] space-y-3">
            <a
              href={getWhatsAppLink('Olá. Gostaria de agendar uma aula experimental gratuita na Gracie Barra Centro JF.')}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-[#A3181A] text-white text-center text-sm font-inter font-medium rounded-[2px]"
            >
              Agendar aula experimental
            </a>
            <p className="text-xs text-center text-[#5A5A57] font-inter">
              {GYM_INFO.address.full}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
