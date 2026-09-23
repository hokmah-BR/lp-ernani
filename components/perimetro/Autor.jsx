import React from 'react';

export default function Autor() {
  return (
    <section id="autor" style={{ position: 'relative', background: 'var(--bg-dark)', padding: '6rem 0', borderTop: '1px solid var(--border-color)' }}>
      
      {/* Continuing diagram line */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '1px', height: '100%', background: 'var(--gold-primary)', opacity: 0.15, zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-label reveal" style={{ color: 'var(--text-muted)', letterSpacing: '3px' }}>QUEM CONDUZ O PROCESSO</span>
        <h2 className="section-title reveal delay-1" style={{ color: 'var(--text-white)', fontWeight: 300, fontSize: 'clamp(2rem, 3vw, 2.5rem)', margin: '0 auto 4rem' }}>
          Ernani Felipe
        </h2>
        
        <div className="reveal delay-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="opportunity-content" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '3rem' }}>
            <p className="opportunity-text mb-6" style={{ fontSize: '1.15rem', color: 'var(--text-white)' }}>
              Terapeuta com especialização em Neurociências e seis anos de prática clínica antes de migrar para autoria e educação.
            </p>
            <p className="opportunity-text mb-6" style={{ fontSize: '1.15rem', color: 'var(--text-white)' }}>
              Autor de <strong style={{ color: 'var(--gold-primary)', fontWeight: 500 }}>“Por que nos sabotamos”</strong> e criador da <strong style={{ color: 'var(--gold-primary)', fontWeight: 500 }}>TAR — Teoria da Autoimagem Referencial</strong>.
            </p>
            <p className="opportunity-text mb-6" style={{ fontSize: '1.15rem', color: 'var(--text-muted)', borderLeft: '2px solid var(--gold-primary)', paddingLeft: '1.5rem', marginTop: '2rem' }}>
              A metodologia nasceu da investigação de uma questão recorrente no seu trabalho:
              <br/><br/>
              <em style={{ color: 'var(--text-white)' }}>“Por que alguém pode compreender profundamente um problema, possuir informação, querer mudar e ainda continuar reproduzindo determinado comportamento?”</em>
            </p>
            <p className="opportunity-text mt-8" style={{ fontSize: '1.1rem', color: 'var(--text-muted)', fontStyle: 'italic', textAlign: 'center' }}>
              O atendimento é individual e online, para brasileiros no Brasil e no exterior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
