import React from 'react';
import Script from 'next/script';
import Footer from '../../components/Footer';
import '../lagom.css';

export const metadata = {
  title: 'Lagom Perequê | Obrigado',
  description: 'Confirmação de recebimento. Em breve um especialista do Lagom Perequê entrará em contato.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function LagomObrigado() {
  return (
    <div className="lagom-theme">
      <Script id="datalayer-lead" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: 'generate_lead' });
        `}
      </Script>
      <header style={{ padding: '2rem 0', position: 'absolute', width: '100%', zIndex: 10 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: '#fff', fontSize: '1.5rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
            LAGOM <span style={{ fontWeight: 300, color: 'var(--lagom-cobre)' }}>PEREQUÊ</span>
          </span>
        </div>
      </header>

      <section className="lagom-hero" style={{
        padding: '6rem 0 4rem',
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundImage: "linear-gradient(rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.95)), url('/assets/images/lagom/beach-point.jpeg')"
      }}>
        <div className="container">
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            background: 'rgba(10, 10, 10, 0.7)',
            padding: '3.5rem 2.5rem',
            borderRadius: '12px',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(230, 120, 37, 0.15)'
          }}>

            <h1 className="lagom-section-title" style={{ marginBottom: '1rem', color: 'var(--lagom-cobre)' }}>
              Recebemos suas informações!
            </h1>

            <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 'clamp(1.2rem, 2vw, 1.3rem)', marginBottom: '2rem', color: '#fff', lineHeight: 1.4 }}>
              Em breve você receberá todos os detalhes privativos sobre o Lagom Perequê.
            </h2>

            <p className="lagom-text-muted" style={{ marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              Um dos nossos estrategistas de patrimônio vai entrar em contato com você pelo WhatsApp para apresentar o masterplan, a viabilidade da sua aquisição e as unidades exclusivas disponíveis.<br /><br />
              <strong style={{ color: '#fff', fontWeight: 500 }}>Esse contato é discreto, direto e totalmente sem compromisso.</strong>
            </p>

            <div style={{ margin: '3rem 0' }}>
              <a href={`https://wa.me/5547991934670?text=${encodeURIComponent("- Quero receber o material exclusivo do Lagom Perequê.")}`} target="_blank" rel="noreferrer" className="btn-cta" style={{ 
                margin: '0 auto', 
                display: 'inline-flex', 
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                minWidth: '320px', 
                fontSize: '1.1rem', 
                padding: '1.2rem 2rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 600
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Adiantar atendimento via WhatsApp
              </a>
            </div>
            
            <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>
              Se preferir, basta aguardar — entraremos em contato em breve.
            </p>
          </div>
        </div>
      </section>

      <Footer simple={true} />
    </div>
  );
}
