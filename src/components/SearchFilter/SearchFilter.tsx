import './Category/Accordion.scss';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';
import styles from './SearchFilter.module.scss';

interface FiltersProps {
  setPageNumber: (pageNumber: number) => void;
  setStatus: (status: string) => void;
  setGender: (gender: string) => void;
  setSpecies: (species: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  setPageNumber,
  setStatus,
  setGender,
  setSpecies,
}) => {
  const clear = () => {
    setPageNumber(1);
    setStatus('');
    setGender('');
    setSpecies('');
    window.location.reload();
  };

  return (
    <>
      <div className={styles.filters}>
        <h3 className={styles.title}>Filter</h3>
        <h4 onClick={clear} className={styles.clearFilters}>
          Clear Filters
        </h4>
        <div
          className="accordion accordion-flush acc"
          id="accordionFlushExample"
        >
          <Status setPageNumber={setPageNumber} setStatus={setStatus} />
          <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
          <Gender setGender={setGender} setPageNumber={setPageNumber} />
        </div>
      </div>
    </>
  );
};

export default Filters;
