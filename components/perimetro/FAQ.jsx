'use client';
import React, { useState } from 'react';
import CtaButton from './CtaButton';

const faqData = [
  {
    question: "Mas eu já entendi os meus padrões.",
    answer: "Então talvez você não precise de mais explicações. A Mentoria Origem começa justamente na distância entre entender o padrão e conseguir agir diferente quando ele aparece."
  },
  {
    question: "Tenho medo de mudar e destruir tudo o que construí.",
    answer: "Mudar não significa jogar sua vida para o alto. O objetivo é ampliar sua capacidade de escolha para que você não precise continuar obedecendo automaticamente aos mesmos padrões."
  },
  {
    question: "Por que começar pela consulta de avaliação?",
    answer: "Porque o problema nem sempre está onde parece. O que parece falta de disciplina, coragem ou confiança pode ser apenas a parte visível de um mecanismo mais profundo. A consulta serve para investigar esse mecanismo dentro da sua história."
  },
  {
    question: "O que vou levar dessa consulta?",
    answer: "Mais clareza sobre o que está acontecendo, quais padrões podem estar envolvidos e como a TAR se aplica à sua realidade. A partir daí, você decide se a Mentoria Origem faz sentido como próximo passo."
  },
  {
    question: "Preciso estar em crise?",
    answer: "Não. Sua vida pode estar funcionando por fora enquanto, por dentro, permanece a sensação de estar vivendo aquém do que poderia."
  },
  {
    question: "E se eu nem souber qual é o problema?",
    answer: "Esse também pode ser o ponto de partida. Às vezes você só percebe que as mesmas situações continuam se repetindo. O primeiro passo é tornar visível o mecanismo por trás delas."
  },
  {
    question: "E se eu já tentei outras abordagens?",
    answer: "A proposta não é acrescentar mais uma explicação ao que você já sabe. É investigar por que, apesar de tudo o que você sabe, o padrão ainda consegue puxá-lo de volta."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ position: 'relative', background: 'var(--bg-dark)' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '840px' }}>
        <span className="section-label reveal" style={{ color: 'var(--text-muted)', letterSpacing: '4px', display: 'block', textTransform: 'uppercase', fontSize: 'var(--text-xs)', marginBottom: 'var(--space-6)' }}>O que você precisa saber</span>
        
        <div className="faq-list reveal delay-2" style={{ marginTop: 'var(--space-16)' }}>
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              style={{
                borderBottom: '1px solid var(--border-color)',
                overflow: 'hidden',
                transition: 'var(--transition)'
              }}
            >
              <button 
                onClick={() => toggleFaq(index)}
                style={{
                  width: '100%',
                  padding: 'var(--space-8) 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  color: openIndex === index ? 'var(--gold-primary)' : 'var(--text-white)',
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 400,
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'color 0.3s'
                }}
              >
                {item.question}
                <span style={{ color: 'var(--text-muted)', transform: openIndex === index ? 'rotate(45deg)' : 'none', transition: '0.3s', fontSize: '1.5rem', fontWeight: 300, paddingLeft: '1rem' }}>
                  +
                </span>
              </button>
              
              <div 
                style={{
                  padding: openIndex === index ? '0 0 var(--space-8) 0' : '0',
                  maxHeight: openIndex === index ? '500px' : '0',
                  opacity: openIndex === index ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  color: 'var(--text-muted)',
                  fontSize: 'var(--text-lg)',
                  lineHeight: 1.7,
                  fontWeight: 300
                }}
              >
                <p style={{ maxWidth: '90%' }}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'var(--space-16)', textAlign: 'center' }}>
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
