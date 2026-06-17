import styles from './counter.module.css';

export default function Counter({ value, decrement, increment, onChange }) {
  return (
    <div className={styles.counter}>
      <button className={styles.decrement} onClick={decrement}>
        –
      </button>
      <input type="number" value={value} onChange={onChange} id="count" />
      <button className={styles.increment} onClick={increment}>
        +
      </button>
    </div>
  );
}
