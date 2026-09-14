'use client';

import React, { useEffect, useState } from 'react';
import './LeadPopup.css';

export default function LeadPopup({ isOpen, onClose, children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return (
    <div className="ed-modal-overlay" onClick={onClose}>
      <div className="ed-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="ed-modal-close" onClick={onClose} aria-label="Fechar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="ed-modal-body">
          {children}
        </div>
      </div>
    </div>
  );
}
