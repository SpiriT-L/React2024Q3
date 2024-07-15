import { render, screen, waitFor } from '@testing-library/react';
import { useEffect, useState } from 'react';
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
