import { useState } from 'react';
import Counter from '../Counter.jsx/Counter';
import styles from './card.module.css';
import { Trash } from 'lucide-react';

export default function Card({ title, price, img, onClick }) {
  const [announcement, setAnnouncement] = useState('');

  const handleAddToCart = () => {
    onClick();

    setAnnouncement('Added to cart');

    setTimeout(() => setAnnouncement(''), 100);
  };

  return (
    <article className={styles.card}>
      <div className={styles['img-container']}>
        <img src={img} alt="" />
      </div>
      <div className={styles['card-info']}>
        <h3 className={styles['card-title']}>{title}</h3>
        <p className={styles['card-price']}>${price}</p>
        <button
          aria-label={`Add ${title} to cart`}
          className={styles['add-btn']}
          onClick={handleAddToCart}
        >
          +
        </button>

        <div aria-live="polite" className={styles['visually-hidden']}>
          {announcement}
        </div>
      </div>
    </article>
  );
}

export function CartCard({ product, decrement, increment, onChange, onDelete }) {
  return (
    <article className={styles['cart-card']} data-testid="cart-card">
      <div className={styles['cart-img-container']}>
        <img src={product.image} alt={product.title} />
      </div>

      <div className={styles['cart-card-details']}>
        <div className={styles['top-cont']}>
          <h3 className={styles['card-title']}>{product.title}</h3>

          <button
            onClick={onDelete}
            data-testid="delete-button"
            aria-label={`Delete ${product.title}`}
          >
            <Trash aria-hidden />
          </button>
        </div>

        <p className={styles['card-price']}>${product.price}</p>

        <div className={styles['bottom-cont']}>
          <Counter
            value={product.amount}
            decrement={decrement}
            increment={increment}
            onChange={onChange}
          />
        </div>
      </div>
    </article>
  );
}
