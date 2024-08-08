'use client';
import React, { useEffect, useState } from 'react';
import Cards from '../../src/components/Card/Cards';
import InputGroup from '../../src/components/InputGroup/InputGroup';
import { Character } from '../../src/types/Interface';
import styles from './styles.module.scss';

interface EpisodeInfo {
  air_date: string;
  name: string;
}

const Episodes: React.FC = () => {
  const [id, setId] = useState<string>('1');
  const [info, setInfo] = useState<EpisodeInfo>({ air_date: '', name: '' });
  const [results, setResults] = useState<Character[]>([]);

  const api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then(res => res.json());
      setInfo(data);

      const characters = await Promise.all(
        data.characters.map((x: string) => {
          return fetch(x).then(res => res.json());
        })
      );
      setResults(characters);
    })();
  }, [api]);

  return (
    <>
      <main>
        <div className="container">
          <div className={styles.rowTitle}>
            <h2 className={styles.titleH2}>
              Episode: {''}
              <span className={styles.name}>{info.name || 'Unknown'}</span>
            </h2>
            <h5 className={styles.titleH5}>
              Air Date: {info.air_date || 'Unknown'}
            </h5>
          </div>
          <div className={styles.rowDisplay}>
            <div className={`${styles.pickEpisode}`}>
              <h4>Pick Episode</h4>
              <InputGroup setId={setId} name="Episode" total={51} />
            </div>
            <div className={styles.rowItem}>
              <div className={styles.cards}>
                <Cards results={results} page={'/character/'} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Episodes;