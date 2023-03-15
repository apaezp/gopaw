import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./TopVetReviews.css";
import axios from "axios";

const TopVetReviews = () => {
  const [index, setIndex] = useState(0);
  const [vetInfo, setVetInfo] = useState([]);

  const { id, veterinary_name, phone, image } = vetInfo[index] || {};

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getRandomPerson = () => {
    let randomIndex = getRandomIntInclusive(0, vetInfo.length - 1);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(randomIndex);
  };

  const viewProfile = async () => {
    const urlServer = "https://backendgopaw-production.up.railway.app";
    const endpoint = `/veterinarys`;
    try {
      const { data } = await axios.get(urlServer + endpoint);
      setVetInfo(data);
    } catch ({ response: { data: message } }) {
      alert(message + " 🙁");
      console.log(message);
    }    
  };

  useEffect(() => {
    viewProfile();
  }, []);

  return (
    <article className="review">
      <div>
        <h1>Reviews de Veterinarios</h1>
      </div>
      <div className="img-container">
        <img src={image || 'https://via.placeholder.com/150'} alt={id} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{veterinary_name}</h4>
      <p className="job">{phone}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={getRandomPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={getRandomPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={getRandomPerson}>
        Más Reviews
      </button>
    </article>
  );
};

export default TopVetReviews;
