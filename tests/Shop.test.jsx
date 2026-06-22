import { useState } from 'react';
import { createMemoryRouter, Outlet, RouterProvider } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import Shop from '../src/routes/Shop/Shop';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Shop component', () => {
  const mockData = [
    { id: 1, title: 'Test Product 1', price: 10, image: 'test1.jpg' },
    { id: 2, title: 'Test Product 2', price: 20, image: 'test2.jpg' },
    { id: 3, title: 'Test Product 3', price: 1.5, image: 'test3.jpg' },
    { id: 4, title: 'Test Product 4', price: 100.99, image: 'test4.jpg' },
    { id: 5, title: 'Test Product 5', price: 30, image: 'test5.jpg' },
    { id: 6, title: 'Test Product 6', price: 45, image: 'test6.jpg' },
    { id: 7, title: 'Test Product 7', price: 55.55, image: 'test7.jpg' },
    { id: 8, title: 'Test Product 8', price: 33.33, image: 'test8.jpg' },
    { id: 9, title: 'Test Product 9', price: 5.4, image: 'test9.jpg' },
    { id: 10, title: 'Test Product 10', price: 70.85, image: 'test10.jpg' },
  ];

  const MockRoot = () => {
    return <Outlet context={{ handleAddToCart: vi.fn(), isOpen: false }} />;
  };

  const mockLoader = vi.fn(({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get('q');

    if (q === '1') {
      return {
        data: [
          { id: 1, title: 'Test Product 1', price: 10, image: 'test1.jpg' },
          { id: 10, title: 'Test Product 10', price: 70.85, image: 'test10.jpg' },
        ],
      };
    } else if (!q) return { data: mockData };
    else return { data: [] };
  });

  const router = createMemoryRouter([
    {
      path: '/',
      element: <MockRoot />,
      children: [
        {
          index: true,
          element: <Shop />,
          loader: mockLoader,
        },
      ],
    },
  ]);

  it('should load the data and render the cards with products', () => {
    render(<RouterProvider router={router} />);

    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(mockData.length);
  });

  it('should search for products on query', async () => {
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);
    const search = screen.getByRole('searchbox');
    await user.type(search, '1{Enter}');

    expect(screen.getAllByRole('article')).toHaveLength(2);
    expect(screen.getByText(mockData[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockData[9].title)).toBeInTheDocument();
    expect(mockLoader).toHaveBeenCalled();
  });
});
