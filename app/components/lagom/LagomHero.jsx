import React from 'react';
import Image from 'next/image';
import CtaButton from '../CtaButton';
import VslPlayer from '../../lagom-pereque/VslPlayer';

export default function LagomHero() {
  return (
    <section className="lagom-hero-ed" aria-labelledby="hero-heading">
      <div className="hero-bg" style={{ opacity: 0.40 }}>
        <Image
          src="/assets/images/lagom/lagom-pereque-porto-belo-area-verde.webp"
          alt="Vista aérea da área verde do Lagom Perequê"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="hero-overlay" />

      {/* TOPO / HEADER */}
      <header style={{ position: 'relative', zIndex: 2, padding: 'clamp(0.5rem, 2vw, 1rem) clamp(1rem, 5vw, 3rem) 0', display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Image 
          src="/assets/images/lagom/logo-lagom-branco.png" 
          alt="Logo Lagom Perequê" 
          width={110} 
          height={74} 
          priority
        />
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="hero-content" style={{ marginTop: 'clamp(1rem, 3vw, 2rem)' }}>
        <div className="hero-cinematic">
          {/* HEADLINE E TEXTOS */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(0.6rem, 2vw, 1.2rem)' }}>
            <span className="ed-label ed-label--light reveal" style={{ marginBottom: '0' }}>Porto Belo · Santa Catarina</span>
            
            <h1 id="hero-heading" className="hero-headline reveal delay-1" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', textTransform: 'none', lineHeight: 1.15, fontWeight: 700, margin: 0 }}>
              <span style={{ color: 'var(--lagom-cobre)', fontStyle: 'italic' }}>+R$ 4 Bilhões em vendas</span> Porto Belo é a cidade que mais vende imóveis e valoriza em SC.
            </h1>
            
            <p className="reveal delay-2" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', maxWidth: '780px', fontWeight: 300, margin: 0 }}>
              Conheça o maior empreendimento de alto padrão a apenas 100 metros do mar, na Praia do Perequê. No lugar de mais concreto, o Lagom Perequê criou um verdadeiro "Central Park", onde qualidade de vida e valorização caminham juntas. Entenda:
            </p>
          </div>

          {/* VSL PLAYER */}
          <div className="reveal delay-3" style={{ marginTop: 'clamp(1rem, 4vw, 2.5rem)', width: '100%' }}>
            <VslPlayer />
          </div>

          {/* CAIXA DE CONVERSÃO (CTA) */}
          <div className="reveal delay-4" style={{ marginTop: 'clamp(1rem, 4vw, 2.5rem)' }}>
            <CtaButton
              className="btn-cta"
              formId="lagom-pereque-hero"
              aria-label="Conhecer o projeto Lagom Perequê"
            >
              Conhecer o projeto
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
