import React from 'react';

const Country = (props) => {
    const { name, population, region, area } = props.country;
    return (
        <div>
            <h1>Country name:{name.official}</h1>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;