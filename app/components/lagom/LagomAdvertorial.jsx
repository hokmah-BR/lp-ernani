import React from 'react';
import Image from 'next/image';

export default function LagomAdvertorial() {
  return (
    <>
      {/* ── DOBRA 2: O INIMIGO (A Selva de Concreto) ──────────────── */}
      <section className="advertorial-section adv-dark" aria-labelledby="inimigo-heading">
        <div className="adv-content reveal">
          <div className="adv-image-wrapper" style={{ marginTop: 0, marginBottom: '2.5rem' }}>
             <Image
                src="/assets/images/lagom/lagom-pereque-porto-belo-aerea(horizontal).webp"
                alt="Vista aérea de Porto Belo mostrando excesso de prédios"
                width={1920}
                height={1080}
                quality={85}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
          </div>

          <h2 id="inimigo-heading" className="adv-title">A armadilha de luxo no litoral catarinense</h2>
          <p className="adv-text">
            Você investiria 2 ou 3 milhões de reais em um imóvel na planta para, amanhã, ver outro prédio subir colado na sua sacada? A vista vira concreto. A exclusividade vira aperto.
          </p>
          <div className="adv-highlight">
            <p>O mercado imobiliário normalizou um prédio colado no outro.<br/> <span style={{ fontStyle: 'italic' }}>Mas a GT Home e a ABC não.</span></p>
          </div>
        </div>
      </section>

      {/* ── DOBRA 3: A SOLUÇÃO (A Decisão Irracional) ───────────── */}
      <section className="advertorial-section adv-light" aria-labelledby="solucao-heading">
        <div className="adv-content reveal">
          <h2 id="solucao-heading" className="adv-title">18 torres em um terreno ou apenas 6?</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 600, color: 'var(--lagom-cinza)', marginTop: '-1rem', marginBottom: '2.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            O que você faria?
          </p>

          <div className="adv-image-wrapper" style={{ marginTop: 0, marginBottom: '2.5rem' }}>
             <Image
                src="/assets/images/lagom/lagom-pereque-porto-belo-imagem.webp"
                alt="Masterplan Lagom Perequê com amplo espaçamento entre torres"
                width={1920}
                height={1080}
                quality={85}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
          </div>

          <p className="adv-text">
            <span style={{ fontStyle: 'italic' }}>Enquanto o mercado disputa cada centímetro quadrado, a construtora abriu mão de 136 metros.</span>
          </p>

          <p className="adv-text">
            O motivo? Criar um privilégio que o mercado tornou escasso: <strong>a sensação de ter espaço só seu.</strong>
          </p>

          <p className="adv-text">
            Ao invés de espremer prédios colados, eles deixaram um vão livre de <strong>136 metros de distância entre uma torre e outra.</strong> O espaço suficiente para abrigar um verdadeiro 'Central Park' de 90 mil m² encravado dentro do condomínio.
          </p>
        </div>
      </section>
    </>
  );
}
