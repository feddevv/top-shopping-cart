import Card from '../../../components/Card/Card';
import styles from './productSection.module.css';

export default function ProductSection({ products, handleAddToCart }) {
  return (
    <section className={styles['product-section']}>
      <h2>Featured Products</h2>
      <div className={styles.products}>
        {products.map((product, i) => {
          if (i <= 3) {
            return (
              <Card
                key={product.id}
                title={product.title}
                price={product.price}
                img={product.image}
                onClick={() => handleAddToCart(product)}
              />
            );
          }
        })}
      </div>
    </section>
  );
}
