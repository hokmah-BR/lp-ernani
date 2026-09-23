'use client';
import React from 'react';
import { usePopup } from '../../app/components/PopupContext';

export default function Encontros() {
  const { openPopup } = usePopup();

  const encontros = [
    { letter: 'O', title: 'ORIGEM DE TUDO', desc: 'Encontrar o ponto de partida.', text: 'Tudo começa tornando claro o que está acontecendo: onde o padrão aparece, como ele se manifesta e o que mantém a repetição funcionando. É o momento de abrir a caixa-preta e compreender por que, mesmo sabendo o que precisava mudar, você continuava sem avançar.' },
    { letter: 'R', title: 'RAIZ', desc: 'Chegar às referências que sustentam o padrão.', text: 'O trabalho avança para aquilo que foi aprendido ao longo da vida e continua influenciando suas escolhas no presente. Aqui, chegamos à estrutura emocional que deu origem ao padrão e que ainda participa das decisões que você toma hoje.' },
    { letter: 'I', title: 'IMAGEM', desc: 'Mudar as coordenadas de como você se percebe em relação ao que pode, consegue e merece.', text: 'A autoimagem passa a ser trabalhada diretamente, ampliando aquilo que você consegue reconhecer como possível para si. É onde novas coordenadas internas começam a ser construídas, abrindo espaço para escolhas que antes pareciam incompatíveis com quem você acreditava ser.' },
    { letter: 'G', title: 'GOVERNO', desc: 'Transformar compreensão em escolha.', text: 'O que foi descoberto começa a ganhar expressão na vida concreta: decisões, posicionamentos e movimentos coerentes com a direção que você deseja seguir. É o momento de colocar as mudanças internas em prática e ajustar o que ainda precisa ser reorganizado.' },
    { letter: 'E', title: 'O EU', desc: 'Retomar o lugar de quem conduz.', text: 'Você aprofunda a distinção entre o personagem que aprendeu a desempenhar e o Eu que pode escolher como quer viver. A partir dessa compreensão, os antigos mecanismos deixam de conduzir suas escolhas automaticamente e você recupera espaço para decidir de acordo com aquilo que realmente quer viver.' },
    { letter: 'M', title: 'MOVIMENTO', desc: 'Levar o trabalho para além da mentoria.', text: 'O ciclo se fecha organizando o que foi transformado, o que ainda merece atenção e como continuar avançando sem voltar a depender das referências que mantinham o padrão antigo.' },
  ];

  return (
    <section id="encontros" style={{ position: 'relative', background: 'var(--bg-dark)', padding: '6rem 0', borderTop: '1px solid var(--border-color)' }}>
      
      {/* Continuing diagram line */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '1px', height: '100%', background: 'var(--gold-primary)', opacity: 0.15, zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label reveal" style={{ color: 'var(--text-muted)', letterSpacing: '3px' }}>COMO FUNCIONA A MENTORIA ORIGEM</span>
          <h2 className="section-title reveal delay-1" style={{ color: 'var(--text-white)', fontWeight: 300, fontSize: 'clamp(2rem, 3vw, 2.5rem)', maxWidth: '900px', margin: '0 auto 2rem' }}>
            Seis encontros para ir da compreensão do padrão à liberdade de agir diferente.
          </h2>
          <div className="reveal delay-2" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.6 }}>
            <p className="mb-4">
              A maioria das pessoas tenta mudar começando pelo comportamento. A Mentoria Origem percorre o caminho inverso: primeiro entendemos o mecanismo, depois acessamos as referências que o sustentam e, a partir daí, criamos novas possibilidades de escolha.
            </p>
            <p>
              Por isso, os seis encontros seguem uma sequência. Cada etapa cumpre uma função específica dentro do processo, e todas se conectam para que o trabalho não termine em mais uma compreensão sobre você mesmo.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '4rem auto 0' }}>
          {encontros.map((item, index) => (
            <div key={item.letter} className={`reveal delay-${(index % 3) + 1}`} style={{ 
              display: 'flex', 
              gap: '2rem', 
              background: 'var(--card-bg)', 
              padding: '2.5rem', 
              border: '1px solid var(--border-color)',
              borderRadius: '4px',
              alignItems: 'flex-start'
            }}>
              <div style={{ 
                color: 'var(--gold-primary)', 
                fontSize: '2.5rem', 
                fontWeight: 600, 
                lineHeight: 1,
                fontFamily: 'var(--font-outfit)',
                minWidth: '50px'
              }}>
                {item.letter}
              </div>
              <div>
                <div style={{ color: 'var(--gold-primary)', fontSize: '0.9rem', letterSpacing: '2px', fontWeight: 600, marginBottom: '0.5rem' }}>
                  0{index + 1} — {item.title}
                </div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-white)', fontWeight: 400, letterSpacing: '0.5px' }}>
                  {item.desc}
                </h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '1.05rem' }}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ maxWidth: '800px', margin: '4rem auto 0', color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.7, textAlign: 'center' }}>
          <p className="mb-4">Os seis encontros formam uma única jornada.</p>
          <p className="mb-4">Uma sequência construída para acompanhar o caminho inteiro: compreender, acessar, atualizar, escolher e seguir.</p>
          <p className="mb-4">O que começa como uma dificuldade que você não conseguia explicar passa a ter um mecanismo compreensível, um trabalho direcionado e uma nova possibilidade de movimento.</p>
          <p style={{ color: 'var(--text-white)', fontWeight: 500 }}>É isso que a Mentoria Origem se propõe a fazer.</p>
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
