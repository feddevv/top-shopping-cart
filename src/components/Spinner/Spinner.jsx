import styles from './spinner.module.css';

export default function Spinner() {
  return (
    <main className={styles['spinner-cont']}>
      <div className={styles.spinner} data-testid="spinner"></div>
    </main>
  );
}
