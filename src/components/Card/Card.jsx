import styles from './card.module.css';

export default function Card({ title, price, img, onClick }) {
  return (
    <article className={styles.card}>
      <img src={img} alt="" />
      <div className={styles['card-info']}>
        <h3 className={styles['card-title']}>{title}</h3>
        <p className={styles['card-price']}>{price}</p>
        <button className={styles['add-btn']} onClick={onClick}>
          +
        </button>
      </div>
    </article>
  );
}
