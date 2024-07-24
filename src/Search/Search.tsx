import React, { ChangeEvent, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import styles from './Search.module.scss';

interface SearchProps {
  setSearch: (value: string) => void;
  setPageNumber: (pageNumber: number) => void;
}

const Search: React.FC<SearchProps> = ({ setSearch, setPageNumber }) => {
  const [searchQuery, setSearchQuery] = useLocalStorage('searchQuery', '');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPageNumber(1);
    setSearch(e.target.value);
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (searchQuery) {
      setSearch(searchQuery);
    }
  }, [searchQuery]);

  return (
    <form className={styles.form}>
      <input
        onChange={handleSearchChange}
        placeholder="Search for Character"
        type="text"
        className={styles.input}
        value={searchQuery}
      />
      <button
        onClick={e => {
          e.preventDefault();
        }}
        className={`${styles.btn} ${styles.btnPrimary}`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
