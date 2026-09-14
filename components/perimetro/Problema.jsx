import React from 'react';

export default function Problema() {
  return (
    <section id="problema" style={{ position: 'relative', background: 'var(--bg-dark)', padding: '6rem 0' }}>
      
      {/* Continuing diagram line */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '1px', height: '100%', background: 'var(--gold-primary)', opacity: 0.15, zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-label reveal" style={{ color: 'var(--text-muted)', letterSpacing: '3px' }}>O FOSSO ENTRE SABER E AGIR</span>
        <h2 className="section-title reveal delay-1" style={{ color: 'var(--text-white)', fontWeight: 300, fontSize: 'clamp(2rem, 3vw, 2.5rem)', maxWidth: '900px', margin: '0 auto 4rem', lineHeight: 1.4 }}>
          Existe uma diferença entre entender por que você faz algo e conseguir fazer diferente.
        </h2>
        
        <div className="reveal delay-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="opportunity-content">
            <p className="opportunity-text mb-6" style={{ textAlign: 'center', fontSize: '1.2rem', color: 'var(--gold-primary)' }}>Ao longo deste processo, você vai investigar:</p>
            
            <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, margin: '3rem auto', maxWidth: '650px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li className="bullet-item" style={{ fontSize: '1.15rem', color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--gold-primary)', marginRight: '1rem' }}>—</span> Por que algumas decisões parecem óbvias racionalmente e quase impossíveis quando chega a hora de executá-las.
              </li>
              <li className="bullet-item" style={{ fontSize: '1.15rem', color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--gold-primary)', marginRight: '1rem' }}>—</span> Como identificar o momento em que uma regra interna começa a decidir antes de você.
              </li>
              <li className="bullet-item" style={{ fontSize: '1.15rem', color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--gold-primary)', marginRight: '1rem' }}>—</span> Por que força de vontade pode produzir mudança temporária sem necessariamente alterar o padrão que leva você de volta.
              </li>
              <li className="bullet-item" style={{ fontSize: '1.15rem', color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--gold-primary)', marginRight: '1rem' }}>—</span> Como reconhecer seu circuito de repetição enquanto ele acontece — e não apenas depois de repetir tudo novamente.
              </li>
              <li className="bullet-item" style={{ fontSize: '1.15rem', color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--gold-primary)', marginRight: '1rem' }}>—</span> O que pode estar por trás daquela estranha experiência de saber exatamente o que fazer e, mesmo assim, não conseguir sustentar a decisão.
              </li>
            </ul>
            
            <div style={{ padding: '2.5rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '4px', marginTop: '4rem', textAlign: 'center' }}>
              <p className="opportunity-text" style={{ fontWeight: 400, color: 'var(--text-white)' }}>
                Porque talvez não esteja faltando mais uma explicação. Talvez seja necessário olhar para o mecanismo que transforma uma previsão interna em comportamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
