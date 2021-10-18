import React from 'react';

const Cards = ({country}) => {
    return (
        <li className="card">
        <img src={country.flags["svg"]} alt="flag"/>
          <div className="data-container">
            <ul>
                <li>{country.name["common"]}</li>
                <li>{country.capital}</li>
                <li>Population : {country.population}</li>
            </ul>
           </div>
    
        </li>
    );
};

export default Cards;