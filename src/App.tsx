import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Controlled from './pages/controlled/controlled';
import Home from './pages/home/home';
import Uncontrolled from './pages/uncontrolled/uncontrolled';
import store from './store/store';
import Footer from './ui/Footer/Footer';
import Header from './ui/Header/Header';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uncontrolled" element={<Uncontrolled />} />
          <Route path="/controlled" element={<Controlled />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
