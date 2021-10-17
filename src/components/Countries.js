import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Countries = () => {
    const [data,setData] = useState([]);

    // fetch Data from Api request countries
    useEffect(()=>{
        axios
        .get('https://restcountries.com/v3.1/all')
        .then((res) => setData(res.data.flatMap(element => 
        {return [element.capital,element.flag]})));
        console.log(data)
    },[]);
    

    return (
        <div>
        <p>{data}</p>
        <button >Say Aurevoirt</button>
            
        </div>
    );
};

export default Countries;