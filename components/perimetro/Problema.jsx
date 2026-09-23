'use client';
import React from 'react';
import { usePopup } from '../../app/components/PopupContext';

export default function Problema() {
  const { openPopup } = usePopup();

  return (
    <section id="problema" style={{ position: 'relative', background: 'var(--bg-dark)', padding: '6rem 0' }}>
      
      {/* Continuing diagram line */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '1px', height: '100%', background: 'var(--gold-primary)', opacity: 0.15, zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-label reveal" style={{ color: 'var(--text-muted)', letterSpacing: '3px' }}>A DISTÂNCIA ENTRE SABER, AGIR E MUDAR</span>
        <h2 className="section-title reveal delay-1" style={{ color: 'var(--text-white)', fontWeight: 300, fontSize: 'clamp(2rem, 3vw, 2.5rem)', maxWidth: '900px', margin: '0 auto 4rem', lineHeight: 1.4 }}>
          Existe uma diferença entre compreender um padrão e conseguir sair dele.
        </h2>
        
        <div className="reveal delay-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="opportunity-content">
            
            <div style={{ textAlign: 'left', margin: '0 auto', maxWidth: '700px', display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.7 }}>
              <p>Muitas pessoas chegam até aqui acreditando que lhes falta disciplina, coragem ou falta de dedicação.</p>
              
              <p>Porém, na maioria das vezes, o problema é outro.</p>
              
              <p>Você sabe que determinada conversa precisa acontecer, mas adia. Sabe que uma decisão precisa ser tomada, mas continua esperando o momento certo. Percebe que certos comportamentos estão cobrando um preço alto, mas acaba repetindo exatamente aquilo que prometeu não repetir.</p>

              <p className="mt-4" style={{ color: 'var(--gold-primary)', fontWeight: 500 }}>Ao longo deste processo:</p>

              <p>Vamos investigar o por que algumas decisões parecem simples no plano racional e quase impossíveis quando chega a hora de executá-las.</p>
              
              <p>Vamos compreender o por que determinadas mudanças acontecem por um tempo e depois desaparecem, como se algo sempre puxasse você de volta para o mesmo lugar.</p>
              
              <p>Vamos identificar as regras internas que muitas vezes passam a decidir antes mesmo que você perceba, ou que te convence a recuar diante da própria intenção.</p>
              
              <p>E claro, vamos atuar diretamente nestas coordenadas que travam o seu avanço. Afinal, se a regra interna que mantém o padrão permanecer inalterada, toda tentativa de transformação terá prazo de validade.</p>
            </div>
            
            <div style={{ padding: '2.5rem', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '4px', marginTop: '4rem', textAlign: 'center' }}>
              <p className="opportunity-text" style={{ fontWeight: 400, color: 'var(--text-white)' }}>
                O problema nunca foi você, mas os limites que você carrega inconscientemente.
              </p>
            </div>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <button onClick={openPopup} className="btn-cta" style={{ maxWidth: '400px' }}>
                QUERO AGENDAR MINHA CONSULTA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
