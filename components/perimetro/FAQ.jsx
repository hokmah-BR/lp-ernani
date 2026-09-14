'use client';
import React, { useState } from 'react';

const faqData = [
  {
    question: "“Já tentei tanta coisa que talvez o problema seja simplesmente quem eu sou.”",
    answer: "Essa talvez seja a objeção mais importante de todas. Mas repetição e identidade não são necessariamente a mesma coisa. Se seu comportamento muda de acordo com contexto, pessoa ou situação, já existe uma pista importante. O Perímetro parte justamente da possibilidade de investigar essas regularidades como padrões — em vez de começar pela sentença de que elas definem quem você é."
  },
  {
    question: "“Mas eu já entendi meus padrões.”",
    answer: "Ótimo. Então provavelmente você não precisa de mais cinquenta explicações sobre eles. Dentro do modelo da TAR, compreensão intelectual e mudança comportamental são tratadas como problemas diferentes. O Ciclo concentra o trabalho justamente nessa passagem entre aquilo que você compreende e aquilo que acontece quando chega o momento real de escolher."
  },
  {
    question: "“Tenho medo de mudar e destruir tudo que construí.”",
    answer: "Romper um padrão não significa romper sua vida. O Ciclo não exige decisões radicais. Você não será orientado a pedir demissão ou abandonar aquilo que construiu. O objetivo é ampliar suas possibilidades de escolha. Talvez, depois disso, você decida continuar exatamente onde está."
  },
  {
    question: "“E se eu mudar e depois voltar para o mesmo lugar?”",
    answer: "A TAR busca trabalhar o mecanismo que participa do retorno ao comportamento conhecido. A meta não é ensinar você a passar o resto da vida lutando contra si mesmo. É tornar o circuito observável para que ele deixe de operar como uma regra invisível."
  },
  {
    question: "Isso substitui terapia?",
    answer: "O Perímetro é um ciclo delimitado baseado na metodologia TAR e focado em uma demanda específica. Caso você esteja em acompanhamento de saúde mental, decisões sobre iniciar, interromper ou substituir tratamentos devem ser tomadas com os profissionais responsáveis pelo seu cuidado."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ position: 'relative', background: 'var(--bg-dark)', padding: '6rem 0' }}>
      
      {/* Continuing diagram line */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '1px', height: '100%', background: 'var(--gold-primary)', opacity: 0.15, zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
        <span className="section-label reveal" style={{ color: 'var(--text-muted)', letterSpacing: '3px', textAlign: 'center', display: 'block' }}>PERGUNTAS E OBJEÇÕES</span>
        <h2 className="section-title reveal delay-1" style={{ color: 'var(--text-white)', fontWeight: 300, fontSize: 'clamp(2rem, 3vw, 2.5rem)', margin: '0 auto 4rem', textAlign: 'center' }}>
          O que você precisa saber antes de iniciar
        </h2>
        
        <div className="faq-list reveal delay-2">
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
      </div>
    </section>
  );
}
