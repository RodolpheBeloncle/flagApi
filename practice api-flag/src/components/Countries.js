import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';

const Countries = () => {
    const [data,setData] = useState([]);
    const [sortedData,setSortedData] = useState([])
    const [playOnce,setPlayOnce] = useState(true);
    const [rangeValue,setRangeValue] = useState(40);
    const [selectedRadio,setSelectedRadio] = useState('')
    const radios = ['Africa',"America","Asia","Europe","Oceania"]

    // fetch Data from Api request countries
    useEffect(()=>{
      if(playOnce){
        axios
        .get('https://restcountries.com/v3.1/all')
        .then((res) =>  {
        setData(res.data)
        setPlayOnce(false)
        });
      }

        const sortedCountry = () => {
          // Transform an array in object from data Api
          const countryObj = Object.keys(data).map((i) => data[i]);

          const sortedArray = countryObj.sort((a,b) =>{
            // tries décroissant
            return b.population - a.population
          });
          sortedArray.length = rangeValue;
          setSortedData(sortedArray)
         
        };
        sortedCountry();
        
    },[data,rangeValue,playOnce]);// => relaunch the useeffect if changed state
   
    // NB child's components inherited from parent's component 
    return (
      <div className="data-container">
        <div className="sort-container">
        <input type="range" min="1" max="40" value={rangeValue}
        onChange={(e)=> setRangeValue(e.target.value)}
        />
        <ul>
          {radios.map(radio => {
            return(
            <li key={radio}>
              <input 
              type="radio" 
              value={radio} 
              id={radio}
              checked={radio === selectedRadio} 
              onChange={(e)=> setSelectedRadio(e.target.value)}/>
              <label htmlFor="radio">{radio}</label>
            </li>

          );
          })}
        </ul>
        </div>
        <div className="cancel">
       
        {selectedRadio && <h5 onClick={()=> setSelectedRadio("")}>annuler recherche</h5> }
        </div>
        <ul className="countries-list">
        {sortedData.filter((country) => country.region.includes(selectedRadio)).map((country) => (
            // left country transfer to country's Card value right (props cards)
           <Cards key={country.name["common"]} country={country}/>
           
        ))}
        </ul>
      </div>
            
    );
};

export default Countries;