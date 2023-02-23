import React, {useState} from 'react'
import { GiMagnifyingGlass } from 'react-icons/gi'
import people from '../data'
import "./Search.css";


function Search() {
  const [search, setSearch] = useState('')    
  const [searchResults, setSearchResults] = useState([])    

  const handleSearch = (e) => {
    e.preventDefault()

    const filteredResults = people.filter(item => {
        return item.name.toLowerCase().includes(search.toLowerCase())
    } )        

    if(search === ''){
        alert('Please enter a name');
        return
    } else if (filteredResults.length === 0){
        alert('No results found');
        return
    } else {
        setSearchResults(filteredResults)
    }

    setSearch('');

};

return (
  <>
  <div className="search-card-container">  
    <div className="input-name">
      <input className="search-input" type="text" placeholder="Busca tu veterinario" value={search} onChange={(e) => setSearch(e.target.value)} />
     
      <button className="btn-search" onClick={handleSearch}>
        {" "}
        <GiMagnifyingGlass clasName="magnifying-glass-icon "/>{" "}
      </button>
    </div>

    {searchResults.map(item => (
      <div className='cardVeterinary' key={item.id}>
      <div className='imgCardVet'>
      <img className='cardImgVet'src={item.image} alt={item.name}/>
      </div>
      <div className='cardInfoVet'>
        <h3 className='nameVet'>{item.name}</h3>
        <h4 className='dateReview'>{item.date}</h4>
        <h4 className='text'>{item.text}</h4>
      </div>
  </div>
      ))}
  </div>
  </>
)
}     



export default Search;