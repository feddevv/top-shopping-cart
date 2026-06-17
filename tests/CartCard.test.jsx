import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CartCard } from '../src/components/Card/Card';
import userEvent from '@testing-library/user-event';

describe('CartCard component', () => {
  const cardData = {
    product: {
      title: 'Test title',
      price: 100,
      image: 'https://placehold.co/600x400',
      amount: 3,
    },
    onDecrement: vi.fn(),
    onIncrement: vi.fn(),
    onChange: vi.fn(),
    onDelete: vi.fn(),
  };

  beforeEach(() => {
    cardData.onDecrement = vi.fn();
    cardData.onIncrement = vi.fn();
    cardData.onChange = vi.fn();
    cardData.onDelete = vi.fn();
  });

  it('should render the initial card with the given product', () => {
    render(
      <CartCard
        product={cardData.product}
        decrement={cardData.onDecrement}
        increment={cardData.onIncrement}
        onChange={cardData.onChange}
        onDelete={cardData.onDelete}
      />,
    );

    expect(screen.getByRole('heading', { name: cardData.product.title })).toBeInTheDocument();
    expect(screen.getByText(`$${cardData.product.price}`)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: cardData.product.title })).toBeInTheDocument();
    expect(screen.getByRole('spinbutton', { value: cardData.product.amount })).toBeInTheDocument();
  });

  it('should react to increment/decrement buttons clicking', async () => {
    const user = userEvent.setup();

    render(
      <CartCard
        product={cardData.product}
        decrement={cardData.onDecrement}
        increment={cardData.onIncrement}
        onChange={cardData.onChange}
        onDelete={cardData.onDelete}
      />,
    );

    const decrement = screen.getByRole('button', { name: '–' });
    const increment = screen.getByRole('button', { name: '+' });

    await user.click(decrement);
    await user.click(increment);

    expect(cardData.onDecrement).toHaveBeenCalled();
    expect(cardData.onIncrement).toHaveBeenCalled();
  });

  it('should react to changing the amount by typing into the input field', async () => {
    const user = userEvent.setup();

    render(
      <CartCard
        product={cardData.product}
        decrement={cardData.onDecrement}
        increment={cardData.onIncrement}
        onChange={cardData.onChange}
        onDelete={cardData.onDelete}
      />,
    );

    const input = screen.getByRole('spinbutton', { value: cardData.product.amount });

    await user.type(input, '10');

    expect(cardData.onChange).toHaveBeenCalledTimes(2);
  });

  it('should react to deleting button', async () => {
    const user = userEvent.setup();

    render(
      <CartCard
        product={cardData.product}
        decrement={cardData.onDecrement}
        increment={cardData.onIncrement}
        onChange={cardData.onChange}
        onDelete={cardData.onDelete}
      />,
    );
    const button = screen.getByTestId('delete-button');
    await user.click(button);

    expect(cardData.onDelete).toHaveBeenCalled();
  });
});
