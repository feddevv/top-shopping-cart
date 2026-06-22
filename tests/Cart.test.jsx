import { createRoutesStub, Outlet, RouterProvider } from 'react-router';
import { describe, expect, it, vi } from 'vitest';
import Cart from '../src/routes/Cart/Cart';
import { getAllByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

describe('Cart component', () => {
  const mockCartData = [
    { id: 1, title: 'Test Product 1', price: 10, amount: 2, image: 'test1.jpg' },
    { id: 2, title: 'Test Product 2', price: 20, amount: 1, image: 'test2.jpg' },
  ];

  const MockRoot = () => {
    const [cart, setCart] = useState(mockCartData);

    return <Outlet context={{ cart, setCart }} />;
  };

  const RouterStub = createRoutesStub([
    {
      path: '/',
      Component: MockRoot,
      children: [
        {
          path: '/shop',
          Component: Cart,
        },
      ],
    },
  ]);

  it('should render cards in the cart for products', () => {
    const totalPrice = mockCartData.reduce((acc, curr) => acc + curr.price * curr.amount, 0);
    const totalAmount = mockCartData.reduce((acc, curr) => acc + curr.amount, 0);

    render(<RouterStub initialEntries={['/shop']} />);

    mockCartData.forEach((el) => {
      expect(screen.getByRole('heading', { name: el.title }));
    });
    expect(screen.getAllByTestId('cart-card')).toHaveLength(mockCartData.length);
    expect(screen.getByRole('button', { name: 'Order Now' }));
    expect(screen.getByText(/total price/i)).toHaveTextContent(new RegExp(`\\$${totalPrice}`));
    expect(screen.getByText(/total amount/i)).toHaveTextContent(totalAmount);
  });

  it('should render the empty cart', () => {
    const RouterStub = createRoutesStub([
      {
        path: '/',
        Component: () => <Outlet context={{ ...mockCartData, cart: [] }} />,
        children: [
          {
            path: 'shop',
            Component: Cart,
          },
        ],
      },
    ]);

    render(<RouterStub initialEntries={['/shop']} />);

    expect(screen.queryByTestId('cart-card')).not.toBeInTheDocument();
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Order Now' }));
    expect(screen.getByText(/total price/i)).toHaveTextContent(0);
    expect(screen.getByText(/total amount/i)).toHaveTextContent(0);
  });

  it('should delete the product from the cart', async () => {
    const user = userEvent.setup();

    render(<RouterStub initialEntries={['/shop']} />);
    const button = screen.getAllByTestId('delete-button')[0];
    await user.click(button);

    expect(screen.getAllByTestId('cart-card')).toHaveLength(1);
    expect(screen.getByText(/total price/i)).toHaveTextContent(20);
    expect(screen.getByText(/total amount/i)).toHaveTextContent(1);
  });

  it('should increment the amount of the product', async () => {
    const user = userEvent.setup();

    render(<RouterStub initialEntries={['/shop']} />);
    const increment = screen.getAllByRole('button', { name: 'Increase product' })[0];
    await user.click(increment);

    expect(screen.getAllByRole('spinbutton')[0]).toHaveValue(3);
    expect(screen.getByText(/total price/i)).toHaveTextContent(50);
    expect(screen.getByText(/total amount/i)).toHaveTextContent(4);
  });

  it('should decrement the amount of the product', async () => {
    const user = userEvent.setup();

    render(<RouterStub initialEntries={['/shop']} />);
    const decrement = screen.getAllByRole('button', { name: 'Decrease product' })[0];
    await user.click(decrement);
    await user.click(decrement);

    expect(screen.getAllByRole('spinbutton')[0]).toHaveValue(1);
    expect(screen.getByText(/total price/i)).toHaveTextContent(30);
    expect(screen.getByText(/total amount/i)).toHaveTextContent(2);
  });

  it('should not decrement the amount of the product when it is 1', async () => {
    const user = userEvent.setup();

    render(<RouterStub initialEntries={['/shop']} />);
    const decrement = screen.getAllByRole('button', { name: 'Decrease product' })[1];
    await user.click(decrement);
    await user.click(decrement);

    expect(screen.getAllByRole('spinbutton')[1]).toHaveValue(1);
    expect(screen.getByText(/total price/i)).toHaveTextContent(30);
    expect(screen.getByText(/total amount/i)).toHaveTextContent(2);
  });

  it('should calculate total price and total amount properly when change the amount', async () => {
    const user = userEvent.setup();

    render(<RouterStub initialEntries={['/shop']} />);
    const input = screen.getAllByRole('spinbutton')[1];
    await user.type(input, '0');

    expect(input).toHaveValue(10);
    expect(screen.getByText(/total price/i)).toHaveTextContent(210);
    expect(screen.getByText(/total amount/i)).toHaveTextContent(11);
  });
});
