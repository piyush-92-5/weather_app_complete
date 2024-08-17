import "./App.css"

import {useState} from "react"

import Search from "./search"
import SearchResults from "./searchResults"
import Loader from "./loader"
import WeatherDash from "./weatherDash"


function App() {

  const [searchQuerry, setSearchQuerry] = useState("")
  const [searchResults, setSearchResults] = useState()
  const [loading, setLoading] = useState(false)
  const [weatherData, setWeatherData] = useState()

  function getSearchResults(searchQuerry){
    setWeatherData()
    console.log("getSearch Function")
    setLoading(true)
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchQuerry}&count=10&language=en&format=json`)
    .then((data)=> data.json())
    .then((data)=>{
      setSearchQuerry("")
      setLoading(false)
      setSearchResults(data)
    })
  }

  function getWeatherData(lat, lon){
    setLoading(true)
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,precipitation_probability,wind_direction_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,wind_speed_10m_max&timezone=auto`)
    .then(data => data.json())
    .then((data)=> {
      setSearchResults()
      setWeatherData(data)
      console.log(weatherData)
    })
    setLoading(false)
  }

  console.log(searchQuerry)
  return (
    <>
      <nav>
        <Search
          searchQuerry = {searchQuerry}
          setSearchQuerry = {setSearchQuerry}
          getSearchResults = {getSearchResults}
          setSearchResults = {setSearchResults}
        />
      </nav>
      {searchResults?.results && !loading ?
        <SearchResults 
          searchResults = {searchResults}
          getWeatherData = {getWeatherData}
        /> 
        : null 
      }
      {loading ? <Loader/> : null}
      {weatherData?.current && !loading ? <WeatherDash weatherData = {weatherData}/> : null}
    </>
  )
}

export default App
