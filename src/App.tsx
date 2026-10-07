/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIsMiniApp } from './components/WhatIsMiniApp';
import { ServicesGrid } from './components/ServicesGrid';
import { RubrosSection } from './components/RubrosSection';
import { DemoPizzeria } from './components/DemoPizzeria';
import { DemoVeterinaria } from './components/DemoVeterinaria';
import { LaunchBonus } from './components/LaunchBonus';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-body selection:bg-emerald-500/20 selection:text-emerald-900">
      {/* 3-Zone Top Bar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Principal */}
        <Hero />

        {/* 2. Qué es una Mini App */}
        <WhatIsMiniApp />

        {/* 3. Beneficios / Funcionalidades */}
        <ServicesGrid />

        {/* 4. Rubros */}
        <RubrosSection />

        {/* 5. Demo para Pizzería */}
        <DemoPizzeria />

        {/* 6. Demo para Veterinaria */}
        <DemoVeterinaria />

        {/* 7. Bonificación especial de lanzamiento */}
        <LaunchBonus />

        {/* 8. CTA Final */}
        <FinalCTA />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloat />
    </div>
  );
}
