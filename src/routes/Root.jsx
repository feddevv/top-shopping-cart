import React, { useState } from 'react';
import Header from '../components/layout/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../components/layout/Footer/Footer';

const mockProducts = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack',
    price: 109.95,
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60',
    onClick: () => {},
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts',
    price: 22.3,
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60',
    onClick: () => {},
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    image:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60',
    onClick: () => {},
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    image:
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop&q=60',
    onClick: () => {},
  },
];

export default function Root() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Header />
      <Outlet context={{ cart, setCart }} />
      <Footer />
    </>
  );
}
