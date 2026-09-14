'use client';
import React from 'react';
import { usePopup } from '../../app/components/PopupContext';

export default function FinalPitch() {
  const { openPopup } = usePopup();

  return (
    <section className="final-cta" id="inscricao" style={{ position: 'relative', background: 'var(--bg-dark)', padding: '8rem 0', borderTop: '1px solid var(--border-color)' }}>
      
      {/* Continuing diagram line */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '1px', height: '80px', background: 'var(--gold-primary)', opacity: 0.15, zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '2rem', fontWeight: 300, color: 'var(--text-white)' }}>
          Você não precisa reconstruir sua vida hoje.
        </h2>
        <p className="text-muted reveal delay-1" style={{ fontSize: '1.4rem', maxWidth: '700px', margin: '0 auto 4rem', color: 'var(--gold-primary)' }}>
          Precisa descobrir até onde suas escolhas realmente são suas.
        </p>
        
        <div className="reveal delay-2" style={{ background: 'var(--card-bg)', padding: '4rem', borderRadius: '4px', border: '1px solid var(--border-color)', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-white)', marginBottom: '2rem', textAlign: 'center', letterSpacing: '2px', fontWeight: 400, textTransform: 'uppercase' }}>
            Perímetro: Ciclo de Reconfiguração
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <li className="bullet-item" style={{ color: 'var(--text-muted)' }}><span style={{ color: 'var(--gold-primary)' }}>—</span> Atendimento individual</li>
            <li className="bullet-item" style={{ color: 'var(--text-muted)' }}><span style={{ color: 'var(--gold-primary)' }}>—</span> 6 sessões online</li>
            <li className="bullet-item" style={{ color: 'var(--text-muted)' }}><span style={{ color: 'var(--gold-primary)' }}>—</span> Foco em uma demanda específica</li>
            <li className="bullet-item" style={{ color: 'var(--text-muted)' }}><span style={{ color: 'var(--gold-primary)' }}>—</span> Suporte via WhatsApp</li>
          </ul>
          
          <div style={{ textAlign: 'center', margin: '4rem 0 3rem' }}>
            <p style={{ fontSize: '2.5rem', fontWeight: 300, color: 'var(--text-white)' }}>[INSERIR VALOR]</p>
            <p className="text-muted" style={{ marginTop: '0.5rem', letterSpacing: '1px' }}>[INSERIR FORMAS DE PAGAMENTO]</p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <button onClick={openPopup} className="btn-cta" style={{ maxWidth: '400px', padding: '1.2rem', fontSize: '1.1rem' }}>
              QUERO INICIAR MEU CICLO
            </button>
            <p style={{ marginTop: '2rem', fontSize: '1rem', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.6 }}>
              Sua vida pode continuar parecendo a mesma por fora.<br/>
              A diferença é quem está escolhendo por dentro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
