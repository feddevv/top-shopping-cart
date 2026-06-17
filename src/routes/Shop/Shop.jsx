import { useLoaderData, useOutletContext } from 'react-router';
import SearchInput from '../../components/SearchInput/SearchInput';
import Card from '../../components/Card/Card';
import styles from './shop.module.css';

export async function loader() {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) throw new Error(`Error has occurred! Status code ${response.status}`);

  const data = await response.json();

  return data;
}

export default function Shop() {
  const products = useLoaderData();
  const { cart, handleAddToCart } = useOutletContext();

  return (
    <main className={styles.main}>
      <SearchInput placeholder={'Search for products'} />

      <section className={styles.products}>
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            img={product.image}
            onClick={() => handleAddToCart(product)}
          />
        ))}
      </section>
    </main>
  );
}
