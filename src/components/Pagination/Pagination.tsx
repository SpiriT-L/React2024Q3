import styles from './Pagination.module.scss';
interface PaginationProps {
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}
const Pagination: React.FC<PaginationProps> = ({
  pageNumber,
  setPageNumber,
}) => {
  const next = () => {
    setPageNumber(x => x + 1);
  };

  const prev = () => {
    if (pageNumber === 1) return;

    setPageNumber(x => x - 1);
  };

  return (
    <div className="container">
      <div className={styles.pagination}>
        <button onClick={prev} className={`${styles.btnPrimary} ${styles.btn}`}>
          Prev
        </button>
        <div className={styles.number}>{pageNumber}</div>
        <button onClick={next} className={`${styles.btnPrimary} ${styles.btn}`}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
