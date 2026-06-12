import React, { useState } from 'react';
import Hamburger from './Hamburger';
import styles from './header.module.css';
import { NavLink } from 'react-router';
import { ShoppingCart } from 'lucide-react';

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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <Hamburger isOpen={isOpen} onClick={handleOpenMenu} />

      <h1>ShoppingCart</h1>
      <nav
        className={`${styles['link-container']} ${isOpen ? styles.open : ''}`}
        aria-hidden={!isOpen}
      >
        {isOpen && <Hamburger isOpen={isOpen} onClick={handleOpenMenu} />}
        {links.map((link) => (
          <NavLink
            to={link.path}
            className={({ isActive }) => `${styles.link} ${isActive ? styles.open : ''}`}
            tabIndex={!isOpen ? -1 : 0}
          >
            {link.title}
          </NavLink>
        ))}
      </nav>
      <NavLink
        to={'/cart'}
        className={({ isActive }) => `${styles.cart} ${isActive ? styles.open : ''}`}
      >
        <ShoppingCart />
      </NavLink>
    </header>
  );
}
