import { Component } from 'react';
import { Character } from '../../types';
import Card from '../../components/Cards/Card/Card';
import styles from './Api.module.scss';

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
      const response = await fetch(
        'https://rickandmortyapi.com/api/character/'
      );
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
        <Card />

        <ul className={styles.items}>
          {characters.map(character => (
            <li key={character.id} className={styles.item}>
              <h3>{character.name}</h3>
              <img src={character.image} alt={character.name} />
              <p>
                <span className={styles.name}>Status:</span>
                <span className={styles.result}> {character.status}</span>
              </p>
              <p>
                <span className={styles.name}>Species:</span>
                <span className={styles.result}> {character.species}</span>
              </p>
              <p>
                <span className={styles.name}>Gender:</span>
                <span className={styles.result}> {character.gender}</span>
              </p>
              <p>
                <span className={styles.name}>Origin:</span>
                <span className={styles.result}> {character.origin.name}</span>
              </p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Api;
