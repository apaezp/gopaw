import React, { useState } from 'react';
import { GiMagnifyingGlass } from 'react-icons/gi';
import axios from 'axios';
import './Search.css';

function Search() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [reviewResults, setReviewResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (search === '') {
      alert('Please enter a name');
      return;
    } else {
      const urlServer = 'https://backendgopaw-production.up.railway.app';
      const endpoint = `/veterinarys?name=${search}`;
      try {
        const { data } = await axios.get(urlServer + endpoint);
        setSearchResults(data);
      } catch ({ response: { data: message } }) {
        alert(message + ' 🙁');
        console.log(message);
      }
    }

    setSearch('');
  };

  const handleReviewSearch = async (veterinaryName) => {
    const urlServer = 'https://backendgopaw-production.up.railway.app';
    const endpoint = `/reviews?vet_name=${veterinaryName}`;
    try {
      const { data } = await axios.get(urlServer + endpoint);
      setReviewResults(data);
    } catch ({ response: { data: message } }) {
      alert(message + ' 🙁');
      console.log(message);
    }
  };

  const searchResult = searchResults.find(({ veterinary_name }) =>
    veterinary_name.toLowerCase().includes(search.toLowerCase())
  );

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
              onClick={() => handleReviewSearch(searchResult.veterinary_name)}
            >
              See reviews
            </button>
          </div>
        </div>
      )}

      {reviewResults.length > 0 && (
        <div className="reviewResults">
          <h3>Reviews:</h3>
          <ul>
            {reviewResults.map((review) => (
              <li key={review.id}>
                <p>{review.comment}</p>
                <p>{review.rating}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
