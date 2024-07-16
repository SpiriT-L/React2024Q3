import 'normalize.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Home from './views/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
