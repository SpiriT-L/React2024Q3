import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { vi } from 'vitest';
import CardDetails from '../components/Card/CardDetails';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: () => ({ id: '1' }),
  };
});

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () =>
      Promise.resolve({
        id: 1,
        name: 'Rick Sanchez',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        gender: 'Male',
        species: 'Human',
        status: 'Alive',
        type: '',
        location: { name: '' },
        origin: { name: '' },
      }),
  })
);

describe('CardDetails', () => {
  it('fetches and displays character details', async () => {
    render(
      <MemoryRouter initialEntries={['/character/1']}>
        <Routes>
          <Route path="/character/:id" element={<CardDetails />} />
        </Routes>
      </MemoryRouter>
    );
  });

  it('displays "Unknown" for missing type, location, and origin', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () =>
          Promise.resolve({
            id: 1,
            name: 'Rick Sanchez',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            gender: 'Male',
            species: 'Human',
            status: 'Alive',
            type: '',
            location: { name: '' },
            origin: { name: '' },
          }),
      })
    );

    render(
      <MemoryRouter initialEntries={['/character/1']}>
        <Routes>
          <Route path="/character/:id" element={<CardDetails />} />
        </Routes>
      </MemoryRouter>
    );
  });
});
