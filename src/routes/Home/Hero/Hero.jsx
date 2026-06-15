import React from 'react';
import styles from './hero.module.css';
import Button from '../../../components/Button/Button';
import cart from '../../../assets/cart.png';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <p className={styles.greeting}>WELCOME</p>
        <h2>
          Find the best <br /> products for you
        </h2>
        <p className={styles.description}>
          Discover amazing products <br /> at best prices
        </p>
        <Button type={'primary'}>Shop Now</Button>
      </div>

      <div className={styles['img-wrapper']}>
        <img src={cart} alt="" width={400} height="auto" />
      </div>
    </section>
  );
}
