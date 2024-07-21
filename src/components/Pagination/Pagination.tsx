import React from 'react';
import ReactPaginate from 'react-paginate';
import { Info } from '../../types/Interface';
import styles from './Pagination.module.scss';

interface PaginationProps {
  info: Info | undefined;
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  info,
  pageNumber,
  setPageNumber,
}) => {
  return (
    <div className="container">
      <div className={styles.pagination}>
        <ReactPaginate
          previousLabel={'Prev'}
          nextLabel={'Next'}
          forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
          className={styles.pagination}
          pageCount={info?.pages || 0}
          nextClassName={`${styles.btnPrimary} ${styles.btn}`}
          nextLinkClassName={styles.nextLink}
          previousLinkClassName={styles.previousLink}
          previousClassName={`${styles.btnPrimary} ${styles.btn}`}
          activeClassName={styles.active}
          activeLinkClassName={styles.activeLink}
          pageClassName={styles.number}
          pageLinkClassName={styles.pageLink}
          breakLinkClassName={styles.breakLink}
          onPageChange={data => {
            setPageNumber(data.selected + 1);
          }}
        />
      </div>
    </div>
  );
};

export default Pagination;
