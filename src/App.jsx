import "./App.css"

import {useState} from "react"

import Search from "./search"
import SearchResults from "./searchResults"
import Loader from "./loader"



function App() {

  const [searchQuerry, setSearchQuerry] = useState("")
  const [searchResults, setSearchResults] = useState()
  const [loading, setLoading] = useState(false)

  function getSearchResults(searchQuerry){
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

  console.log(searchQuerry)
  return (
    <>
      <nav>
        <h1>Weather App</h1>
        <Search
          searchQuerry = {searchQuerry}
          setSearchQuerry = {setSearchQuerry}
          getSearchResults = {getSearchResults}
          setSearchResults={setSearchResults}
        />
      </nav>
      {searchResults?.results && !loading ? <SearchResults searchResults = {searchResults}/> : null }
      {loading ? <Loader/> : null}
    </>
  )
}

export default App
