import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';

const Countries = () => {
    const [data,setData] = useState([]);

    // fetch Data from Api request countries
    useEffect(()=>{
        axios
        .get('https://restcountries.com/v3.1/all')
        .then((res) => setData(res.data))
        console.log(data)
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