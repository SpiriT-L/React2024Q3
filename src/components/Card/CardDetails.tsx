import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './CardDetails.module.scss';

interface Character {
  id: number;
  name: string;
  image: string;
  gender: string;
  species: string;
  status: string;
  type: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
}

const CardDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [fetchData, updateFetchedData] = useState<Character>({
    id: 0,
    name: '',
    image: '',
    gender: '',
    species: '',
    status: '',
    type: '',
    location: { name: '' },
    origin: { name: '' },
  });

  const { name, image, location, origin, gender, species, status, type } =
    fetchData;

  console.log(location?.name);
  console.log(origin?.name);

  const api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then(res => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className={styles.detail}>
        <div key={id} className={styles.cardsItem}>
          <h2 className={styles.title}>{name}</h2>
          <img className={styles.img} src={image} alt={name} />
          <div className={styles.description}>
            {(() => {
              if (status === 'Dead') {
                return (
                  <div className={`${styles.badge} ${styles.dead}`}>
                    {status}
                  </div>
                );
              } else if (status === 'Alive') {
                return (
                  <div className={`${styles.badge} ${styles.active}`}>
                    {status}
                  </div>
                );
              } else {
                return (
                  <div className={`${styles.badge} ${styles.unknown}`}>
                    {status}
                  </div>
                );
              }
            })()}
            <p className={styles.context}>
              Gender:
              <span> {gender}</span>
            </p>
            <p className={styles.context}>
              Species:
              <span> {species}</span>
            </p>
            <p className={styles.context}>
              Type:
              <span> {type || 'Unknown'}</span>
            </p>
            <p className={styles.context}>
              Location:
              <span> {location?.name || 'Unknown'}</span>
            </p>
            <p className={styles.context}>
              Origin:
              <span> {origin?.name || 'Unknown'}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
