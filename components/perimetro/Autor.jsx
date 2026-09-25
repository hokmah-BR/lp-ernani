import React from 'react';

export default function Autor() {
  return (
    <section id="autor" style={{ position: 'relative', background: 'var(--bg-dark)' }}>
      
      {/* Linha abstrata de profundidade */}
      <div style={{ position: 'absolute', top: 0, left: '10%', width: '1px', height: '100%', background: 'linear-gradient(to bottom, rgba(196,154,106,0), rgba(196,154,106,0.1))', zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '840px' }}>
        <span className="section-label reveal" style={{ color: 'var(--text-muted)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: 'var(--text-xs)' }}>Quem conduz o processo</span>
        
        <h2 className="section-title reveal delay-1 font-heading" style={{ color: 'var(--text-white)', fontSize: 'var(--text-4xl)', margin: 'var(--space-4) 0 var(--space-12)' }}>
          Ernani Felipe
        </h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-16)', alignItems: 'flex-start' }}>
          
          <div className="reveal delay-1" style={{ flex: '1 1 300px' }}>
            <img 
              src="/Ernani.webp" 
              alt="Ernani Felipe" 
              style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid rgba(196,154,106,0.2)' }} 
            />
          </div>

          <div className="reveal delay-2" style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
            
            <div style={{ paddingBottom: 'var(--space-8)', borderBottom: '1px solid var(--gold-border)' }}>
              <p className="opportunity-text mb-6" style={{ fontSize: 'var(--text-lg)', color: 'var(--text-white)', fontWeight: 300, lineHeight: 1.6 }}>
                Terapeuta com especialização em Neurociências e seis anos de prática clínica.
              </p>
              <p className="opportunity-text mb-6" style={{ fontSize: 'var(--text-lg)', color: 'var(--text-white)', fontWeight: 300, lineHeight: 1.6 }}>
                Autor de <strong style={{ color: 'var(--gold-primary)', fontWeight: 400, fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: 'var(--text-2xl)' }}>“Por que nos sabotamos”</strong> e criador da <strong style={{ color: 'var(--gold-primary)', fontWeight: 400, fontFamily: 'var(--font-playfair)', fontStyle: 'italic', fontSize: 'var(--text-2xl)' }}>TAR — Teoria da Autoimagem Referencial</strong>.
              </p>
            </div>

            <div style={{ borderLeft: '1px solid var(--gold-border)', paddingLeft: 'var(--space-8)' }}>
              <p className="opportunity-text" style={{ fontSize: 'var(--text-lg)', color: 'var(--text-muted)', fontWeight: 300, lineHeight: 1.7 }}>
                Seu trabalho nasceu de uma pergunta recorrente:
                <br/><br/>
                <strong className="font-heading" style={{ color: 'var(--text-white)', fontSize: 'var(--text-2xl)', display: 'block', lineHeight: 1.4, fontWeight: 400, fontStyle: 'italic' }}>
                  “Por que alguém sabe que tem um problema, sabe o que precisa fazer, mas, na hora de mudar, trava?”
                </strong>
                <br/>
                E quanto mais tenta sem conseguir, mais acumula frustração, culpa e a sensação de estar falhando consigo mesmo.
                <br/><br/>
                Foi investigando essa distância entre <strong style={{ color: 'var(--text-white)', fontWeight: 400 }}>saber e conseguir fazer</strong> que nasceu a TAR.
              </p>
            </div>

            <div style={{ marginTop: 'var(--space-4)' }}>
              <p className="opportunity-text" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Atendimento individual e online para brasileiros no Brasil e no exterior.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
