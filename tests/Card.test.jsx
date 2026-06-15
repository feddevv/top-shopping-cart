import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeAll, beforeEach, expect, it, vi, vitest } from 'vitest';
import Card from '../src/components/Card/Card';

describe('Card component', () => {
  const card = {
    title: 'Test title',
    price: 'Test price',
    onClick: vi.fn(),
  };

  it('should render the initial card', () => {
    render(<Card title={card.title} price={card.price} onClick={card.onClick} />);

    expect(screen.getByRole('heading', { name: 'Test title' })).toBeInTheDocument();
    expect(screen.getByText(/Test price/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
  });

  it('should call onClick function when clicked', async () => {
    const user = userEvent.setup();

    render(<Card title={card.title} price={card.price} onClick={card.onClick} />);
    await user.click(screen.getByRole('button', { name: '+' }));

    expect(card.onClick).toHaveBeenCalled();
  });
});
