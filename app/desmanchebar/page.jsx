'use client'

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const HokmahForm = dynamic(() => import('../components/HokmahForm'), {
  ssr: false,
  loading: () => <p style={{ color: '#fff', textAlign: 'center' }}>Carregando formulário...</p>
});
import styles from './styles.module.css';

export default function SimpleLP() {
  return (
    <main className={styles.container}>
      <Image
        src="/bg-desmanche.jpg"
        alt="Background Desmanche Bar"
        fill
        priority
        fetchPriority="high"
        className={styles.bgImage}
        sizes="100vw"
      />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>O que era Mercearia 2840…</h1>
        <h2 className={styles.strongSubtitle}>
          está sendo transformado<br />em algo completamente<br />novo.
        </h2>
        <p className={styles.subtitle}>
          Sob nova direção, nasce um novo bar, com uma nova cara.<br />
          Música boa, comida boa e cerveja gelada<br />
          <i>do jeito que tem que ser.</i>
        </p>

        <div className={styles.formWrapper}>
          <h2 className={styles.formTitle}>E a gente já começa te presenteando.</h2>
          <p className={styles.formSubtitle}>Garanta um voucher de R$50</p>
          <HokmahForm
            formId="lp-simples-branca"
            submitText="RECEBER MEU VOUCHER"
            redirectUrl="/obrigado-desmanche"
            apiUrl="/api/hubspot"
          />
        </div>

        <a
          href="https://www.instagram.com/mercearia.2840/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.instaButton}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.869a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.88 0z" />
          </svg>
          Siga nosso Instagram
        </a>

        <div className={styles.terms}>
          <p>Voucher válido por até 30 dias após a data oficial de inauguração do Desmanche Bar.</p>
          <p>Limitado a 1 voucher por pessoa/cadastro.</p>
          <p>O benefício poderá ser utilizado conforme regras de consumo definidas pelo estabelecimento.</p>
        </div>
      </div>
    </main>
  );
}
