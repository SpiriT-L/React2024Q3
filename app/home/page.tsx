'use client';
import { useEffect, useState } from 'react';
import Button from '../../src/components/Button/Button';
import Cards from '../../src/components/Card/Cards';
import Err from '../../src/components/ErrorBoundary/Error';
import Pagination from '../../src/components/Pagination/Pagination';
import Search from '../../src/components/Search/Search';
import SearchFilter from '../../src/components/SearchFilter/SearchFilter';
import { Character, Info } from '../../src/types/Interface';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
  const [newErr, setNewErr] = useState(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [fetchData, updateFetchedData] = useState<{
    info: Info;
    results: Character[];
  }>({
    info: { count: 0, pages: 0, next: '', prev: '' },
    results: [],
  });
  const [search, setSearch] = useState<string>('');
  const { info, results } = fetchData;
  const [status, setStatus] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [species, setSpecies] = useState<string>('');

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      const response = await fetch(api);
      const data: { info: Info; results: Character[] } = await response.json();
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <>
      <main className="main">
        {newErr && <Err />}
        <section className="section">
          <div className="container">
            <div className="filter">
              <Search setPageNumber={setPageNumber} setSearch={setSearch} />
              <SearchFilter
                setSpecies={setSpecies}
                setGender={setGender}
                setStatus={setStatus}
                setPageNumber={(pageNumber: number) =>
                  setPageNumber(pageNumber)
                }
              />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className={styles.cards}>
              <Cards results={results} page={'/character/'} />
            </div>

            <div className="pagination">
              <Pagination
                info={info}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
              />
            </div>
            <Button
              className="btn"
              onClick={() => {
                setNewErr(true);
              }}
            >
              Error
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};