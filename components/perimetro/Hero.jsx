import React from 'react';
import CtaButton from './CtaButton';

export default function Hero() {

  return (
    <section className="hero" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', paddingTop: '8rem', paddingBottom: '6rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Neural/Cosmic Abstrato (Placeholder) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 30%, rgba(196, 154, 106, 0.05) 0%, rgba(12, 23, 25, 1) 70%)',
        zIndex: 1,
        pointerEvents: 'none'
      }}></div>
      
      {/* Linhas finas representando conexões (Efeito sutil) */}
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, opacity: 0.05, pointerEvents: 'none' }} xmlns="http://www.w3.org/2000/svg">
        <path d="M 0,200 Q 400,300 800,100 T 1600,200" fill="none" stroke="#C49A6A" strokeWidth="1" />
        <path d="M -200,400 Q 400,100 1000,500 T 2000,400" fill="none" stroke="#C49A6A" strokeWidth="0.5" />
      </svg>

      <div className="hero-content reveal" style={{ maxWidth: '800px', width: '100%', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        
        <span style={{ 
          fontFamily: 'var(--font-inter)', 
          fontWeight: 500, 
          fontSize: 'var(--text-xs)', 
          letterSpacing: '4px', 
          color: 'var(--text-muted)', 
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: 'var(--space-6)'
        }}>
          Mentoria Origem
        </span>
        
        <h1 className="hero-title" style={{ textAlign: 'center', fontSize: 'var(--text-5xl)', lineHeight: 1.2, fontWeight: 400, color: 'var(--text-white)', margin: '0 auto var(--space-6)', maxWidth: '900px' }}>
          Entenda a ORIGEM da trava que te impede de ir mais longe.
        </h1>

        <p style={{ fontSize: 'var(--text-xl)', color: 'var(--text-muted)', lineHeight: 1.6, fontWeight: 300, maxWidth: '700px', margin: '0 auto var(--space-12)' }}>
          <strong style={{ color: 'var(--text-white)', fontWeight: 400 }}>Você sabe que sua mente é acima da média.</strong><br /><br />
          Já entendeu muita coisa. Já tentou mudar hábitos, comportamentos e decisões. Mas, em algum momento, acaba voltando aos mesmos padrões.
        </p>

        <p style={{ fontSize: 'var(--text-xl)', color: 'var(--gold-primary)', lineHeight: 1.5, fontWeight: 400, fontStyle: 'italic', fontFamily: 'var(--font-playfair)', margin: '0 auto var(--space-8)', maxWidth: '800px' }}>
          Assista ao vídeo e descubra como referências construídas ao longo da sua vida ainda podem influenciar suas escolhas hoje — <strong style={{ color: 'var(--text-white)', fontWeight: 400, fontFamily: 'var(--font-inter)', fontStyle: 'normal' }}>mesmo quando você acredita estar fazendo a coisa certa.</strong>
        </p>

        {/* Placeholder VSL */}
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto var(--space-10)', aspectRatio: '16/9', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 40px rgba(0,0,0,0.6)' }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-inter)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: 'var(--text-sm)' }}>[ Vídeo VSL (YouTube) ]</span>
        </div>

        <p style={{ fontSize: 'var(--text-xl)', color: 'var(--text-white)', lineHeight: 1.6, fontWeight: 400, fontStyle: 'italic', fontFamily: 'var(--font-playfair)', margin: '0 auto var(--space-8)' }}>
          Destrave sua execução e transforme compreensão em movimento.
        </p>
        
        <div style={{ margin: '0 auto' }}>
          <CtaButton style={{ maxWidth: '380px', margin: '0 auto' }} />
        </div>
        
        {/* Subtle diagram start point (Trajetória inicial) */}
        <div style={{ marginTop: 'var(--space-20)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
           <div style={{ width: '1px', height: '100px', background: 'linear-gradient(to bottom, rgba(196,154,106,0), rgba(196,154,106,0.5))' }}></div>
           <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold-primary)', marginTop: '4px' }}></div>
        </div>
        
      </div>
    </section>
  );
}
