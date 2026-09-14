import React from 'react';

const Footer = ({ simple = false }) => (
  <footer style={{
    padding: '2rem 0',
    textAlign: 'center',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    color: 'var(--text-muted)',
    fontSize: '0.8rem',
    background: simple ? 'var(--bg-dark)' : 'transparent'
  }}>
    <div className="container" style={{ textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} Marcelo Chaves / Hokmah Negócios Imobiliários. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;
