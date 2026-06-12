import styles from './hamburger.module.css';

import React, { useState } from 'react';

export default function Hamburger({ isOpen, onClick }) {
  return (
    <button
      className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
      onClick={onClick}
      aria-label="Menu"
    >
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </button>
  );
}
