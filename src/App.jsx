import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './Routes';
import reactLogo from './assets/React-icon.png';
import data from './assets/dota_heroes.json';
import HeroCard from './components/HeroCard';

console.log(data);

const heroList = data.map((hero) =>
  <HeroCard hero={hero} key={hero.id}/>
)

const App = () => (

    <div className="container">
      {heroList}
    </div>

);

export default App;
