import { render, waitFor } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import { useEffect } from 'react';
import { test } from 'vitest';
import useApi from './api';

fetchMock.mock('https://rickandmortyapi.com/api/character', {
  results: [{ id: 1, name: 'Rick Sanchez' }],
});

const TestComponent = () => {
  const { loading, data } = useApi();

  useEffect(() => {
    if (!loading) {
      document.body.textContent = JSON.stringify(data);
    }
  }, [loading, data]);

  return null;
};

test('useApi performs GET request and returns data', async () => {
  render(<TestComponent />);

  await waitFor(() =>
    expect(document.body.textContent).toBe(
      JSON.stringify([{ id: 1, name: 'Rick Sanchez' }])
    )
  );
});
