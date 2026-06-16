import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Button from '../src/components/Button/Button';
import userEvent from '@testing-library/user-event';

describe('Button component', () => {
  const button = {
    title: 'Test button',
    type: 'primary',
  };

  beforeEach(() => {
    button.onClick = vi.fn();
  });

  it('should render the button component with initial data', () => {
    render(
      <Button type={button.type} onClick={button.onClick}>
        {button.title}
      </Button>,
    );

    expect(screen.getByRole('button', { name: button.title })).toBeInTheDocument();
  });

  it('should call the onClick handler when button is clicked', async () => {
    const user = userEvent.setup();

    render(
      <Button type={button.type} onClick={button.onClick}>
        {button.title}
      </Button>,
    );
    const btn = screen.getByRole('button', { name: button.title });
    await user.click(btn);

    expect(button.onClick).toHaveBeenCalled();
  });
});
