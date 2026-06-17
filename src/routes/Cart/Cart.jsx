import { useOutletContext } from 'react-router';
import styles from './cart.module.css';
import Card, { CartCard } from '../../components/Card/Card';
import Button from '../../components/Button/Button';

export default function Cart() {
  const { cart, setCart } = useOutletContext();

  const summary = {
    totalPrice: cart.reduce((acc, curr) => acc + curr.price * curr.amount, 0),
    totalProducts: cart.reduce((acc, curr) => acc + curr.amount, 0),
  };

  const handleDecrement = (product) => {
    if (product.amount <= 1) return;

    product.amount--;
    setCart([...cart]);
  };

  const handleIncrement = (product) => {
    product.amount++;
    setCart([...cart]);
  };

  const handleOnChange = (e, product) => {
    let value = Number(e.target.value);

    if (value < 1) value = 1;

    product.amount = value;
    setCart([...cart]);
  };

  const handleDelete = (id) => {
    const updated = cart.filter((el) => el.id !== id);

    setCart(updated);
  };

  return (
    <main className={styles.main}>
      <div className={styles.products}>
        {cart.map((product) => (
          <CartCard
            key={product.id}
            img={product.image}
            title={product.title}
            price={product.price}
            decrement={() => handleDecrement(product)}
            increment={() => handleIncrement(product)}
            onChange={(e) => handleOnChange(e, product)}
            onDelete={() => handleDelete(product.id)}
            amount={product.amount}
          />
        ))}
      </div>

      <section className={styles.summary}>
        <h2>Order Summary</h2>
        <div className={styles['summary-details']}>
          <p>
            Total price: <span>${summary.totalPrice.toFixed(2)}</span>
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
