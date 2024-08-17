
export default function Search({searchQuerry, setSearchQuerry, getSearchResults, setSearchResults}) {
return (
	<div>
	<form onSubmit={
		(e)=>{
			e.preventDefault()
			console.log("HAHA")
			setSearchResults(getSearchResults(searchQuerry))
	}} >
		<input type="text" placeholder="Enter city name (press enter)" value={searchQuerry} onChange={(e)=> setSearchQuerry(e.target.value)} />
	</form>
	</div>
)
}
