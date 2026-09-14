import React from 'react';

export default function Metodo() {
  return (
    <section id="metodo" style={{ position: 'relative', background: 'var(--bg-dark)', padding: '6rem 0', borderTop: '1px solid var(--border-color)' }}>
      
      {/* Continuing diagram line */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '1px', height: '100%', background: 'var(--gold-primary)', opacity: 0.15, zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <span className="section-label reveal" style={{ color: 'var(--text-muted)', letterSpacing: '3px' }}>A METODOLOGIA</span>
          <h2 className="section-title reveal delay-1" style={{ color: 'var(--text-white)', fontWeight: 300, fontSize: 'clamp(2rem, 3vw, 2.5rem)', maxWidth: '900px', margin: '0 auto 3rem' }}>
            Antes de acreditar na TAR, observe o seu próprio mecanismo.
          </h2>
          <p className="location-text reveal delay-2" style={{ maxWidth: '800px', margin: '0 auto 3rem', color: 'var(--text-muted)' }}>
            A TAR parte de um modelo simples. Existem determinadas coordenadas internas relacionadas ao que você percebe que <strong>pode, consegue e merece</strong>. Essas coordenadas influenciam as previsões que você faz diante de uma situação. A previsão altera aquilo que você percebe. A percepção influencia sua ação. A ação produz um resultado. E o resultado pode acabar confirmando justamente a coordenada inicial.
          </p>
          
          <div className="reveal delay-3" style={{ padding: '2rem 3rem', background: 'transparent', borderTop: '1px solid var(--gold-primary)', borderBottom: '1px solid var(--gold-primary)', display: 'inline-block', color: 'var(--gold-primary)', fontWeight: 300, letterSpacing: '3px', fontSize: '1rem', textTransform: 'uppercase' }}>
            Coordenada → Previsão → Percepção → Ação → Resultado → Confirmação
          </div>
        </div>

        <h3 className="text-center reveal" style={{ fontSize: '1.5rem', fontWeight: 300, color: 'var(--text-muted)', marginBottom: '4rem', letterSpacing: '2px', textTransform: 'uppercase' }}>O processo acontece em 5 movimentos</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '800px', margin: '0 auto' }}>
          {[
            { num: '1', title: 'Revelar o Perímetro', text: 'Identificar o limite invisível onde a mudança costuma parar. Você começa a perceber não apenas que recua, mas onde o recuo acontece.' },
            { num: '2', title: 'Localizar as Coordenadas', text: 'Mapear as referências internas ligadas ao: Posso. Consigo. Mereço. O objetivo é identificar quais premissas estão participando da decisão antes mesmo da sua análise consciente.' },
            { num: '3', title: 'Enxergar o Circuito', text: 'Observar como uma coordenada produz determinada previsão e como essa previsão influencia percepção, comportamento e resultado.' },
            { num: '4', title: 'Desautorizar a Previsão', text: 'O medo, desconforto ou impulso de recuar não precisam desaparecer para que uma decisão diferente exista. O objetivo é deixar de tratá-los automaticamente como uma ordem.' },
            { num: '5', title: 'Ampliar o Território', text: 'Novas ações produzem novas experiências. O objetivo final não é trocar uma prisão por outra. É ampliar o território no qual você consegue escolher.' },
          ].map((item, i) => (
            <div key={item.num} className={`reveal delay-${(i % 3) + 1}`} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '2rem', alignItems: 'start', background: 'var(--card-bg)', padding: '2.5rem', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '60px', height: '60px', border: '1px solid var(--gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-primary)', fontSize: '1.5rem', fontWeight: 300 }}>
                0{item.num}
              </div>
              <div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-white)', fontWeight: 400, letterSpacing: '1px' }}>{item.title}</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
