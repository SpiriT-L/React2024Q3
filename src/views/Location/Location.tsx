import React, { useEffect, useState } from 'react';
import Cards from '../../components/Card/Cards';
import InputGroup from '../../components/InputGroup/InputGroup';
import { Character } from '../../types/Interface';
import styles from './Location.module.scss';

interface LocationInfo {
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}

const Location: React.FC = () => {
  const [id, setId] = useState<string>('1');
  const [info, setInfo] = useState<LocationInfo>({
    name: '',
    type: '',
    dimension: '',
    residents: [],
  });
  const [results, setResults] = useState<Character[]>([]);

  const api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then(res => res.json());
      setInfo(data);

      const residents = await Promise.all(
        data.residents.map((x: string) => {
          return fetch(x).then(res => res.json());
        })
      );
      setResults(residents);
    })();
  }, [api]);
  console.log(results);
  return (
    <div className="container">
      <div className={styles.rowTitle}>
        <h2 className={styles.titleH2}>
          Location: {''}
          <span className={styles.name}>{info.name || 'Unknown'}</span>
        </h2>
        <h5 className={styles.titleH5}>
          Dimension: {info.dimension || 'Unknown'}
        </h5>
        <h5 className={styles.titleH5}>Type: {info.type || 'Unknown'}</h5>
      </div>
      <div className={styles.rowDisplay}>
        <div className={`${styles.pickLocation}`}>
          <h4>Pick Location</h4>
          <InputGroup setId={setId} name="Location" total={126} />
        </div>
        <div className={styles.rowItem}>
          <div className="cards">
            <Cards results={results} page={'/location/'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
