import { useEffect, useState } from 'react';
import './App.scss';
import Cards from './components/Card/Cards';
import Pagination from './components/Pagination/Pagination';
import SearchFilter from './components/SearchFilter/SearchFilter';
import Search from './Search/Search';
import { Character, Info } from './types/Interface';

const App: React.FC = () => {
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
  console.log(info);
  console.log(results);
  console.log(setPageNumber);
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
      <div className="container">
        <div className="title">
          <h1 className="h1">Rick & Morty</h1>
        </div>
      </div>
      <div className="container">
        <section className="section">
          <div className="filter">
            <Search setPageNumber={setPageNumber} setSearch={setSearch} />
            <SearchFilter
              setSpecies={setSpecies}
              setGender={setGender}
              setStatus={setStatus}
              setPageNumber={(pageNumber: number) => setPageNumber(pageNumber)}
            />
          </div>
        </section>
        <section className="section">
          <div className="cards">
            <Cards results={results} />
          </div>
          <div className="pagination">
            <Pagination
              info={info}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
