import './App.scss';
import SearchFilter from './components/SearchFilter/SearchFilter';

function App() {
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
            <SearchFilter />
          </div>
        </section>
        <section className="section">
          <div className="cards">
            <div className="card">Card</div>
            <div className="card">Card</div>
            <div className="card">Card</div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
