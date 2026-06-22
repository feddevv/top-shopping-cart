import React from 'react';
import Hero from './Hero/Hero';
import ProductSection from './ProductSection/ProductSection';
import { useLoaderData, useNavigation, useOutletContext } from 'react-router';

export async function loader() {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) throw new Error(`Error has occurred! Status code ${response.status}`);

  const data = await response.json();

  return data;
}

export default function Main() {
  const data = useLoaderData();
  const { handleAddToCart, isOpen } = useOutletContext();

  return (
    <main inert={isOpen}>
      <Hero />
      <ProductSection products={data} handleAddToCart={handleAddToCart} />
    </main>
  );
}
