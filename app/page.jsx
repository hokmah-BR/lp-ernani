import React from 'react';
import Footer from './components/Footer';
import { PopupProvider } from './components/PopupContext';
import ScrollReveal from './components/ScrollReveal';

import Hero from '../components/perimetro/Hero';
import Problema from '../components/perimetro/Problema';
import Metodo from '../components/perimetro/Metodo';
import Publico from '../components/perimetro/Publico';
import Autor from '../components/perimetro/Autor';
import FAQ from '../components/perimetro/FAQ';
import FinalPitch from '../components/perimetro/FinalPitch';

export default function Home() {
  return (
    <PopupProvider>
      <ScrollReveal />
      <main className="perimetro-theme">
        <Hero />
        <Problema />
        <Metodo />
        <Publico />
        <Autor />
        <FAQ />
        <FinalPitch />
        <Footer />
      </main>
    </PopupProvider>
  );
}
