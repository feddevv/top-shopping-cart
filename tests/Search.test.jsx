import { getByLabelText, getByRole, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SearchInput from '../src/components/SearchInput/SearchInput';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router';

describe('Search component', () => {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        element: <SearchInput action={'/'} placeholder="Search for products" defaultValue={''} />,
      },
    ],
    { initialEntries: ['/'] },
  );

  it('should render the initial search', () => {
    render(<RouterProvider router={router} />);

    expect(screen.getByPlaceholderText('Search for products')).toBeInTheDocument();
  });

  it('should allow users to search', async () => {
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);
    const input = screen.getByPlaceholderText('Search for products');
    await user.type(input, 'Some data');

    expect(input).toHaveValue('Some data');
  });
});
