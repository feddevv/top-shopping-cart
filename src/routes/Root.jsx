import React from 'react';
import Header from '../components/layout/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../components/layout/Footer/Footer';

export default function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
