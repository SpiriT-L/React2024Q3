import { render } from '@testing-library/react';
import { test } from 'vitest';
import Err from './Error';

test('Err component throws error', async () => {
  const originalError = console.error;
  console.error = () => {};

  try {
    expect(() => render(<Err />)).toThrow('Error!!!');
  } finally {
    console.error = originalError;
  }
});
