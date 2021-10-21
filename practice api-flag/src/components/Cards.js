import React from 'react';

const Cards = ({country}) => {
    
  const numberFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
    
    return (
        <li className="card">
        <img src={country.flags["svg"]} alt="flag"/>
          <div className="data-container">
            <ul>
                <li>{country.name["common"]}</li>
                <li>{country.capital}</li>
                <li>Population : {numberFormat(country.population)}</li>
            </ul>
           </div>
    
        </li>
    );
};

export default Cards;