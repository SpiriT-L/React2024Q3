import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';

import { Character } from '../types/Interface';
import Card from '../components/Card/Cards';

const mockResults: Character[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    gender: 'Male',
    location: { name: 'Earth' },
    status: 'Alive',
    species: '',
    type: '',
    origin: {
      name: '',
    },
  },
  {
    id: 2,
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    gender: 'Male',
    location: { name: 'Earth' },
    status: 'Alive',
    species: '',
    type: '',
    origin: {
      name: '',
    },
  },
];

describe('Card', () => {
  it('renders character cards correctly', () => {
    render(<Card results={mockResults} page="/character/" />);

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Morty Smith')).toBeInTheDocument();
    expect(screen.getAllByText('Earth')).toHaveLength(2);
  });

  it('displays "No Characters Found :/" when results are empty', () => {
    render(<Card results={[]} page="/character/" />);
  });

  it('handles characters with missing location', () => {
    const resultsWithMissingLocation: Character[] = [
      {
        id: 3,
        name: 'Summer Smith',
        image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
        gender: 'Female',
        location: null,
        status: 'Alive',
      },
    ];

    render(<Card results={resultsWithMissingLocation} page="/character/" />);

    expect(screen.getByText('Summer Smith')).toBeInTheDocument();
    expect(screen.getByText('Unknown')).toBeInTheDocument();
  });
});
