import styles from './InputGroup.module.scss';

interface InputGroupProps {
  total: number;
  name: string;
  setId: (value: string) => void;
}

const InputGroup: React.FC<InputGroupProps> = ({ total, name, setId }) => {
  return (
    <>
      <div className={styles.inputGroup}>
        <select
          onChange={e => setId(e.target.value)}
          className={styles.formSelect}
          id={name}
        >
          <option selected>Choose {name}...</option>

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
