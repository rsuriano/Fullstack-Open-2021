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
      {filteredCountries
        .map(country => 
        <CountryItem key={country.name} countryData={country}/>
        )}
    </div>
    )
  }

  if (filteredCountries.length === 1){
    const country = filteredCountries[0]
    return(
      <CountryDetail countryData={country}/>
    )
  }
  else{
    return(null)
  }

}

const CountryDetail = ({countryData}) => {
  const weather_api_key = process.env.REACT_APP_API_KEY
  const [weather, setWeather] = useState({error: ''})

  useEffect( ()=> {
    axios
      .get('http://api.weatherstack.com/current?access_key='+weather_api_key+'&query='+countryData.capital)
      .then(response => setWeather(response.data))
  }, [weather_api_key, countryData.capital])

  return(
    <div>
        <h1>{countryData.name}</h1>
        <p>Capital: {countryData.capital} </p>
        <p>Population: {countryData.population}</p>
        <div>Languages: {countryData.languages.map(lang => <ul key={lang.name}> {lang.name} </ul> )}</div>
        <p>Flag: </p>
        <img src={countryData.flag} alt={countryData.name + "'s Flag"} style={{width:200}}></img>
        <p>Weather in {countryData.capital}: {Object.keys(weather).includes('error') ? '*' : weather.current.temperature}° Celsius</p>
      </div>
  )
} 

const CountryItem = ({countryData}) => {
  const [showInfo, setShowInfo] = useState(false)
  const handleShowInfo = () => {
    showInfo === true ? setShowInfo(false) : setShowInfo(true)
  }

  return(
    <ul> 
      {countryData.name} <button onClick={handleShowInfo}> {showInfo? "hide": "show"}</button>
      {showInfo? <CountryDetail countryData={countryData}/> : <></>} 
    </ul>
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
