import { Component } from 'react';
import { Character } from '../../types/Interface';

class Api extends Component<{}, {}> {
  fetchData = async (): Promise<Character[]> => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      if (!response.ok) {
        throw new Error('Error during data retrieval');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  render() {
    return null;
  }
}

export default Api;
