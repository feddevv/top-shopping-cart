import styles from './counter.module.css';

export default function Counter({ value, decrement, increment, onChange }) {
  return (
    <div className={styles.counter}>
      <button className={styles.decrement}>–</button>
      <input type="number" defaultValue={1} id="count" />
      <button className={styles.increment}>+</button>
    </div>
  );
}
