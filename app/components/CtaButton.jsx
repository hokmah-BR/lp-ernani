'use client';

import React from 'react';
import { usePopup } from './PopupContext';

export default function CtaButton({ formId, className, children }) {
  const { openPopup } = usePopup();

  return (
    <button className={className} onClick={() => openPopup(formId)}>
      {children}
    </button>
  );
}
