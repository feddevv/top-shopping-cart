import { getByLabelText, getByRole, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SearchInput from '../src/components/SearchInput/SearchInput';
import userEvent from '@testing-library/user-event';

describe('Search component', () => {
  it('should render the initial search', () => {
    render(<SearchInput action={'/'} placeholder="Search for products" />);

    expect(screen.getByPlaceholderText('Search for products')).toBeInTheDocument();
  });

  it('should allow users to search', async () => {
    const user = userEvent.setup();

    render(<SearchInput action={'/'} placeholder="Search for products" />);
    const input = screen.getByPlaceholderText('Search for products');
    await user.type(input, 'Some data');

    expect(input).toHaveValue('Some data');
  });
});
