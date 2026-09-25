import React from 'react';
import CtaButton from './CtaButton';

export default function Metodo() {

  return (
    <section id="metodo" style={{ position: 'relative', background: 'var(--bg-dark)' }}>

      {/* Linha abstrata de profundidade */}
      <div style={{ position: 'absolute', top: 0, left: '10%', width: '1px', height: '100%', background: 'linear-gradient(to bottom, rgba(196,154,106,0.1), rgba(196,154,106,0))', zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '840px' }}>

        {/* Intro */}
        <span className="section-label reveal" style={{ color: 'var(--text-muted)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: 'var(--text-xs)', display: 'block', marginBottom: 'var(--space-6)' }}>
          A Metodologia
        </span>

        <h2 className="section-title reveal delay-1 font-heading" style={{ color: 'var(--text-white)', fontSize: 'var(--text-4xl)', lineHeight: 1.3, marginBottom: 'var(--space-8)' }}>
          Você não repete os mesmos erros porque quer.
        </h2>

        <p className="reveal delay-2 font-heading" style={{ color: 'var(--text-muted)', fontSize: 'var(--text-xl)', lineHeight: 1.6, fontWeight: 300, marginBottom: 'var(--space-12)' }}>
          Muitas vezes, você toma uma decisão acreditando estar fazendo a escolha certa e só depois percebe que errou novamente.
        </p>

        <p className="reveal delay-3" style={{ color: 'var(--text-white)', fontSize: 'var(--text-2xl)', fontStyle: 'italic', fontFamily: 'var(--font-playfair)', lineHeight: 1.4, marginBottom: 'var(--space-16)' }}>
          É justamente aí que entra a TAR — Teoria da Autoimagem Referencial.
        </p>

        <p className="reveal delay-3" style={{ color: 'var(--text-muted)', fontSize: 'var(--text-lg)', lineHeight: 1.7, fontWeight: 300, marginBottom: 'var(--space-20)' }}>
          A TAR investiga três coordenadas internas que influenciam a forma como você escolhe, age e reage:
        </p>

        {/* Coordenadas TAR — 3 colunas alinhadas à esquerda do container */}
        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-8)', marginBottom: 'var(--space-20)', position: 'relative' }}>
          {/* linha horizontal central */}
          <div style={{ position: 'absolute', top: '18px', left: 0, right: 0, height: '1px', background: 'var(--gold-border)', opacity: 0.5 }}></div>

          {[
            { title: 'POSSO', subtitle: 'Isso é permitido para mim?' },
            { title: 'CONSIGO', subtitle: 'Eu dou conta?' },
            { title: 'MEREÇO', subtitle: 'Se der certo, posso sustentar isso?' }
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', paddingTop: 'var(--space-10)' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-primary)', marginBottom: 'var(--space-4)', position: 'absolute', top: '15px' }}></div>
              <div className="font-heading" style={{ color: 'var(--text-white)', fontSize: 'var(--text-2xl)', letterSpacing: '2px', marginBottom: 'var(--space-2)' }}>{item.title}</div>
              <div style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: 'var(--text-base)', fontWeight: 300, lineHeight: 1.5 }}>"{item.subtitle}"</div>
            </div>
          ))}
        </div>

        {/* Texto de transição */}
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', marginBottom: 'var(--space-16)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-lg)', lineHeight: 1.7, fontWeight: 300 }}>
            Racionalmente, você pode responder "sim".
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-lg)', lineHeight: 1.7, fontWeight: 300 }}>
            Mas suas escolhas também são influenciadas por referências emocionais construídas ao longo da vida.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-lg)', lineHeight: 1.7, fontWeight: 300 }}>
            Aquilo que um dia ajudou você a sobreviver, pertencer ou manter vínculos pode continuar funcionando como uma regra, mesmo quando o contexto já mudou.
          </p>
        </div>

        {/* O Circuito do Padrão */}
        <div className="reveal" style={{ width: '100%', marginBottom: 'var(--space-20)', display: 'flex', justifyContent: 'center' }}>
          <img 
            src="/circuito.webp" 
            alt="O circuito do padrão da TAR" 
            style={{ width: '100%', maxWidth: '800px', height: 'auto' }} 
          />
        </div>

        {/* Conclusão */}
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', marginBottom: 'var(--space-16)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-lg)', lineHeight: 1.7, fontWeight: 300 }}>
            <strong style={{ color: 'var(--text-white)', fontWeight: 400 }}>E é assim que uma referência do passado pode continuar influenciando decisões que você toma hoje.</strong>
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-lg)', lineHeight: 1.7, fontWeight: 300 }}>
            A TAR trabalha justamente nesse ponto: <strong style={{ color: 'var(--gold-primary)', fontWeight: 400 }}>tornar visível aquilo que influencia suas escolhas sem que você perceba.</strong>
          </p>
        </div>

        <div>
          <CtaButton />
        </div>

      </div>
    </section>
  );
}
