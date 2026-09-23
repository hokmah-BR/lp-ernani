'use client';
import React, { useState } from 'react';
import { usePopup } from '../../app/components/PopupContext';

const faqData = [
  {
    question: "Mas eu já entendi os meus padrões.",
    answer: "Ótimo. Então provavelmente você não precisa de mais explicações sobre eles. A Mentoria Origem parte justamente da diferença entre compreender um padrão e conseguir agir de outra maneira quando a situação acontece na vida real."
  },
  {
    question: "Tenho medo de mudar e destruir tudo o que construí.",
    answer: "Mudar um padrão não significa abandonar sua carreira, seu relacionamento ou a vida que você construiu até aqui. O objetivo do processo não é empurrar você para decisões radicais, mas ampliar sua capacidade de escolha para que suas decisões sejam mais conscientes e coerentes com aquilo que realmente deseja viver."
  },
  {
    question: "Por que a consulta de avaliação é uma etapa tão importante?",
    answer: "Porque o problema raramente está exatamente onde parece estar. Você pode acreditar que precisa de mais disciplina, coragem, confiança ou simplesmente tomar uma decisão que vem adiando. Mas essas dificuldades podem ser apenas a parte visível de um mecanismo que continua organizando suas escolhas. A consulta é o primeiro momento para investigar esse mecanismo com profundidade, a partir da sua história e do que está acontecendo hoje."
  },
  {
    question: "O que vou levar da consulta de avaliação?",
    answer: "Uma compreensão mais precisa sobre o que está acontecendo e sobre os padrões que podem estar participando disso. Ao longo da conversa, você começa a enxergar sua situação a partir da Teoria da Autoimagem Referencial (TAR) e a compreender como esse modelo se aplica à sua realidade. A partir dessa clareza, você poderá decidir com mais segurança se a Mentoria Origem é o próximo passo para você."
  },
  {
    question: "Preciso estar em crise para participar?",
    answer: "Não. Você pode estar trabalhando, cuidando da família, cumprindo suas responsabilidades e, ainda assim, sentir que existe uma distância entre a vida que construiu e a vida que realmente gostaria de viver. A Mentoria Origem também foi pensada para esse momento: quando, por fora, tudo parece funcionar, mas por dentro permanece a sensação de estar vivendo aquém do que poderia."
  },
  {
    question: "E se eu não souber exatamente qual é o meu problema?",
    answer: "Tudo bem. Talvez você perceba apenas que continua repetindo situações parecidas, tomando decisões que não entende ou convivendo com uma insatisfação que não consegue explicar. Parte do trabalho começa justamente trazendo clareza para aquilo que hoje ainda parece confuso."
  },
  {
    question: "E se eu já tentei outras abordagens e nada funcionou?",
    answer: "Talvez você já tenha estudado comportamento, feito cursos, lido livros ou passado por diferentes processos e, ainda assim, perceba que continua voltando a determinados padrões. A proposta da Mentoria Origem não é acrescentar mais uma explicação àquilo que você já sabe. É investigar o mecanismo que mantém o padrão funcionando e trabalhar diretamente sobre ele."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const { openPopup } = usePopup();

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ position: 'relative', background: 'var(--bg-dark)', padding: '6rem 0' }}>
      
      {/* Continuing diagram line */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '1px', height: '100%', background: 'var(--gold-primary)', opacity: 0.15, zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
        <span className="section-label reveal" style={{ color: 'var(--text-muted)', letterSpacing: '3px', textAlign: 'center', display: 'block' }}>FAQ</span>
        
        <div className="faq-list reveal delay-2" style={{ marginTop: '3rem' }}>
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                marginBottom: '1rem',
                borderRadius: '4px',
                overflow: 'hidden',
                transition: 'var(--transition)'
              }}
            >
              <button 
                onClick={() => toggleFaq(index)}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-white)',
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '1.15rem',
                  fontWeight: 400,
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                {item.question}
                <span style={{ color: 'var(--gold-primary)', transform: openIndex === index ? 'rotate(45deg)' : 'none', transition: '0.3s', fontSize: '1.5rem', fontWeight: 300 }}>
                  +
                </span>
              </button>
              
              <div 
                style={{
                  padding: openIndex === index ? '0 1.5rem 1.5rem' : '0 1.5rem',
                  maxHeight: openIndex === index ? '500px' : '0',
                  opacity: openIndex === index ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  color: 'var(--text-muted)',
                  fontSize: '1.1rem',
                  lineHeight: 1.6
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
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
