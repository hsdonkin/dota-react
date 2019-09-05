import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Routes from './Routes';

import reactLogo from './assets/React-icon.png';

const App = () => (
  <BrowserRouter>

    // header goes here
    <Routes />
    // footer goes here
  </BrowserRouter>
);

export default App;
