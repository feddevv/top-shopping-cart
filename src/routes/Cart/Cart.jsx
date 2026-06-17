import { useOutletContext } from 'react-router';
import styles from './cart.module.css';
import Card from '../../components/Card/Card';

export default function Cart() {
  const { cart } = useOutletContext();

  return (
    <main className={styles.main}>
      <section>
        <h2>You Cart</h2>
        <div className={styles.products}>
          {cart.map((product) => (
            <Card
              key={product.id}
              img={product.image}
              title={product.title}
              price={product.price}
              onClick={product.onClick}
            />
          ))}
        </div>
      </section>

      <section className={styles.summary}>
        <h2>Order Summary</h2>
      </section>
    </main>
  );
}
