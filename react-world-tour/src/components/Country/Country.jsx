import { useState } from 'react';
import './Country.css';
import CountryDetail from '../CountryDetail/countryDetail';

const Country =({country,handleVisitedCountry,handleVisitedFlags})=>{
    console.log(handleVisitedCountry);
    const {name,flags,population,area,cca3} =country;
    const [visited,setVisited] =useState(false);
    const handleVisited = () =>{
        // setVisited (true);
        setVisited (!visited);
    }
    // const passWithParams =()=>handleVisitedCountry(country);

    return(
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'red' :'white'}}>Name:{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code:{cca3}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            <br />
                <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited': 'Going'}</button>
            
            {/* {visited && 'I have visited this country'} */}
            {visited ?'I have visited this country.' : 'I wand to visit.'}
            <hr />
            <CountryDetail 
            country={country}>
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}

            </CountryDetail>

        </div>
    )

}
export default Country;