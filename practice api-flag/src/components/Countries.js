import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';

const Countries = () => {
    const [data,setData] = useState([]);
    const [sortedData,setSortedData] = useState([])

    // fetch Data from Api request countries
    useEffect(()=>{
      //===========

  

      //================
        axios
        .get('https://restcountries.com/v3.1/all')
        .then((res) =>  setData(res.data))
        const sortedCountry = () => {
          // Create an array of object from data Api
          const countryObj = Object.keys[data].map((i) => data[i]);
          const sortedArray = countryObj.sort((a,b) =>{
            // tries décroissant
            return b.population - a.population
          });
          console.log(sortedArray)
        }
    },[]);
   
    // NB child's components inherited from parent's component 
    return (
      <div className="data-container">
        <ul className="countries-list">
        {data.map((country) => (
            // left country transfer to country's value right (props cards)
           <Cards key={country.name["common"]} country={country}/>
           
        ))}
        </ul>
      </div>
            
    );
};

export default Countries;