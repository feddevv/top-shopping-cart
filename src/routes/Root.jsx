import React, { useState } from 'react';
import Header from '../components/layout/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../components/layout/Footer/Footer';

export default function Root() {
  const [cart, setCart] = useState([]);
  const productsAmount = cart.reduce((acc, curr) => acc + curr.amount, 0);

  const handleAddToCart = (product) => {
    const found = cart.find((el) => el.id === product.id);

    if (!found) {
      const updated = {
        ...product,
        amount: 1,
      };

      setCart([...cart, updated]);
    } else {
      found.amount++;
      setCart([...cart]);
    }
  };

  return (
    <>
      <Header productsAmount={productsAmount} />
      <Outlet context={{ cart, setCart, handleAddToCart }} />
      <Footer />
    </>
  );
}
