export default function SearchResults({searchResults}) {
  console.log(searchResults)
  return (
    <div className="search-results">
      <div className="search-results-container">
        {searchResults.results.map((item)=>{
          return(
            <div className="search-result" key={item.id}>
              <h3>{item.name},</h3>
              <p>{item.admin1},</p>
              <p>{item.country}</p>
            </div>
          )
        })}
      </div>
      <small>Showing top 10 results</small>
    </div>
  )
}
