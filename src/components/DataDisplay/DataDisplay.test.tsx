import { render } from '@testing-library/react';
import { exec } from 'child_process';
import { describe, expect, it } from 'vitest';
import DataDisplay from './DataDisplay';

test('renders without crashing', () => {
  render(<DataDisplay filterText="" />);
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
