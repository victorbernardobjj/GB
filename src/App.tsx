/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Pages
import { Home } from './pages/Home';
import { HorariosPage } from './pages/HorariosPage';
import { JiuJitsuAdultoPage } from './pages/JiuJitsuAdultoPage';
import { JiuJitsuFemininoPage } from './pages/JiuJitsuFemininoPage';
import { PequenosCampeoesPage } from './pages/PequenosCampeoesPage';
import { JiuJitsuKidsPage } from './pages/JiuJitsuKidsPage';
import { JiuJitsuJunioresPage } from './pages/JiuJitsuJunioresPage';
import { MuayThaiPage } from './pages/MuayThaiPage';
import { BoxePage } from './pages/BoxePage';
import { KravMagaPage } from './pages/KravMagaPage';
import { HapkidoPage } from './pages/HapkidoPage';
import { UniformePage } from './pages/UniformePage';
import { LocalizacaoPage } from './pages/LocalizacaoPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

// Page transition container
function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/horarios"
          element={
            <PageWrapper>
              <HorariosPage />
            </PageWrapper>
          }
        />
        <Route
          path="/jiu-jitsu-adulto"
          element={
            <PageWrapper>
              <JiuJitsuAdultoPage />
            </PageWrapper>
          }
        />
        <Route
          path="/jiu-jitsu-feminino"
          element={
            <PageWrapper>
              <JiuJitsuFemininoPage />
            </PageWrapper>
          }
        />
        <Route
          path="/pequenos-campeoes"
          element={
            <PageWrapper>
              <PequenosCampeoesPage />
            </PageWrapper>
          }
        />
        <Route
          path="/jiu-jitsu-kids"
          element={
            <PageWrapper>
              <JiuJitsuKidsPage />
            </PageWrapper>
          }
        />
        <Route
          path="/jiu-jitsu-juniores"
          element={
            <PageWrapper>
              <JiuJitsuJunioresPage />
            </PageWrapper>
          }
        />
        <Route
          path="/muay-thai"
          element={
            <PageWrapper>
              <MuayThaiPage />
            </PageWrapper>
          }
        />
        <Route
          path="/boxe"
          element={
            <PageWrapper>
              <BoxePage />
            </PageWrapper>
          }
        />
        <Route
          path="/krav-maga"
          element={
            <PageWrapper>
              <KravMagaPage />
            </PageWrapper>
          }
        />
        <Route
          path="/hapkido"
          element={
            <PageWrapper>
              <HapkidoPage />
            </PageWrapper>
          }
        />
        <Route
          path="/uniforme"
          element={
            <PageWrapper>
              <UniformePage />
            </PageWrapper>
          }
        />
        <Route
          path="/localizacao"
          element={
            <PageWrapper>
              <LocalizacaoPage />
            </PageWrapper>
          }
        />
        <Route
          path="*"
          element={
            <PageWrapper>
              <NotFoundPage />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F7F6F3] text-[#111111] flex flex-col font-inter selection:bg-[#A3181A] selection:text-white">
        <Header />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}
