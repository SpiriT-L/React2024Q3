import styles from './InputGroup.module.scss';

const InputGroup = ({ total, name, setId }) => {
  return (
    <>
      <div className={styles.inputGroup}>
        <select
          onChange={e => setId(e.target.value)}
          className={styles.formSelect}
          id={name}
        >
          <option selected>Choose Episode...</option>

          {[...Array(total).keys()].map(x => {
            return (
              <option key={x + 1} value={x + 1}>
                {name} - {x + 1}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default InputGroup;
