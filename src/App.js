/*

//-------------------module 1 and 2----------------//

import { useEffect, useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Hallo countries</h1>
      <LoadCountries></LoadCountries>
    </div>
  );
}
function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h1>All countries: {countries.length}</h1>
      {
        countries.map(country => <Country
          country={country}
          key={country.cca3}
        ></Country>)
      }
    </div>
  )
}

function Country(props) {
  const { name, population, area } = props.country;
  return (
    <div>
      <h1>COuntry name: {name.common}</h1>
      <p>Population: {population}</p>
      <p>Area: {area}</p>
    </div>
  )
}

export default App;

*/


//------------------ module 3 ---------------//


import React from 'react';
import './App.css';
import Countries from './component/Countries/Countries';
import Footer from './component/Footer/Footer';

const App = () => {
  return (
    <div className='App'>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
};

export default App;