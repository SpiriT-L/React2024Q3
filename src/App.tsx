import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Button from './components/Button/Button';
import CardDetails from './components/Card/CardDetails';
import Cards from './components/Card/Cards';
import Err from './components/ErrorBoundary/Error';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Footer from './components/Page/Footer/Footer';
import Header from './components/Page/Header/Header';
import Pagination from './components/Pagination/Pagination';
import SearchFilter from './components/SearchFilter/SearchFilter';
import Search from './Search/Search';
import { Character, Info } from './types/Interface';
import Episodes from './views/Episodes/Episodes';
import Location from './views/Location/Location';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="character/:id" element={<CardDetails />} />
        <Route path="/location" element={<Location />} />
        <Route path="/character/:id" element={<CardDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/character/:id" element={<CardDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

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
        <ErrorBoundary>
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
        </ErrorBoundary>
      </main>
    </>
  );
};

export default App;
