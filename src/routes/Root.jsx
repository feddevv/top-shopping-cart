import React from 'react';
import Header from '../components/layout/Header';
import { Outlet } from 'react-router';
import Footer from '../components/layout/Footer';

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
