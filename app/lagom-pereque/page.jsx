import React from 'react';
import Footer from '../components/Footer';
import { PopupProvider } from '../components/PopupContext';
import ScrollReveal from '../components/ScrollReveal';
import WhatsAppFloatButton from '../components/WhatsAppFloatButton';
import './lagom.css';

// Componentes componentizados (Refatoração Clean Architecture)
import LagomHero from '../components/lagom/LagomHero';
import LagomAdvertorial from '../components/lagom/LagomAdvertorial';
import LagomPerfilInvestidor from '../components/lagom/LagomPerfilInvestidor';
import LagomParceiros from '../components/lagom/LagomParceiros';
import LagomUrgencia from '../components/lagom/LagomUrgencia';
import LagomGaleria from '../components/lagom/LagomGaleria';

// Metadata adicionada para SEO (Conforme Prompt Mestre)
export const metadata = {
  title: 'Lagom Perequê | GT Home e ABC',
  description: '+R$ 4 Bilhões em vendas. Porto Belo é a cidade que mais vende imóveis e valoriza em SC.',
};

export default function LagomPereque() {
  return (
    <PopupProvider>
      <ScrollReveal />
      <WhatsAppFloatButton formId="lagom-pereque-float-whatsapp" />
      
      {/* HTML Semântico: Trocado de div para main */}
      <main className="lagom-theme">
        <LagomHero />
        <LagomAdvertorial />
        <LagomPerfilInvestidor />
        <LagomParceiros />
        <LagomUrgencia />
        <LagomGaleria />
        
        <Footer />
      </main>
    </PopupProvider>
  );
}
