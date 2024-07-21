import React, { ChangeEvent } from 'react';
import styles from './Search.module.scss';

interface SearchProps {
  setSearch: (value: string) => void;
  setPageNumber: (pageNumber: number) => void;
}

const Search: React.FC<SearchProps> = ({ setSearch, setPageNumber }) => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPageNumber(1);
    setSearch(e.target.value);
  };

  return (
    <form className={styles.form}>
      <input
        onChange={handleSearchChange}
        placeholder="Search for Character"
        type="text"
        className={styles.input}
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
