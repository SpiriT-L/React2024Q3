import { Component } from 'react';
import { Character } from '../../types';

class Api extends Component<{}, { characters: Character[] }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  async fetchCharacters() {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      if (response.ok) {
        const data = await response.json();
        this.setState({ characters: data.results });
      } else {
        console.error('Error fetching characters:', response.status);
      }
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  }

  render() {
    const { characters } = this.state;

    return (
      <>
        <h1>Rick and Morty Characters</h1>
        <ul>
          {characters.map(character => (
            <li key={character.id}>
              <p>{character.name}</p>
              <p>Status: {character.status}</p>
              <p>Species: {character.species}</p>
              <p>Gender: {character.gender}</p>
              <img src={character.image} alt={character.name} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Api;
