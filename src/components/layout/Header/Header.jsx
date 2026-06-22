import React, { useState } from 'react';
import Hamburger from './Hamburger';
import styles from './header.module.css';
import { NavLink } from 'react-router';
import { ShoppingCart } from 'lucide-react';
import useIsMobile from '../../../hooks/useIsMobile';

const links = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/shop',
    title: 'Shop',
  },
];

export default function Header({ isOpen, setIsOpen, productsAmount }) {
  const isMobile = useIsMobile();
  const isFocusable = !isMobile || isOpen;

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <Hamburger isOpen={isOpen} onClick={handleOpenMenu} />

      <h1>ShoppingCart</h1>
      <nav className={`${styles['link-container']} ${isOpen ? styles.open : ''}`}>
        {isOpen && <Hamburger isOpen={isOpen} onClick={handleOpenMenu} />}
        {links.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            className={({ isActive }) => `${styles.link} ${isActive ? styles.open : ''}`}
            tabIndex={isFocusable ? 0 : -1}
          >
            {link.title}
          </NavLink>
        ))}
      </nav>
      <NavLink
        to={'/cart'}
        className={({ isActive }) => `${styles.cart} ${isActive ? styles.open : ''}`}
        aria-label="Cart"
      >
        <ShoppingCart aria-hidden />
        {productsAmount > 0 && <span className={styles['products-amount']}>{productsAmount}</span>}
      </NavLink>
    </header>
  );
}
