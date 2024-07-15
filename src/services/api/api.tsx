import React, { useEffect, useState } from 'react';
import { Character } from '../../types/Interface';

interface ApiProps {
  onFetchData: (data: Character[]) => void;
}

const Api: React.FC<ApiProps> = ({ onFetchData }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 500);
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      if (!response.ok) {
        throw new Error('Error during data retrieval');
      }
      const data = await response.json();
      setLoading(false);
      onFetchData(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return <div>{loading ? <p>Loading...</p> : null}</div>;
};

export default Api;
