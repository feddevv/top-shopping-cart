import { describe, expect, it, vi } from 'vitest';
import Counter from '../src/components/Counter.jsx/Counter';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Counter component', () => {
  const counterData = {
    value: 2,
    increment: vi.fn(),
    decrement: vi.fn(),
    onChange: vi.fn(),
  };

  it('should render the initial counter', () => {
    render(<Counter {...counterData} />);

    expect(screen.getByRole('button', { name: 'Decrease product' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Increase product' })).toBeInTheDocument();
    expect(screen.getByRole('spinbutton', { value: counterData.value })).toBeInTheDocument();
  });

  it('should react to increment/decrement buttons clicking', async () => {
    const user = userEvent.setup();

    render(<Counter {...counterData} />);
    const decrementBtn = screen.getByRole('button', { name: 'Decrease product' });
    const incrementBtn = screen.getByRole('button', { name: 'Increase product' });
    await user.click(decrementBtn);
    await user.click(incrementBtn);

    expect(counterData.decrement).toHaveBeenCalled();
    expect(counterData.increment).toHaveBeenCalled();
  });

  it('should react to changing the value', async () => {
    const user = userEvent.setup();

    render(<Counter {...counterData} />);
    const input = screen.getByRole('spinbutton', { value: counterData.value });
    await user.clear(input);
    await user.type(input, '15');

    expect(counterData.onChange).toHaveBeenCalledTimes(3);
  });
});
