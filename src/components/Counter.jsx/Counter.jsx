import styles from './counter.module.css';

export default function Counter({ value, decrement, increment, onChange }) {
  return (
    <div className={styles.counter}>
      <button className={styles.decrement} onClick={decrement} aria-label="Decrease product">
        –
      </button>
      <label htmlFor="count" className={'visually-hidden'}>
        Product amount {value}
      </label>
      <input type="number" value={value} onChange={onChange} id="count" aria-live="polite" />
      <button className={styles.increment} onClick={increment} aria-label="Increase product">
        +
      </button>
    </div>
  );
}
