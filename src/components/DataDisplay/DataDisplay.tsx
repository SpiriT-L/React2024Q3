import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import Api from '../../services/api/api';
import { Character } from '../../types/Interface';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './DataDisplay.module.scss';

const DataDisplay: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    const savedFilterText = localStorage.getItem('filterText');
    if (savedFilterText) {
      setFilterText(savedFilterText);
    }
  }, []);

  const handleFetchData = (data: Character[]) => {
    setCharacters(data);
    setLoading(false);
  };

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setFilterText(inputValue);
  };

  const handleSearch = () => {
    localStorage.setItem('filterText', filterText);
    setLoading(true);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <>
      <section>
        <Input
          type="text"
          title="Search"
          placeholder="Filter the characters..."
          value={filterText}
          onChange={handleFilterChange}
          onKeyPress={handleKeyPress}
        />

        <Button className={styles.btn} onClick={handleSearch}>
          {'Save'}
        </Button>
      </section>
      <Api onFetchData={handleFetchData} />
      {loading ? (
        <p className={styles.load}>Loading...</p>
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
};

export default DataDisplay;
