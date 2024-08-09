import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Location from '../../app/location/page';

global.fetch = vi.fn(url =>
  Promise.resolve({
    ok: true,
    json: () => {
      if (url.includes('/location/')) {
        return Promise.resolve({
          name: 'Earth (C-137)',
          type: 'Planet',
          dimension: 'Dimension C-137',
          residents: ['https://rickandmortyapi.com/api/character/1'],
        });
      }
      if (url.includes('/character/')) {
        return Promise.resolve({
          id: 1,
          name: 'Rick Sanchez',
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          gender: 'Male',
          location: { name: 'Earth (C-137)' },
          status: 'Alive',
        });
      }
      return Promise.reject(new Error('Unknown URL'));
    },
  })
) as unknown as jest.Mock;

describe('Location', () => {
  it('fetches and displays character data', async () => {
    render(<Location />);

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    });
  });

  it('displays error message on fetch failure', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        json: () => Promise.resolve({}),
      })
    ) as unknown as jest.Mock;

    render(<Location />);

    await waitFor(() => {
      expect(
        screen.getByText('Error: HTTP error! status: 404')
      ).toBeInTheDocument();
    });
  });
});
