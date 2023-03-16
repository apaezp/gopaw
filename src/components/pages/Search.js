import React, { useState } from 'react';
import { GiMagnifyingGlass } from 'react-icons/gi';
import axios from 'axios';
import './Search.css';

function Search() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);  
  const [index, setIndex] = useState(0);
  const [vetInfo, setVetInfo] = useState([]);
  const [reviews, setReviews] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (search === '') {
      alert('Please enter a name');
      return;
    }

    const urlServer = 'https://backendgopaw-production.up.railway.app';
    const endpoint = `/veterinarys?name=${search}`;

    try {
      const { data } = await axios.get(urlServer + endpoint);
      setSearchResults(data);
    } catch ({ response: { data: message } }) {
      alert(message + ' 🙁');
      console.log(message);
    }

    setSearch('');
  };

  const handleReviewSearch = async (veterinary_id) => {
    const urlServer = 'https://backendgopaw-production.up.railway.app';
    const endpoint = `/reviews?veterinary_id=${veterinary_id}`;

    try {
      const { data } = await axios.get(urlServer + endpoint);
      setReviews(data);
    } catch ({ response: { data: message } }) {
      alert(message + ' 🙁');
      console.log(message);
    }
  };

  const searchResult = searchResults.find(({ veterinary_name }) =>
    veterinary_name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredReviews = reviews.filter((review) => review.veterinary_id === vetInfo[index].id);
  const reviewContent = filteredReviews.length > 0 ? filteredReviews[0].content : '';

  return (
    <div className="search-card-container">
      <div className="input-name">
        <input
          className="search-input"
          type="text"
          placeholder="Busca tu veterinario"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="btn-search" onClick={handleSearch}>
          <GiMagnifyingGlass className="magnifying-glass-icon" />
        </button>
      </div>

      {searchResult && (
        <div className="cardVeterinary">
          <div className="imgCardVet">
            <img
              className="cardImgVet"
              src={searchResult.image}
              alt={searchResult.veterinary_name}
            />
          </div>
          <div className="cardInfoVet">
            <h3 className="nameVet">{searchResult.veterinary_name}</h3>
            <h4 className="phone">{searchResult.phone}</h4>
            <h4 className="review">{searchResult.review}</h4>
            <button
              className="btn-reviews"
              onClick={() => {
                handleReviewSearch(searchResult.id);
                setIndex(0);
                setVetInfo([searchResult]);
              }}
            >
              See reviews
            </button>
          </div>
        </div>
      )}

      {reviews.length > 0 && (
        <div className="reviewResults">
          <h3>Reviews:</h3>
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <h4>{review.content}</h4>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}


export default Search;
