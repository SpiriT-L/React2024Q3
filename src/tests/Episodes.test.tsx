import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Episodes from '../../app/episodes/page';

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        air_date: 'December 2, 2013',
        name: 'Pilot',
        characters: ['https://rickandmortyapi.com/api/character/1'],
      }),
  })
) as jest.Mock;

describe('Episodes', () => {
  it('renders correctly', async () => {
    render(<Episodes />);

    expect(screen.getByText('Episode:')).toBeInTheDocument();
    expect(screen.getByText('Pick Episode')).toBeInTheDocument();
  });
});
