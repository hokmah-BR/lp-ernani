import React from 'react';

export default function LagomUrgencia() {
  return (
    <section aria-labelledby="custo-hesitacao" style={{ background: 'var(--lagom-creme)', padding: 'clamp(3rem, 6vw, 6rem) 0' }}>
      <div className="ed-container">
        <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 id="custo-hesitacao" className="ed-headline ed-headline--medium" style={{ marginBottom: '2.5rem' }}>
            O custo invisível<br />
            da <em>hesitação.</em>
          </h2>
          <div style={{ borderTop: '1px solid var(--lagom-linha)', paddingTop: '2rem' }}>
            <p className="ed-body" style={{ marginBottom: '1.5rem' }}>
              A cada dia que passa, o ativo ganha valor e as opções de escolha diminuem.
            </p>
            <p className="ed-body" style={{ marginBottom: '1.5rem' }}>
              Em projetos irreplicáveis, as unidades com as melhores plantas e recuos
              são as primeiras a compor o portfólio de investidores estratégicos.
            </p>
            <p className="ed-body">
              <strong>Decidir agora é o que diferencia quem dita o preço
                de quem apenas paga o preço.</strong> O momento da sua entrada não altera apenas
              a sua vista para o mar — altera fundamentalmente o tamanho
              da sua vantagem patrimonial.
            </p>

            <div className="reveal delay-1" style={{ marginTop: '3rem', padding: '1.5rem 2rem', background: '#fff', borderLeft: '4px solid var(--lagom-cobre)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--lagom-cobre)' }}>Parâmetro de Investimento</span>
                <span style={{ fontFamily: 'var(--font-jakarta), sans-serif', fontSize: '1.4rem', fontWeight: 800, color: 'var(--lagom-preto)' }}>Ticket de Entrada: A partir de R$ 2.5 Milhões</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'var(--lagom-cinza)', marginTop: '0.5rem' }}>*Condições flexíveis para investidores na fase atual do projeto. Valores sujeitos à disponibilidade.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
