import { render, screen, waitFor } from '@testing-library/react';
import { exec } from 'child_process';
import { useEffect, useState } from 'react';
import { describe, expect, it } from 'vitest';
import useApi from './api';

describe('useApi', () => {
  it('fetches data from the API', async () => {
    function TestComponent() {
      const { loading, data } = useApi();
      const [characters, setCharacters] = useState([]);

      useEffect(() => {
        if (!loading) {
          setCharacters(data);
        }
      }, [loading, data]);

      if (loading) {
        return <div>Loading...</div>;
      }

      return <div>{characters.length} characters loaded</div>;
    }

    render(<TestComponent />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => screen.queryByText('Loading...'), { timeout: 200 });
  });
});

describe('TypeScript', () => {
  it('compiles without errors', done => {
    exec('npx tsc --noEmit', (error, _stdout, stderr) => {
      expect(error).toBe(null);
      expect(stderr).toBe('');
      done();
    });
  });
});
