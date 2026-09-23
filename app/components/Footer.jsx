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
      <p style={{ color: 'var(--text-white)', fontSize: '1rem', marginBottom: '1rem' }}>Compreenda o que te trava. Supere o que te limita. E, finalmente, tenha liberdade para ser você mesmo.</p>
      <p style={{ marginBottom: '1rem' }}>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Política de Privacidade</a> | <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Termos de Uso</a>
      </p>
      <p>&copy; {new Date().getFullYear()} EF3 Education LTDA. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;
