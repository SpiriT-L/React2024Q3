import styles from './page.module.scss';

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

async function fetchCharacter(id: string): Promise<Character> {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = await res.json();
  return character;
}

const CardDetails = async ({ params }: { params: { id: string } }) => {
  const character = await fetchCharacter(params.id);
  const { id, name, image, location, origin, gender, species, status, type } =
    character;

  return (
    <main className="main">
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
    </main>
  );
};

export default CardDetails;
