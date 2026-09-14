import React from 'react';

export default function Autor() {
  return (
    <section id="autor" style={{ position: 'relative', background: 'var(--bg-dark)', padding: '6rem 0', borderTop: '1px solid var(--border-color)' }}>
      
      {/* Continuing diagram line */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '1px', height: '100%', background: 'var(--gold-primary)', opacity: 0.15, zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-label reveal" style={{ color: 'var(--text-muted)', letterSpacing: '3px' }}>QUEM CONDUZ O PROCESSO</span>
        <h2 className="section-title reveal delay-1" style={{ color: 'var(--text-white)', fontWeight: 300, fontSize: 'clamp(2rem, 3vw, 2.5rem)', margin: '0 auto 4rem' }}>
          Ernani
        </h2>
        
        <div className="reveal delay-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="opportunity-content">
            <p className="opportunity-text mb-6" style={{ fontSize: '1.15rem', color: 'var(--text-white)' }}>
              Ernani é psicoterapeuta, especializado em neurociências, com 6 anos de experiência em prática clínica antes de migrar para seu trabalho de autoria e educação.
            </p>
            <p className="opportunity-text mb-6" style={{ fontSize: '1.15rem', color: 'var(--text-white)' }}>
              É autor de <strong style={{ color: 'var(--gold-primary)', fontWeight: 500 }}>“Por que nos sabotamos”</strong> e criador da <strong style={{ color: 'var(--gold-primary)', fontWeight: 500 }}>TAR — Teoria da Autoimagem Referencial</strong>.
            </p>
            <p className="opportunity-text mb-6" style={{ fontSize: '1.15rem', color: 'var(--text-muted)', borderLeft: '2px solid var(--gold-primary)', paddingLeft: '1.5rem', marginTop: '2rem' }}>
              A metodologia nasceu da investigação de uma questão recorrente em seu trabalho:
              <br/><br/>
              <em style={{ color: 'var(--text-white)' }}>“Por que alguém pode compreender profundamente um problema, possuir informação, querer mudar e ainda continuar reproduzindo determinado comportamento?”</em>
            </p>
            
            <div style={{ padding: '3rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '4px', marginTop: '4rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--gold-primary)', marginBottom: '2rem', fontWeight: 400, letterSpacing: '1px', textTransform: 'uppercase' }}>Ernani não escolhe sua vida por você.</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li className="bullet-item" style={{ color: 'var(--text-muted)' }}><span style={{ color: 'var(--gold-primary)' }}>—</span> Não vai dizer se você deveria abandonar uma carreira.</li>
                <li className="bullet-item" style={{ color: 'var(--text-muted)' }}><span style={{ color: 'var(--gold-primary)' }}>—</span> Não vai decidir se deveria permanecer em um relacionamento.</li>
                <li className="bullet-item" style={{ color: 'var(--text-muted)' }}><span style={{ color: 'var(--gold-primary)' }}>—</span> Não vai determinar qual versão de sucesso você deveria perseguir.</li>
              </ul>
              <p className="opportunity-text mt-6" style={{ marginTop: '2.5rem', fontSize: '1.15rem', color: 'var(--text-white)' }}>
                O trabalho é revelar e trabalhar o mecanismo. A escolha continua sendo sua. Porque o objetivo não é dependência. <strong style={{ color: 'var(--gold-primary)' }}>É Autoria.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
