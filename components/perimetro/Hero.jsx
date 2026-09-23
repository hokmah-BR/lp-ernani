'use client';
import React from 'react';
import { usePopup } from '../../app/components/PopupContext';

export default function Hero() {
  const { openPopup } = usePopup();

  return (
    <section className="hero" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '0 1.5rem', background: 'var(--bg-dark)' }}>
      <div className="hero-content reveal" style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
        
        <span style={{ 
          fontFamily: 'var(--font-outfit)', 
          fontWeight: 700, 
          fontSize: '1.2rem', 
          letterSpacing: '4px', 
          color: 'var(--text-white)', 
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '1rem'
        }}>
          MENTORIA ORIGEM
        </span>
        
        <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--gold-primary)', margin: '0 auto 3rem' }}></div>
        
        <h1 className="hero-title" style={{ textAlign: 'center', fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.3, fontWeight: 300, color: 'var(--text-white)' }}>
          Você já entendeu o seu padrão.<br/><br/>
          <span style={{ fontWeight: 600 }}>A pergunta agora é: por que continua obedecendo a ele?</span>
        </h1>

        <p style={{ marginTop: '2rem', fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          Um ciclo com seis encontros de direcionamento e acompanhamento individual para quem sabe exatamente o que precisa fazer e, mesmo assim, não faz.
        </p>

        <p style={{ marginTop: '1.5rem', fontSize: '1.2rem', color: 'var(--gold-primary)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>
          Destrave a sua execução e potencialize de vez os resultados
        </p>
        
        <div style={{ marginTop: '3rem' }}>
          <button onClick={openPopup} className="btn-cta" style={{ maxWidth: '400px', margin: '0 auto' }}>
            QUERO AGENDAR MINHA CONSULTA
          </button>
        </div>
        
        {/* Subtle diagram start point */}
        <div style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
           <div style={{ width: '1px', height: '80px', background: 'var(--gold-primary)', opacity: 0.5 }}></div>
           <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--gold-primary)', marginTop: '4px' }}></div>
        </div>
        
      </div>
    </section>
  );
}
