/* eslint-disable react/prop-types */
export default function SearchResults({searchResults, getWeatherData, setCoor}) {
  console.log(searchResults)
  return (
    <div className="search-results">
      <div className="search-results-container">
        {searchResults.results.map((item)=>{
          return(
            <div className="search-result" key={item.id}
            onClick={()=>{
              getWeatherData(item.latitude, item.longitude)
            }}
            >
              <h3>{item.name},</h3>
              {item?.admin1 ? <p>{item.admin1},</p>: null}
              <p>{item.country}</p>
            </div>
          )
        })}
      </div>
      <small>Showing top 10 results</small>
    </div>
  )
}
