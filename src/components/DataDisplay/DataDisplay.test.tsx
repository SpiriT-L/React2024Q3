import { render, waitFor } from '@testing-library/react';
import { exec } from 'child_process';
import { describe, expect, it } from 'vitest';
import DataDisplay from './DataDisplay';

describe('DataDisplay', () => {
  it('renders the expected HTML tags', async () => {
    const mockApi = () =>
      Promise.resolve([
        {
          id: 1,
          name: 'Test Character',
          image: 'https://example.com/image.png',
          species: 'Human',
          status: 'Alive',
          location: { name: 'Earth' },
          origin: { name: 'Earth' },
        },
      ]);

    const { container } = render(
      <DataDisplay filterText="" useApi={mockApi} />
    );

    await waitFor(() => {
      expect(container.querySelector('section')).toBeInTheDocument();
      expect(container.querySelector('ul')).toBeInTheDocument();
      expect(container.querySelector('li')).toBeInTheDocument();
      expect(container.querySelector('h3')).toBeInTheDocument();
      expect(container.querySelector('img')).toBeInTheDocument();
      expect(container.querySelector('p')).toBeInTheDocument();
    });
  });
});

describe('TypeScript', () => {
  it('compiles without errors', () => {
    return new Promise<void>((resolve, reject) => {
      exec('npx tsc --noEmit', (error, _stdout, stderr) => {
        if (error) {
          reject(error);
        } else if (stderr) {
          reject(new Error(stderr));
        } else {
          resolve();
        }
      });
    });
  });
});

describe('Filtering', () => {
  it('checks if character name includes filter text', () => {
    const character = { name: 'Test Character' };
    const filterText = 'test';

    const result = character.name
      .toLowerCase()
      .includes(filterText.toLowerCase());

    expect(result).toBe(true);
  });
});
