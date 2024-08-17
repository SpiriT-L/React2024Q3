import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Controlled from './pages/controlled/controlled';
import Home from './pages/home/home';
import Uncontrolled from './pages/uncontrolled/uncontrolled';
import store from './store/store';
// import Uncontrolled from './pages/uncontrolled/uncontrolled';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uncontrolled" element={<Uncontrolled />} />
          <Route path="/controlled" element={<Controlled />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
