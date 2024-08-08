import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Home } from '../views/Home/Home';

describe('Home component', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText(/Error/i)).toBeInTheDocument();
  });

  it('fetches and displays data', async () => {
    render(<Home />);
    expect(await screen.findByText(/Rick Sanchez/i)).toBeInTheDocument();
  });

  it('updates search state', () => {
    render(<Home />);
    const searchInput = screen.getByPlaceholderText(/Search/i);
    fireEvent.change(searchInput, { target: { value: 'Morty' } });
    expect(searchInput.value).toBe('Morty');
  });
});
