'use client';

import React, { createContext, useContext, useState } from 'react';
import LeadPopup from './LeadPopup';
import HokmahForm from './HokmahForm';

const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formId, setFormId] = useState('lagom-pereque');

  const openPopup = (id) => {
    setFormId(id);
    setIsOpen(true);
  };

  return (
    <PopupContext.Provider value={{ openPopup }}>
      {children}
      <LeadPopup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-primary)', margin: '0 0 0.6rem' }}>
            Perímetro: Ciclo de Reconfiguração
          </p>
          <h2 style={{ fontFamily: 'var(--font-jakarta), sans-serif', fontSize: '1.4rem', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.25, margin: 0 }}>
            Inicie seu ciclo agora. Preencha seus dados para receber o contato da nossa equipe.
          </h2>
        </div>
        <HokmahForm
          formId={formId}
          submitText="CONHECER PROJETO"
          redirectUrl="/lagom-pereque/obrigado"
          apiUrl="/api/hubspot"
        />
      </LeadPopup>
    </PopupContext.Provider>
  );
}

export function usePopup() {
  return useContext(PopupContext);
}
