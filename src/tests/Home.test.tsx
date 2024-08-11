import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Home } from '../../app/home/page';

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

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        info: { count: 1, pages: 1, next: null, prev: null },
        results: [
          {
            id: 1,
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
          },
        ],
      }),
  })
) as unknown as jest.Mock;

describe('Home Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders Home component', () => {
    render(<Home />);
  });
});
