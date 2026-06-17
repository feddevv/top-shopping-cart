import Counter from '../Counter.jsx/Counter';
import styles from './card.module.css';
import { Trash } from 'lucide-react';

export default function Card({ title, price, img, onClick }) {
  return (
    <article className={styles.card}>
      <div className={styles['img-container']}>
        <img src={img} alt="" />
      </div>
      <div className={styles['card-info']}>
        <h3 className={styles['card-title']}>{title}</h3>
        <p className={styles['card-price']}>${price}</p>
        <button className={styles['add-btn']} onClick={onClick}>
          +
        </button>
      </div>
    </article>
  );
}

export function CartCard({ title, price, img, amount, decrement, increment, onChange }) {
  return (
    <article className={styles['cart-card']}>
      <div className={styles['cart-img-container']}>
        <img src={img} alt="" />
      </div>

      <div className={styles['cart-card-details']}>
        <div className={styles['top-cont']}>
          <h3 className={styles['card-title']}>{title}</h3>

          <Trash />
        </div>

        <p className={styles['card-price']}>${price}</p>

        <div className={styles['bottom-cont']}>
          <Counter value={amount} decrement={decrement} increment={increment} onChange={onChange} />
        </div>
      </div>
    </article>
  );
}
