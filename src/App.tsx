import 'normalize.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import Card from './components/Card/Card';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Footer from './components/Page/Footer/Footer';
import Header from './components/Page/Header/Header';
import Home from './views/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage error={''} />,
  },
  {
    path: 'characters/:contactId',
    element: <Card character={undefined} />,
  },
]);
function App() {
  return (
    <React.StrictMode>
      <Header title={''} />
      <RouterProvider router={router} />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
