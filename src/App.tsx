import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import CardDetails from './components/Card/CardDetails';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Footer from './components/Page/Footer/Footer';
import Header from './components/Page/Header/Header';
import Episodes from './views/Episodes/Episodes';
import { Home } from './views/Home/Home';
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

export default App;
