import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';


import './App.css';
import Herder from './components/Herder';
import Footer from './components/Footer';

import Login from './pages/Login';


import Routes from './Routes';

function App() {

  const [user, setUser] = useState(null);

  if (user === null) {
    return (
     <Login />
    );
  }

  return (
    <BrowserRouter>
    <Herder />

    <Routes />

    <Footer />
    </BrowserRouter>
  );
}

export default App;
