import React from 'react';
import Footer from './components/Footer';
import { PopupProvider } from './components/PopupContext';
import ScrollReveal from './components/ScrollReveal';

import Hero from '../components/perimetro/Hero';
import Problema from '../components/perimetro/Problema';
import Metodo from '../components/perimetro/Metodo';
import Encontros from '../components/perimetro/Encontros';
import Publico from '../components/perimetro/Publico';
import Autor from '../components/perimetro/Autor';
import FAQ from '../components/perimetro/FAQ';

export default function Home() {
  return (
    <PopupProvider>
      <ScrollReveal />
      <main className="perimetro-theme">
        <Hero />
        <Publico />
        <Problema />
        <Metodo />
        <Encontros />
        <Autor />
        <FAQ />
        <Footer />
      </main>
    </PopupProvider>
  );
}
