'use client';
import React, { useEffect, useState } from 'react';
import Cards from '../../src/components/Card/Cards';
import InputGroup from '../../src/components/InputGroup/InputGroup';
import { Character } from '../../src/types/Interface';
import styles from './styles.module.scss';

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
  const [error, setError] = useState<string | null>(null);

  const api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(api);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setInfo(data);

        const residents = await Promise.all(
          data.residents.map((x: string) => fetch(x).then(res => res.json()))
        );
        setResults(residents);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    };

    fetchData();
  }, [api]);

  return (
    <>
      <main>
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
              <div className={styles.cards}>
                {error ? (
                  <p className={styles.error}>Error: {error}</p>
                ) : (
                  <Cards results={results} page={'/character/'} />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Location;
