import React, { useState, useEffect } from "react";
import { GiMagnifyingGlass } from "react-icons/gi";
import Modal from "react-modal";
import axios from "axios";
import "./Search.css";


function Search() {
  const [vetName, setVetName] = useState();
  const [vetList, setVetList] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const inputHandler = (e) => {
    const { id, value } = e.target;
    if (id === "vetName") {
      const toLower = value.toLowerCase();
      setVetName(toLower);
    }
  };


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  
  }

  function closeModal() {
    setIsOpen(false);
  }
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
  

  useEffect(() => {
    getVeterinarys();
  }, []);

  const validate = () => {
    if (vetName === "") {
      alert("Por favor ingrese un nombre");
      return;
    } else {
      searchVet();
    }
  };

  const searchVet = () => {
    const searchResults = vetList.filter((item) =>
      item.veterinary_name.toLowerCase().includes(vetName)
    );
    setSearchResult(searchResults);
    setVetName("");
  };
 

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
        <button className="btn-search" onClick={() => validate()}>
          Buscar
          <GiMagnifyingGlass className="magnifying-glass-icon" />
        </button>
      </div>
      <div className="cardContainer">
        <div className="cardInfoVet">
          {searchResult.map((item) => (
            <>
              <h3 className="nameVet">{item.veterinary_name}</h3>
              <h4 className="phone">{item.phone}</h4>
              <h4 className="email">{item.email}</h4>
              <button
                className="btnModal"
                onClick={() => {
                  handleReviewSearch(item.id);
                  openModal();
                }}
              >
                See reviews
              </button>

              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                className="modalReviews"
              >
                <h3>Reviews</h3>
                <div>
                  {reviews.map((item) => (
                    <table className="reviewData">
                      <tr>Fecha: {item.date}</tr>
                      <tr>Titulo: {item.title}</tr>
                      <tr>{item.content}</tr>
                      <br></br>
                    </table>
                  ))}
                </div>
                <div className="buttonContainer">
                                  <button className="btnModal" onClick={closeModal}>close</button>
                </div>
              </Modal>
            </>
          ))}
        </div>
      </div>
      <div className="allCards">
        {vetList.map((item) => (
          <div className="card">
            <h3 className="nameVet">{item.veterinary_name}</h3>
            <h4 className="phone">{item.phone}</h4>
            <h4 className="email">{item.email}</h4>
            <button
              className="btnModal"
              onClick={() => {
                handleReviewSearch(item.id);
                openModal();
              }}
            >
              Ver reviews
            </button>

            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              className="modalReviews"
            >
              <h3>Reviews</h3>
              <div>
                {reviews.map((item) => (
                  <table className="reviewData">
                    <tr>Fecha: {item.date}</tr>
                    <tr>Titulo: {item.title}</tr>
                    <tr>{item.content}</tr>
                    <br></br>
                  </table>
                ))}
              </div>
              <div className="buttonContainer">
                <button className="btnModal" onClick={closeModal}>close</button>
              </div>
              
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
