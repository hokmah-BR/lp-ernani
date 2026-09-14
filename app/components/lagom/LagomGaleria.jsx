import React from 'react';
import Image from 'next/image';
import CtaButton from '../CtaButton';

export default function LagomGaleria() {
  return (
    <section aria-label="Galeria de fotos do projeto" style={{ background: 'var(--lagom-quase)', padding: 'clamp(4rem, 8vw, 8rem) 0' }}>
      <div className="ed-container">
        
        <div className="lagom-mural reveal delay-1">
          {/* Foto 1: Gigante (Ocupa 2x2) */}
          <div className="lagom-mural-item mural-large">
            <Image src="/assets/images/lagom/lagom-pereque-porto-belo-terreno-90mil-metros.webp" alt="Área do terreno de 90 mil metros quadrados" fill style={{objectFit: 'cover', objectPosition: 'center bottom'}} />
          </div>
          
          {/* Foto 2: Alta (Ocupa 1x2) */}
          <div className="lagom-mural-item mural-tall">
            <Image src="/assets/images/lagom/lagom-pereque-porto-belo-beachpoint.webp" alt="Beach point exclusivo" fill style={{objectFit: 'cover'}} />
          </div>

          {/* Foto 3: Pequena Quadrada (Ocupa 1x1) */}
          <div className="lagom-mural-item mural-small">
            <Image src="/assets/images/lagom/lagom-pereque-porto-belo-heliponto.webp" alt="Heliponto do empreendimento" fill style={{objectFit: 'cover'}} />
          </div>

          {/* Foto 4: Pequena Quadrada (Ocupa 1x1) */}
          <div className="lagom-mural-item mural-small">
            <Image src="/assets/images/lagom/lagom-pereque-porto-belo-vista-mar.webp" alt="Vista para o mar" fill style={{objectFit: 'cover'}} />
          </div>

          {/* Foto 5: Larga (Ocupa 2x1) */}
          <div className="lagom-mural-item mural-wide">
            <Image src="/assets/images/lagom/parque.webp" alt="O Parque Central" fill style={{objectFit: 'cover'}} />
          </div>

          {/* Foto 6: Pequena Quadrada (Ocupa 1x1) */}
          <div className="lagom-mural-item mural-small">
            <Image src="/assets/images/lagom/interna.webp" alt="Área interna luxuosa" fill style={{objectFit: 'cover'}} />
          </div>

          {/* Foto 7: Pequena Quadrada (Ocupa 1x1) */}
          <div className="lagom-mural-item mural-small">
            <Image src="/assets/images/lagom/lagom-pereque-porto-belo-lagoa.webp" alt="A Lagoa" fill style={{objectFit: 'cover'}} />
          </div>
        </div>

        <div className="reveal delay-2" style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
          <CtaButton
            className="btn-cta"
            formId="lagom-pereque-mural"
            aria-label="Receber o material completo sobre o projeto"
          >
            Receber material completo
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
