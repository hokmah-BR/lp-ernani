'use client';
import React from 'react';
import { usePopup } from '../../app/components/PopupContext';

export default function Metodo() {
  const { openPopup } = usePopup();

  return (
    <section id="metodo" style={{ position: 'relative', background: 'var(--bg-dark)', padding: '6rem 0', borderTop: '1px solid var(--border-color)' }}>
      
      {/* Continuing diagram line */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '1px', height: '100%', background: 'var(--gold-primary)', opacity: 0.15, zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label reveal" style={{ color: 'var(--text-muted)', letterSpacing: '3px' }}>A METODOLOGIA</span>
          <h2 className="section-title reveal delay-1" style={{ color: 'var(--text-white)', fontWeight: 300, fontSize: 'clamp(2rem, 3vw, 2.5rem)', maxWidth: '900px', margin: '0 auto 3rem' }}>
            Existe uma pergunta que orienta todo este trabalho:
          </h2>
          <p className="location-text reveal delay-2" style={{ maxWidth: '800px', margin: '0 auto 2rem', color: 'var(--text-white)', fontSize: '1.25rem', fontStyle: 'italic' }}>
            "O que faz uma pessoa continuar vivendo dentro de certos limites que ela mesma reconhece não querer estar?"
          </p>
        </div>

        <div className="reveal delay-3" style={{ maxWidth: '800px', margin: '0 auto 4rem', color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p>A <strong>Teoria da Autoimagem Referencial (TAR)</strong> surge como uma tentativa de responder essa pergunta.</p>
          <p>Ela parte de uma observação simples. Existem determinadas coordenadas internas relacionadas ao que você acredita que pode, consegue e merece.</p>
          <p>O ponto importante é que essas coordenadas não operam principalmente no nível racional. Foram construídas por aprendizados emocionais ao longo da vida e continuam influenciando suas escolhas, mesmo quando sua mente consciente pensa diferente.</p>
          
          <ul style={{ listStyle: 'none', padding: '1.5rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', borderLeft: '2px solid var(--gold-primary)', paddingLeft: '1.5rem', margin: '1rem 0' }}>
            <li><strong style={{ color: 'var(--gold-primary)' }}>Posso é autorização:</strong> isso é certo para mim?</li>
            <li><strong style={{ color: 'var(--gold-primary)' }}>Consigo é capacidade:</strong> irei dar conta disso?</li>
            <li><strong style={{ color: 'var(--gold-primary)' }}>Mereço é legitimidade:</strong> se der certo, tenho direito de ficar com isso?</li>
          </ul>

          <p>Na superfície, muitas pessoas respondem "sim" para essas três perguntas. O problema é que o comportamento não é determinado apenas pelas respostas conscientes que damos, mas pelas referências emocionais implícitas que carregamos. É por isso que alguém pode saber exatamente o que precisa fazer e, ainda assim, continuar repetindo o mesmo padrão.</p>
          
          <p>Ninguém escolheu essas conclusões. Elas se formaram cedo, em situações concretas, e serviram para alguma coisa na época: sobreviver, pertencer, manter vínculo. Foram soluções competentes para um contexto que não existe mais, mas continuam operando como referências para definir o que parece possível, seguro ou compatível com quem você acredita ser.</p>
          
          <p>Essas coordenadas influenciam aquilo que parece possível. O que parece possível influencia o que você percebe. O que você percebe influencia suas escolhas. Suas escolhas produzem resultados. E os resultados acabam reforçando a visão inicial que você tinha sobre si mesmo.</p>
        </div>
        
        <h3 className="text-center reveal" style={{ fontSize: '1.5rem', fontWeight: 300, color: 'var(--text-white)', marginBottom: '3rem', letterSpacing: '1px' }}>O circuito que mantém um padrão funcionando</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '700px', margin: '0 auto', alignItems: 'center' }}>
          {[
            { label: 'COORDENADA', text: '"Posso, consigo e mereço?"' },
            { label: 'EXPECTATIVA', text: '"Isso parece possível para alguém como eu?"' },
            { label: 'PERCEPÇÃO', text: 'Você passa a notar mais riscos, obstáculos e motivos para recuar.' },
            { label: 'AÇÃO', text: 'Hesita, adia, evita ou se compromete menos do que gostaria.' },
            { label: 'RESULTADO', text: 'A mudança não acontece como poderia ou dura menos do que você esperava.' },
            { label: 'CONFIRMAÇÃO', text: '"Está vendo? Eu sabia que não era para mim, que não daria conta, que não era possível."' },
          ].map((item, i, arr) => (
            <React.Fragment key={item.label}>
              <div className={`reveal delay-${(i % 3) + 1}`} style={{ width: '100%', background: 'var(--card-bg)', padding: '2rem', border: '1px solid var(--border-color)', textAlign: 'center', borderRadius: '4px' }}>
                <div style={{ color: 'var(--gold-primary)', fontSize: '0.9rem', letterSpacing: '2px', fontWeight: 600, marginBottom: '0.8rem' }}>{item.label}</div>
                <div style={{ color: 'var(--text-white)', fontSize: '1.1rem', fontStyle: item.label === 'COORDENADA' || item.label === 'EXPECTATIVA' || item.label === 'CONFIRMAÇÃO' ? 'italic' : 'normal' }}>{item.text}</div>
              </div>
              {i < arr.length - 1 && (
                <div style={{ color: 'var(--gold-primary)', fontSize: '1.5rem' }}>↓</div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="reveal" style={{ maxWidth: '800px', margin: '4rem auto 0', color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.7, textAlign: 'center' }}>
          <p className="mb-4">Vinte anos de voltas nesse circuito produzem uma estrutura densa, com evidências suficientes para que a própria vida pareça confirmar a imagem que você construiu sobre si mesmo.</p>
          <p className="mb-4">Por isso, compreender o padrão é apenas o começo. Uma nova explicação pode ampliar sua consciência sobre o que acontece, mas dificilmente altera, sozinha, uma referência construída por anos de experiência.</p>
          <p style={{ color: 'var(--text-white)', fontWeight: 500 }}>A mudança começa quando novas experiências colocam essas referências à prova.</p>
          <p className="mt-4">É justamente sobre esse processo que os seis encontros foram estruturados.</p>
        </div>

        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <button onClick={openPopup} className="btn-cta" style={{ maxWidth: '400px' }}>
            QUERO AGENDAR MINHA CONSULTA
          </button>
        </div>
      </div>
    </section>
  );
}
