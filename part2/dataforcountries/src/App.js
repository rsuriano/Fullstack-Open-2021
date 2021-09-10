import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Countries = ({countryList, filter}) => {
  const filteredCountries = countryList.filter(country => country.name.toLowerCase().includes(filter))

  if (countryList.length === filteredCountries.length || filteredCountries.length===0){ 
    return (null) 
  }
  
  if (filteredCountries.length > 10){
      return(<div>Too many matches. Specify another filter.</div>)
  }

  if (filteredCountries.length < 10 && filteredCountries.length > 1){
    return(
    <div>
      {filteredCountries.map(country => <ul key={country.name}> {country.name} </ul>)}
    </div>
    )
  }

  if (filteredCountries.length === 1){
    const country = filteredCountries[0]
    return(
      <Country 
        name={country.name} 
        capital={country.capital} 
        population={country.population}
        languages={country.languages}
        flag={country.flag}
        ></Country>
    )
  }
  else{
    return(null)
  }

}

const Country = ({name, capital, population, languages, flag}) => {
  return(
    <div>
        <h1>{name}</h1>
        <p>Capital: {capital} </p>
        <p>Population: {population}</p>
        <div>Languages: {languages.map(lang => <ul key={lang.name}> {lang.name} </ul> )}</div>
        <p>Flag: </p>
        <img src={flag} alt={name + "'s Flag"}></img>
      </div>
  )
} 

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterValue, setFilterValue] = useState([])

  const handleFilter = (event) => setFilterValue(event.target.value.toLowerCase())

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => { setCountries(response.data) })
  }, [])

  return (
    <div>
      Find countries:
      <input onChange={handleFilter} />
      <Countries countryList={countries} filter={filterValue} />
    </div>
  );
}

export default App;
