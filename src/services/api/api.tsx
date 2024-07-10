import { Component } from 'react';
import { Character } from '../../types/Interface';

class Api extends Component<{}, { loading: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    // Simulate a delay of 500ms (0.5 seconds) before fetching data
    setTimeout(() => {
      this.fetchData();
    }, 500);
  }

  fetchData = async (): Promise<Character[]> => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      if (!response.ok) {
        throw new Error('Error during data retrieval');
      }
      const data = await response.json();
      this.setState({ loading: false });
      return data.results;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  render() {
    const { loading } = this.state;

    return (
      <div>
        {loading ? <p>Loading...</p> : null}
        {/* Rest of your component logic */}
      </div>
    );
  }
}

export default Api;
