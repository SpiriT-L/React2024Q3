import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import CardDetails from './components/Card/CardDetails';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Footer from './components/Page/Footer/Footer';
import Header from './components/Page/Header/Header';
import ThemeProvider from './context/ThemeProvider';
import './index.css';
import './index.scss';
import Episodes from './views/Episodes/Episodes';
import { Home } from './views/Home/Home';
import Location from './views/Location/Location';
import NotFoundPage from './views/NotFoundPage/NotFoundPage';

function App() {
  return (
    <>
      <Router>
        <ThemeProvider>
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
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
