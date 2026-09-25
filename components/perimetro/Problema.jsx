import React from 'react';
import CtaButton from './CtaButton';

export default function Problema() {

  return (
    <section id="problema" style={{ position: 'relative', background: 'var(--bg-dark)' }}>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '840px' }}>

        <span className="section-label reveal" style={{ color: 'var(--text-muted)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: 'var(--text-xs)', display: 'block', marginBottom: 'var(--space-6)' }}>
          A Distância Entre Saber e Fazer
        </span>

        <div className="reveal delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)', marginBottom: 'var(--space-16)' }}>
          {[
            { l1: 'Você sabe', l2: 'que precisa ter', l3: 'aquela conversa.' },
            { l1: 'Você sabe', l2: 'que precisa tomar', l3: 'aquela decisão.' },
            { l1: 'Você sabe', l2: 'que determinado', l3: 'comportamento', l4: 'está cobrando', l5: 'um preço.' }
          ].map((item, i) => (
            <div key={i} style={{ 
              padding: 'var(--space-8) var(--space-4)', 
              background: '#FDFCF9', 
              borderRadius: '4px', 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
            }}>
              
              {/* Linha Topo */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
                <div style={{ width: '1px', height: '40px', background: 'var(--gold-primary)', opacity: 0.6 }}></div>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold-primary)', marginTop: '2px' }}></div>
              </div>

              {/* Texto */}
              <div style={{ textAlign: 'center', color: '#1A1A1A', fontFamily: 'var(--font-playfair)', fontSize: 'var(--text-xl)', lineHeight: 1.3, fontWeight: 400 }}>
                <span style={{ display: 'block' }}>{item.l1}</span>
                <span style={{ display: 'block' }}>{item.l2}</span>
                {item.l4 ? (
                  <>
                    <span style={{ display: 'block' }}>{item.l3}</span>
                    <span style={{ display: 'block', color: 'var(--gold-primary)', fontStyle: 'italic', marginTop: '4px' }}>{item.l4}</span>
                    <span style={{ display: 'block', color: 'var(--gold-primary)', fontStyle: 'italic' }}>{item.l5}</span>
                  </>
                ) : (
                  <span style={{ display: 'block', color: 'var(--gold-primary)', fontStyle: 'italic', marginTop: '4px' }}>{item.l3}</span>
                )}
              </div>

              {/* Linha Base */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 'var(--space-6)' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold-primary)', marginBottom: '2px' }}></div>
                <div style={{ width: '1px', height: '40px', background: 'var(--gold-primary)', opacity: 0.6 }}></div>
              </div>

            </div>
          ))}
        </div>

        <div className="reveal delay-2" style={{ borderLeft: '1px solid var(--gold-border)', paddingLeft: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>

          <p className="font-heading" style={{ color: 'var(--gold-primary)', fontSize: 'var(--text-3xl)', fontStyle: 'italic' }}>
            Mesmo assim, adia.
          </p>

          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-lg)', lineHeight: 1.7, fontWeight: 300 }}>
            Porque compreender racionalmente um padrão não significa conseguir sair dele.
          </p>

          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-lg)', lineHeight: 1.7, fontWeight: 300 }}>
            Na Mentoria Origem, investigamos o que acontece entre a intenção e a ação: as regras internas que fazem uma decisão parecer óbvia na cabeça e quase impossível na vida real.
          </p>

          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-lg)', lineHeight: 1.7, fontWeight: 300 }}>
            Enquanto essas regras permanecerem intactas, a mudança tende a ter prazo de validade.
          </p>

        </div>

        <div style={{ padding: 'var(--space-8) 0', borderTop: '1px solid var(--gold-border)', borderBottom: '1px solid var(--gold-border)', marginTop: 'var(--space-16)' }}>
          <p className="font-heading" style={{ fontSize: 'var(--text-2xl)', color: 'var(--text-white)' }}>
            O trabalho começa justamente onde a <span style={{ fontStyle: 'italic', color: 'var(--gold-primary)' }}>explicação termina.</span>
          </p>
        </div>

        <div style={{ marginTop: 'var(--space-12)' }}>
          <CtaButton />
        </div>

      </div>
    </section>
  );
}
