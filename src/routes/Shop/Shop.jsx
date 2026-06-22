import { useLoaderData, useOutletContext, useSubmit } from 'react-router';
import SearchInput from '../../components/SearchInput/SearchInput';
import Card from '../../components/Card/Card';
import styles from './shop.module.css';
import { useState } from 'react';

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');

  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) throw new Error(`Error has occurred! Status code ${response.status}`);

  let data = await response.json();
  data = !q
    ? data
    : data.filter((product) => product.title.toLowerCase().includes(q.toLowerCase()));

  return { data, q };
}

export default function Shop() {
  const { data: products, q } = useLoaderData();
  const { handleAddToCart, isOpen } = useOutletContext();

  return (
    <main inert={isOpen} className={styles.main}>
      <SearchInput placeholder={'Search for products'} defaultValue={q} />

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
