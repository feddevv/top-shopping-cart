import Card from '../../../components/Card/Card';
import styles from './productSection.module.css';

export default function ProductSection() {
  return (
    <section className={styles['product-section']}>
      <h2>Featured Products</h2>
      <div className={styles.products}>
        <Card />
      </div>
    </section>
  );
}
