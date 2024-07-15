import { ChangeEvent, KeyboardEvent, useEffect } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './SearchFilter.module.scss';

interface SearchFilterProps {
  filterText: string;
  setFilterText: (filterText: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  filterText,
  setFilterText,
}) => {
  useEffect(() => {
    const savedFilterText = localStorage.getItem('filterText');
    if (savedFilterText) {
      setFilterText(savedFilterText);
    }
  }, [setFilterText]);

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  const handleSearch = () => {
    localStorage.setItem('filterText', filterText);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
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
  );
};

export default SearchFilter;
