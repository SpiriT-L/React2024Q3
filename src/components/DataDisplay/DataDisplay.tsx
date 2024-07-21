import useApi from '../../services/api/api';
import styles from './DataDisplay.module.scss';

interface DataDisplayProps {
  filterText: string;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ filterText }) => {
  const { data: characters, loading } = useApi();

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <>
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
          <div id="detail"></div>
        </section>
      )}
    </>
  );
};

export default DataDisplay;
