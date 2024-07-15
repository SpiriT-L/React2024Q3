import { useEffect, useState } from 'react';
import { Character } from '../../types/Interface';

const useApi = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://rickandmortyapi.com/api/character'
        );
        if (!response.ok) {
          throw new Error('Error during data retrieval');
        }
        const data = await response.json();
        setData(data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    setTimeout(fetchData, 100);
  }, []);

  return { loading, data };
};

export default useApi;
