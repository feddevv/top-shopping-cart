import React, { useState } from 'react';
import Header from '../components/layout/Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/layout/Footer/Footer';
import PopUp from '../components/PopUp/PopUp';
import Spinner from '../components/Spinner/Spinner';

export default function Root() {
  const [cart, setCart] = useState([]);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const productsAmount = cart.reduce((acc, curr) => acc + curr.amount, 0);

  const handleOnClose = (product) => {
    setIsPopUpOpen(false);
  };

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

    setIsPopUpOpen(true);
  };

  return (
    <>
      <Header productsAmount={productsAmount} />
      {useNavigation().state === 'loading' ? (
        <Spinner />
      ) : (
        <Outlet context={{ cart, setCart, handleAddToCart }} />
      )}
      <Footer />

      {isPopUpOpen && (
        <PopUp key={crypto.randomUUID()} isOpen={isPopUpOpen} onClose={handleOnClose} />
      )}
    </>
  );
}
