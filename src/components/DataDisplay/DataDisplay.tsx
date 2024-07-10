import { Component, ChangeEvent, KeyboardEvent } from 'react';
import Api from '../../services/Api';
import { Character } from '../../types/Interface';
import styles from './DataDisplay.module.scss';

class DataDisplay extends Component<
  {},
  { characters: Character[]; loading: boolean; filterText: string }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      characters: [],
      loading: true,
      filterText: '',
    };
  }

  componentDidMount() {
    const savedFilterText = localStorage.getItem('filterText');
    if (savedFilterText) {
      this.setState({ filterText: savedFilterText });
    }
    this.fetchData();
  }

  fetchData = async () => {
    const api = new Api();
    const characters = await api.fetchData();
    this.setState({ characters, loading: false });
  };

  handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    this.setState({ filterText: inputValue });
  };

  handleSearch = () => {
    localStorage.setItem('filterText', this.state.filterText);
  };

  handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  };

  render() {
    const { characters, loading, filterText } = this.state;
    const filteredCharacters = characters.filter(character =>
      character.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
      <>
        <section>
          <input
            type="text"
            placeholder="Filter the characters..."
            value={filterText}
            onChange={this.handleFilterChange}
            onKeyPress={this.handleKeyPress}
          />
          <button onClick={this.handleSearch}>Search</button>
        </section>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <section className={styles.section__dataDisplay}>
            <ul className={styles.items}>
              {filteredCharacters.map(character => (
                <li className={styles.item} key={character.id}>
                  <h3>{character.name}</h3>
                  <img
                    src={character.image}
                    alt={character.name}
                    className={styles.img}
                  />
                  <p className={styles.name}>
                    Species:
                    <span> ({character.species})</span>
                  </p>
                  <p className={styles.name}>
                    Status: <span> {character.status}</span>
                  </p>
                  <p className={styles.name}>
                    Location:
                    <span> {character.location.name}</span>
                  </p>
                  <p className={styles.name}>
                    Origin:
                    <span> {character.origin.name}</span>
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </>
    );
  }
}

export default DataDisplay;
