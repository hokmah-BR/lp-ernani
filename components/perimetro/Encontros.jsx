import React from 'react';
import CtaButton from './CtaButton';

export default function Encontros() {

  const encontros = [
    { letter: 'O', title: 'ORIGEM', desc: 'Encontrar o ponto de partida.', text: 'Abrir a caixa-preta para entender onde o padrão aparece, como ele funciona e por que continua se repetindo, mesmo quando você tenta fazer diferente.' },
    { letter: 'R', title: 'RAIZ', desc: 'Chegar ao que nutre o padrão.', text: 'Acessar as referências construídas ao longo da vida que ainda influenciam as escolhas que você faz hoje.' },
    { letter: 'I', title: 'IMAGEM', desc: 'Mudar as coordenadas de como você se enxerga.', text: 'Trabalhar sua percepção sobre o que pode, consegue e merece, abrindo espaço para possibilidades que antes pareciam não caber na sua vida.' },
    { letter: 'G', title: 'GOVERNO', desc: 'Transformar compreensão em escolha.', text: 'Levar o que mudou por dentro para a vida real: decisões, posicionamentos e movimentos alinhados à direção que você quer seguir.' },
    { letter: 'E', title: 'EU', desc: 'Retomar o lugar de quem conduz.', text: 'Separar o personagem que você aprendeu a desempenhar de quem você é hoje, recuperando espaço para escolher como realmente quer viver.' },
    { letter: 'M', title: 'MOVIMENTO', desc: 'Seguir sem voltar ao mesmo lugar.', text: 'Organizar o que mudou, reconhecer o que ainda merece atenção e continuar avançando sem depender das referências que sustentavam o padrão antigo.' },
  ];

  return (
    <section id="encontros" style={{ position: 'relative', background: 'var(--bg-dark)' }}>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '840px' }}>

        <span className="section-label reveal" style={{ color: 'var(--text-muted)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: 'var(--text-xs)', display: 'block', marginBottom: 'var(--space-6)' }}>
          Como funciona a Mentoria Origem
        </span>

        <h2 className="section-title reveal delay-1 font-heading" style={{ color: 'var(--text-white)', fontSize: 'var(--text-4xl)', lineHeight: 1.3, marginBottom: 'var(--space-20)' }}>
          Seis encontros. Um caminho da compreensão ao movimento.
        </h2>

        {/* Timeline — linha vertical à esquerda */}
        <div style={{ position: 'relative' }}>

          <div style={{ position: 'absolute', left: '23px', top: '12px', bottom: '12px', width: '1px', background: 'linear-gradient(to bottom, rgba(196,154,106,0.15), rgba(196,154,106,0.4), rgba(196,154,106,0.05))', zIndex: 0 }}></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
            {encontros.map((item, index) => (
              <div key={item.letter} className={`reveal delay-${(index % 3) + 1}`} style={{ display: 'flex', gap: 'var(--space-8)', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>

                {/* Letra âncora (fica sobre a linha) */}
                <div style={{
                  color: 'var(--gold-primary)',
                  fontSize: 'var(--text-3xl)',
                  fontFamily: 'var(--font-playfair)',
                  fontStyle: 'italic',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--bg-dark)',
                  flexShrink: 0,
                  lineHeight: 1,
                }}>
                  {item.letter}
                </div>

                {/* Conteúdo */}
                <div style={{ paddingTop: '6px' }}>
                  <div style={{ color: 'var(--gold-primary)', fontSize: 'var(--text-xs)', letterSpacing: '3px', fontWeight: 500, marginBottom: 'var(--space-2)', textTransform: 'uppercase' }}>
                    0{index + 1} — {item.title}
                  </div>
                  <h4 className="font-heading" style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-3)', color: 'var(--text-white)', lineHeight: 1.3 }}>
                    {item.desc}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: 'var(--text-lg)', fontWeight: 300 }}>
                    {item.text}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Conclusão — alinhada à mesma esquerda */}
        <div className="reveal" style={{ marginTop: 'var(--space-20)', paddingTop: 'var(--space-12)', borderTop: '1px solid var(--gold-border)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <p className="font-heading" style={{ color: 'var(--gold-primary)', fontSize: 'var(--text-2xl)', fontStyle: 'italic' }}>
            ORIGEM não são seis conversas isoladas.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-lg)', lineHeight: 1.7, fontWeight: 300 }}>
            É um caminho para entender de onde você veio, mudar o que ainda te prende e escolher para onde quer seguir.
          </p>
        </div>

        <div style={{ marginTop: 'var(--space-12)' }}>
          <CtaButton />
        </div>

      </div>
    </section>
  );
}
