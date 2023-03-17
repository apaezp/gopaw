import React, { useState, useEffect } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import axios from "axios";
import "./Search.css";

function Search() {
  const [vetName, setVetName] = useState();
  const [vetList, setVetList] = useState([]);
  const [button, setButton] = useState("false");
  const [vetInfo, setVetInfo] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const inputHandler = (e) => {
    const { id, value } = e.target;
    if (id == "vetName") {
      const toLower = value.toLowerCase();
      setVetName(toLower);
    }
  };
  console.log(vetName);
  const getVeterinarys = async () => {
    const urlServer = "https://backendgopaw-production.up.railway.app";
    const endpoint = `/veterinarys`;

    try {
      const { data } = await axios.get(urlServer + endpoint);
      setVetList(data);
    } catch (error) {
      alert("Bad response" + error);
    }
  };
  console.log(vetList);

  useEffect(() => {
    getVeterinarys();
  }, []);

  const searchVet = () => {
    if (vetName === "") {
      alert("Por favor ingrese un nombre");
      return;
    } else {
      const searchResults = vetList.filter((item) =>
        item.veterinary_name.toLowerCase().includes(vetName)
      );
      setSearchResult(searchResults);
    }

    setVetName("");
  };

  console.log(searchResult);

  const handleReviewSearch = async (id) => {
    const urlServer = "https://backendgopaw-production.up.railway.app";
    const endpoint = `/review/${id}`;

    try {
      const { data } = await axios.get(urlServer + endpoint);
      setReviews(data);
    } catch ({ response: { data: message } }) {
      alert(message + " 🙁");
      console.log(message);
    }
  };

  // const searchResult = vetList.find(({ veterinary_name }) =>
  //   veterinary_name.toLowerCase().includes(vetName.toLowerCase())
  // );

  // const filteredReviews = reviews.filter(
  //   (review) => review.veterinary_id === vetInfo[index].id
  // );
  // const reviewContent =
  //   filteredReviews.length > 0 ? filteredReviews[0].content : "";

  return (
    <div className="search-card-container">
      <div className="input-name">
        <input
          className="search-input"
          type="text"
          placeholder="Busca tu veterinario"
          id="vetName"
          onChange={(e) => inputHandler(e)}
          value={vetName}
        />
        <button className="btn-search" onClick={() => searchVet()}>
          <GiMagnifyingGlass className="magnifying-glass-icon" />
        </button>
      </div>
      <div className="cardContainer">
      <div className="cardVeterinary">
        {/* <div className="imgCardVet">
          <img
              className="cardImgVet"
              src={searchResult.image}
              alt={searchResult.veterinary_name}
            /> 
        </div> */}
        <div className="cardInfoVet">
          {searchResult.map((item) => (
            <>
              <h3 className="nameVet">{item.veterinary_name}</h3>
              <h4 className="phone">{item.phone}</h4>
              <h4 className="email">{item.email}</h4>
              <button
                className="btn-reviews"
                onClick={() => {
                  handleReviewSearch(item.id);
                }}
              >
                See reviews
              </button>

              {reviews.length == 0 ? alert("No se encontraron reviews"): (
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
            </>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Search;
