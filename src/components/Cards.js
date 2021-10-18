import React from 'react';

const Cards = ({country}) => {
    return (
        <li className="card">
        <img src={country.flags["svg"]} alt="flag"/>
        <div>
        <ul className="data-container">
        <li>{country.name["common"]}</li>
        <li>{country.capital}</li>
        <li>Population : {country.population}</li>
        
        </ul>


        </div>
    
        </li>
    );
};

export default Cards;