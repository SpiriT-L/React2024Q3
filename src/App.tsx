import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Cards from './components/Card/Cards';
import Header from './components/Page/Header/Header';
import Pagination from './components/Pagination/Pagination';
import SearchFilter from './components/SearchFilter/SearchFilter';
import Search from './Search/Search';
import { Character, Info } from './types/Interface';
import Episodes from './views/Episodes/Episodes';
import Location from './views/Location/Location';
import CardDetails from './components/Card/CardDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="character/:id" element={<CardDetails />} />
        <Route path="/location" element={<Location />} />
        <Route path="/character/:id" element={<CardDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/character/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home: React.FC = () => {
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
      <section className="section">
        <div className="container">
          <div className="filter">
            <Search setPageNumber={setPageNumber} setSearch={setSearch} />
            <SearchFilter
              setSpecies={setSpecies}
              setGender={setGender}
              setStatus={setStatus}
              setPageNumber={(pageNumber: number) => setPageNumber(pageNumber)}
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="cards">
            <Cards results={results} page={'/character/'} />
          </div>
          <div className="pagination">
            <Pagination
              info={info}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
