import './SearchFilter.module.scss';
import styles from './SearchFilter.module.scss';

interface FilterBtnProps {
  name: string;
  index: number;
  items: string;
  task: (items: string) => void;
  setPageNumber: (pageNumber: number) => void;
}

const FilterBtn: React.FC<FilterBtnProps> = ({
  name,
  index,
  items,
  task,
  setPageNumber,
}) => {
  return (
    <div className={styles['filter-btn']}>
      <div className="form-check">
        <input
          onClick={() => {
            setPageNumber(1);
            task(items);
          }}
          className="form-check-input"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="form-check-label" htmlFor={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterBtn;
