'use client';
import { useState, useEffect, useRef } from 'react';
import CtaButton from '../components/CtaButton';

const VIDEO_ID = '7IzAaSIyd_4';

const SRC_MUTED = [
  `https://www.youtube-nocookie.com/embed/${VIDEO_ID}`,
  `?autoplay=1`,
  `&mute=1`,
  `&controls=0`,    // sem controles nem barra de progresso
  `&rel=0`,
  `&modestbranding=1`,
  `&iv_load_policy=3`,
  `&fs=0`,
  `&playsinline=1`,
  `&enablejsapi=1`,
  `&disablekb=1`,
  `&cc_load_policy=0`, // desativa legendas (CC) no player
].join('');

export default function VslPlayer() {
  // 'muted' → autoplay silencioso | 'active' → com som | 'ended' → CTA
  const [phase, setPhase] = useState('muted');
  const playerRef  = useRef(null);
  const iframeRef  = useRef(null);
  const readyRef   = useRef(false); // flag: API pronta?

  /* ── Carrega YouTube IFrame API (Imediato) ── */
  useEffect(() => {
    function initPlayer() {
      if (!iframeRef.current || readyRef.current) return;
      readyRef.current = true;
      playerRef.current = new window.YT.Player(iframeRef.current, {
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();
          },
          onStateChange: ({ data }) => {
            if (data === 0) setPhase('ended'); // 0 = ENDED
          },
        },
      });
    }

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      // Preserva callback anterior se existir (multi-instância)
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prev) prev();
        initPlayer();
      };
      if (!document.getElementById('yt-api-script')) {
        const s = document.createElement('script');
        s.id  = 'yt-api-script';
        s.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(s);
      }
    }
  }, []);

  /* ── Usuário clica para assistir com som ── */
  function handleUnmute() {
    const p = playerRef.current;
    if (p && typeof p.seekTo === 'function') {
      p.seekTo(0, true);   // volta ao início
      p.unMute();
      p.playVideo();
    }
    setPhase('active');
  }

  /* ── Estilos base do wrapper do player ── */
  const wrapperStyle = {
    position: 'relative',
    width: '100%',
    paddingBottom: '56.25%', // 16:9
    borderRadius: '12px',
    overflow: 'hidden',
    background: '#000',
    boxShadow: '0 24px 60px rgba(0,0,0,0.55)',
  };

  return (
    <div style={{ width: '100%', maxWidth: '820px', margin: '2rem auto 0' }}>

      {/* ─── PLAYER (mudo ou com som) ─── */}
      {phase !== 'ended' && (
        <div style={wrapperStyle}>

          {/* Imagem de Fundo (Thumbnail) — aparece instantaneamente enquanto o iframe carrega */}
          <img
            src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
            alt="Lagom Perequê"
            style={{
              position: 'absolute', top: 0, left: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              zIndex: 1, // fica atrás do iframe
            }}
          />

          {/* iframe do YouTube */}
          <iframe
            ref={iframeRef}
            id="lagom-vsl-player"
            src={SRC_MUTED}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', zIndex: 2 }}
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
            title="Apresentação Lagom Perequê"
          />

          {/* Overlay total: bloqueia cliques no iframe (logo do YT, etc.)
              Na fase 'muted' também serve como área clicável para unmute */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 10,
              background: 'transparent',
              cursor: phase === 'muted' ? 'pointer' : 'default',
            }}
            onClick={phase === 'muted' ? handleUnmute : undefined}
          />

          {/* ── OVERLAY DO ESTADO MUTADO ── */}
          {phase === 'muted' && (
            <div
              onClick={handleUnmute}
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 100%)',
                cursor: 'pointer',
                gap: '1rem',
              }}
            >
              {/* Botão de som */}
              <div 
                className="pulse-audio-btn"
                style={{
                  width: '80px', height: '80px', borderRadius: '50%',
                  background: 'rgba(37, 211, 102, 0.92)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {/* Ícone de volume/speaker mudo */}
                <svg width="34" height="34" viewBox="0 0 24 24" fill="white">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                </svg>
              </div>

              <span style={{
                color: '#fff',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif',
                textShadow: '0 1px 4px rgba(0,0,0,0.6)',
              }}>
                Ativar audio
              </span>
            </div>
          )}
        </div>
      )}

      {/* ─── CTA FINAL (após o vídeo terminar) ─── */}
      {phase === 'ended' && (
        <div style={{
          width: '100%',
          minHeight: '240px',
          borderRadius: '12px',
          background: 'rgba(0,0,0,0.88)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          padding: '2.5rem 2rem',
          textAlign: 'center',
          boxShadow: '0 24px 60px rgba(0,0,0,0.55)',
        }}>
          <p style={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            fontFamily: 'var(--font-cormorant), serif',
            fontWeight: 500,
            maxWidth: '480px',
            lineHeight: 1.55,
            margin: 0,
          }}>
            Agora que você entende o ativo,<br/>
            o próximo passo é entender as condições.
          </p>
          <CtaButton className="btn-cta" formId="lagom-pereque-vsl-end">
            Quero conhecer as condições
          </CtaButton>
        </div>
      )}
    </div>
  );
}
