import React from 'react';
import Image from 'next/image';

export default function LagomPerfilInvestidor() {
  return (
    <section aria-labelledby="perfil-investidor" style={{ background: 'var(--lagom-cobre)', paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 0, display: 'flex', flexDirection: 'column' }}>
      <div className="ed-container" style={{ paddingBottom: '3rem' }}>
        <div className="reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ width: '100%' }}>
            <h2 id="perfil-investidor" className="ed-headline ed-headline--medium" style={{ maxWidth: '800px' }}>
              O perfil de quem investe no <em>LAGOM PEREQUÊ:</em>
            </h2>
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--lagom-creme)', paddingBottom: '3rem' }}>
        <div className="ed-container reveal delay-1" style={{ paddingTop: '3rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3.5rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
            
            {/* WHATS 01 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', justifyContent: 'center' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', color: 'var(--lagom-cobre)', fontWeight: 300, lineHeight: 1 }} aria-hidden="true">01</span>
                <div style={{ height: '1px', width: '2rem', background: 'var(--lagom-cobre)', opacity: 0.4 }} aria-hidden="true"></div>
                <h3 style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--lagom-cinza)', margin: 0, paddingTop: '0.3rem' }}>
                  Visão de Longo Prazo
                </h3>
              </div>
              <Image
                src="/assets/images/lagom/whats-1.webp"
                alt="Print de conversa no WhatsApp demonstrando visão de longo prazo de investidor"
                width={400}
                height={800}
                unoptimized={true}
                style={{ width: '100%', maxWidth: '340px', height: 'auto', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
              />
            </div>

            {/* WHATS 02 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', justifyContent: 'center' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', color: 'var(--lagom-cobre)', fontWeight: 300, lineHeight: 1 }} aria-hidden="true">02</span>
                <div style={{ height: '1px', width: '2rem', background: 'var(--lagom-cobre)', opacity: 0.4 }} aria-hidden="true"></div>
                <h3 style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--lagom-cinza)', margin: 0, paddingTop: '0.3rem' }}>
                  Espaço e Privacidade
                </h3>
              </div>
              <Image
                src="/assets/images/lagom/whats-2.webp"
                alt="Print de conversa no WhatsApp demonstrando a valorização de espaço e privacidade"
                width={400}
                height={800}
                unoptimized={true}
                style={{ width: '100%', maxWidth: '340px', height: 'auto', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
              />
            </div>

            {/* WHATS 03 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', justifyContent: 'center' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', color: 'var(--lagom-cobre)', fontWeight: 300, lineHeight: 1 }} aria-hidden="true">03</span>
                <div style={{ height: '1px', width: '2rem', background: 'var(--lagom-cobre)', opacity: 0.4 }} aria-hidden="true"></div>
                <h3 style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--lagom-cinza)', margin: 0, paddingTop: '0.3rem' }}>
                  A Força da Escassez
                </h3>
              </div>
              <Image
                src="/assets/images/lagom/whats-3.webp"
                alt="Print de conversa no WhatsApp abordando a força da escassez e liquidez do imóvel"
                width={400}
                height={800}
                unoptimized={true}
                style={{ width: '100%', maxWidth: '340px', height: 'auto', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}
              />
            </div>

          </div>
        </div>
      </div>
      {/* ── IMAGEM AÉREA FULL-WIDTH ──────────────────────────── */}
      <div style={{ lineHeight: 0 }}>
        <Image
          src="/assets/images/lagom/lagom-pereque-porto-belo-lagoa(horizontal).webp"
          alt="Vista aérea geral do complexo e lagoa do Lagom Perequê"
          width={3840}
          height={2160}
          quality={70}
          loading="lazy"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
    </section>
  );
}
