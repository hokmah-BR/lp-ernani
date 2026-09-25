'use client';
import React from 'react';
import { usePopup } from '../../app/components/PopupContext';

export default function CtaButton({ 
  text = "QUERO AGENDAR MINHA CONSULTA", 
  className = "btn-cta", 
  style = {} 
}) {
  const { openPopup } = usePopup();

  return (
    <button 
      onClick={openPopup} 
      className={className} 
      style={{ 
        background: 'transparent', 
        color: 'var(--text-white)', 
        border: '1px solid var(--gold-border)',
        ...style
      }}
    >
      {text}
    </button>
  );
}
