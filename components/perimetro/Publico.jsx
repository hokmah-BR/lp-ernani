'use client';
import React from 'react';
import { usePopup } from '../../app/components/PopupContext';

export default function Publico() {
  const { openPopup } = usePopup();

  return (
    <section id="publico" style={{ position: 'relative', background: 'var(--bg-dark)', padding: '6rem 0' }}>
      
      {/* Continuing diagram line */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '1px', height: '100%', background: 'var(--gold-primary)', opacity: 0.15, zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
        <span className="section-label reveal" style={{ color: 'var(--text-muted)', letterSpacing: '3px' }}>PARA QUEM É</span>
        <h2 className="section-title reveal delay-1" style={{ color: 'var(--text-white)', fontWeight: 300, fontSize: 'clamp(2rem, 3vw, 2.5rem)', maxWidth: '900px', margin: '0 auto 4rem' }}>
          Este ciclo foi pensado para quem já sabe demais — e continua parado.
        </h2>
        
        <div className="reveal delay-2" style={{ padding: '4rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '4px' }}>
          <p className="opportunity-text mb-6" style={{ fontSize: '1.2rem', color: 'var(--gold-primary)' }}>Especialmente para você que:</p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
            <li className="bullet-item" style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}><span style={{ color: 'var(--gold-primary)', marginRight: '1rem' }}>—</span> construiu uma carreira sólida, mas trava quando precisa decidir sobre a própria vida;</li>
            <li className="bullet-item" style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}><span style={{ color: 'var(--gold-primary)', marginRight: '1rem' }}>—</span> consegue liderar pessoas e resolver problemas complexos, mas adia há anos uma decisão pessoal;</li>
            <li className="bullet-item" style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}><span style={{ color: 'var(--gold-primary)', marginRight: '1rem' }}>—</span> já fez terapia, estudou comportamento, ouviu podcasts, leu livros e acumulou explicações — sem conseguir sustentar determinadas mudanças;</li>
            <li className="bullet-item" style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}><span style={{ color: 'var(--gold-primary)', marginRight: '1rem' }}>—</span> começa mudanças importantes e depois percebe que está voltando silenciosamente ao mesmo ponto;</li>
            <li className="bullet-item" style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}><span style={{ color: 'var(--gold-primary)', marginRight: '1rem' }}>—</span> organiza escolhas para não decepcionar outras pessoas e percebe cada vez menos onde termina a expectativa delas e começa a sua;</li>
            <li className="bullet-item" style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}><span style={{ color: 'var(--gold-primary)', marginRight: '1rem' }}>—</span> conquistou algo que deveria trazer satisfação e descobriu que a sensação esperada simplesmente não veio;</li>
            <li className="bullet-item" style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}><span style={{ color: 'var(--gold-primary)', marginRight: '1rem' }}>—</span> teme que mudar signifique destruir carreira, relacionamento ou tudo aquilo que levou anos para construir.</li>
          </ul>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <p className="opportunity-text" style={{ fontStyle: 'italic', marginBottom: '3rem', color: 'var(--text-white)' }}>
              "O processo não existe para decidir por você. Existe para investigar o que está decidindo antes de você."
            </p>
            <button onClick={openPopup} className="btn-cta" style={{ maxWidth: '400px' }}>
              QUERO RECUPERAR MEU TERRITÓRIO DE ESCOLHA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
