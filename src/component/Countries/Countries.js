import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './coutries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Hallo forme Countries</h1>
            <h2>All countries in length: {countries.length}</h2>
            <h5><i>Alhamdolillha ami pereci</i></h5>
            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;