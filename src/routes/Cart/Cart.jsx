import { useOutletContext } from 'react-router';
import styles from './cart.module.css';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

export default function Cart() {
  const { cart } = useOutletContext();

  const summary = {
    totalPrice: cart.reduce((acc, curr) => acc + curr.price, 0),
    totalProducts: cart.length,
  };

  return (
    <main className={styles.main}>
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

      <section className={styles.summary}>
        <h2>Order Summary</h2>
        <div className={styles['summary-details']}>
          <p>
            Total price: <span>${summary.totalPrice}</span>
          </p>
          <p>
            Total amount: <span>{summary.totalProducts}</span>
          </p>

          <div className={styles.divider}></div>

          <Button type={'primary'}>Order Now</Button>
        </div>
      </section>
    </main>
  );
}
