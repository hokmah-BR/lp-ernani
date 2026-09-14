import React from 'react';
import Image from 'next/image';

export default function LagomParceiros() {
  return (
    <section aria-labelledby="quem-assina" style={{ background: 'var(--lagom-cobre)', padding: 'clamp(4rem, 8vw, 8rem) 0' }}>
      <div className="ed-container">
        <div className="reveal" style={{ maxWidth: '900px', marginBottom: '3rem' }}>
          
          <h2 id="quem-assina" className="ed-headline ed-headline--medium" style={{ marginBottom: '2.5rem', color: 'var(--lagom-preto)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            "Quando apresento um projeto dessa magnitude, a primeira pergunta do investidor é sempre a mesma: <em style={{ color: '#444444' }}>quem garante a entrega?</em>"
          </h2>
          <div style={{ borderTop: '1px solid rgba(0,0,0,0.15)', paddingTop: '2rem' }}>
            <p className="ed-body" style={{ marginBottom: '1.5rem', color: 'var(--lagom-preto)' }}>
              O Lagom Perequê é o resultado da união de duas potências bilionárias da construção civil:
              <strong style={{ color: '#444444' }}> a GT Home e a ABC.</strong>
            </p>
            <p className="ed-body" style={{ color: 'var(--lagom-preto)' }}>
              Um projeto com 47 pavimentos e 32.000m² de área não aceita aventureiros. <strong style={{ color: '#444444' }}>Aqui, o risco de execução é zerado pela força do patrimônio de quem assina o cheque.</strong>
            </p>
          </div>
        </div>

        {/* PARCEIROS CARDS */}
        <div className="ed-parceiros-grid reveal delay-1">
          {/* GENINHO THOME */}
          <div className="ed-parceiro-card">
            <Image
              src="/assets/images/lagom/GeninhoThome_GT_Home.webp"
              alt="Foto do Geninho Thomé, fundador da GT Home"
              width={800} height={600}
              className="parceiro-foto"
            />
            <div className="ed-parceiro-info">
              <h3>Geninho Thomé</h3>
              <p>
                Fundador da Neodent (vendida por mais de R$ 1 bilhão ao grupo suíço Straumann) e um dos investidores mais sólidos do sul do país. Seu braço imobiliário, a GT Home, não entra em projetos para testar mercado; entra para dominar o <em>skyline</em> com altíssima capitalização e solidez financeira incontestável.
              </p>
              <div className="ed-parceiro-logos">
                <Image src="/assets/images/lagom/logoGTCompany-FwKVlDIC.svg" alt="Logo GT Company" width={114} height={27} />
              </div>
            </div>
          </div>

          {/* THIAGO CABRAL */}
          <div className="ed-parceiro-card">
            <Image
              src="/assets/images/lagom/ThiagoCabral_ABC.webp"
              alt="Foto do Thiago Cabral, diretor da ABC Empreendimentos"
              width={800} height={600}
              className="parceiro-foto"
            />
            <div className="ed-parceiro-info">
              <h3>Thiago Cabral</h3>
              <p>
                Sócio-diretor da ABC Empreendimentos, com um histórico de inúmeras obras entregues com rigor técnico e pontualidade na Costa Esmeralda. Uma engenharia de precisão responsável por erguer condomínios complexos que historicamente apresentam alto índice de valorização no repasse para os investidores iniciais.
              </p>
              <div className="ed-parceiro-logos">
                <Image src="/assets/images/lagom/logoABC-tPBPAX3T.svg" alt="Logo ABC Empreendimentos" width={100} height={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
