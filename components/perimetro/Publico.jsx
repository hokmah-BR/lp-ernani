import React from 'react';
import CtaButton from './CtaButton';

export default function Publico() {

  return (
    <section id="publico" style={{ position: 'relative', background: 'var(--bg-dark)' }}>
      
      {/* Linha abstrata lateral indicando profundidade (coordendas) */}
      <div style={{ position: 'absolute', top: 0, left: '10%', width: '1px', height: '100%', background: 'linear-gradient(to bottom, rgba(196,154,106,0.1), rgba(196,154,106,0))', zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '840px' }}>
        
        <span className="section-label reveal" style={{ color: 'var(--text-muted)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: 'var(--text-xs)', display: 'block', marginBottom: 'var(--space-12)' }}>Para quem é?</span>
        
        <div className="reveal delay-2" style={{ paddingLeft: 'var(--space-8)', borderLeft: '1px solid var(--gold-border)' }}>
          
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <li className="bullet-item" style={{ color: 'var(--text-white)', fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 1.6 }}>
              — Pra você que trabalha, corre, resolve… mas termina o dia com a sensação de não ter feito nada.
            </li>
            <li className="bullet-item" style={{ color: 'var(--text-white)', fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 1.6 }}>
              — Pra você que começa com certeza e, no meio do caminho, desiste.
            </li>
            <li className="bullet-item" style={{ color: 'var(--text-white)', fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 1.6 }}>
              — Pra você que está diante de uma oportunidade, mas encontra um bom motivo para esperar mais um pouco.
            </li>
            <li className="bullet-item" style={{ color: 'var(--text-white)', fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 1.6 }}>
              — Pra você que já mudou a estratégia, a rotina, o método e continua esbarrando nos mesmos problemas.
            </li>
            <li className="bullet-item" style={{ color: 'var(--text-white)', fontSize: 'var(--text-lg)', fontWeight: 300, lineHeight: 1.6 }}>
              — Pra você que olha para trás e percebe que algumas histórias só mudaram de cenário.
            </li>
          </ul>

          <p style={{ marginTop: 'var(--space-12)', fontSize: 'var(--text-xl)', color: 'var(--gold-primary)', lineHeight: 1.6, fontWeight: 400, fontStyle: 'italic', fontFamily: 'var(--font-playfair)' }}>
            Até pra quem já chegou em algum lugar, conquistou o que queria conquistar, mas parece que nada daquilo faz sentido.
          </p>

          <div style={{ marginTop: 'var(--space-12)' }}>
            <CtaButton />
          </div>
        </div>
      </div>
    </section>
  );
}
