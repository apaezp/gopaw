import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./TopVetReviews.css";
import axios from "axios";

const TopVetReviews = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [vetInfo, setVetInfo] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [reviewContent, setReviewContent] = useState("");
  const { veterinary_name, phone } = vetInfo[index] || {};

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getRandomPerson = () => {
    let randomIndex = getRandomIntInclusive(0, vetInfo.length - 1);
    if (randomIndex === index) {
      randomIndex = index - 1;
    }
    setIndex(randomIndex);
  };

  const filterReviews = () => {
    const filteredReviews = reviews.filter(
      (item) => item.veterinary_id === vetInfo[index].id
    );
    setFiltered(filteredReviews);
    if (filteredReviews.length) {
      const { content } = filteredReviews[0];
      setReviewContent(content);
    }
  };

  const getReviewData = async () => {
    const urlServer = "https://backendgopaw-production.up.railway.app";
    let endpoint = `/reviews`;
    const response = await axios.get(urlServer + endpoint);

    const getReviews = response.data;
    setReviews(getReviews);
  };

  const getVets = async () => {
    const urlServer = "https://backendgopaw-production.up.railway.app";
    let endpoint = `/veterinarys`;
    const vets = await axios.get(urlServer + endpoint);
    const getVets = vets.data;
    setVetInfo(getVets);
  };

  const goVets = () => {
    navigate("/pages/VetProfile/VetHome");
  };

  useEffect(() => {
    getVets();
    getReviewData();
  }, []);

  useEffect(() => {
    filterReviews();
  }, [index, reviews]);

  return (
    <article className="review">
      <div>
        <h1 className="title">Reviews de Veterinarios</h1>
      </div>
      <div className="img-container">
        {/* <img src={image || 'https://via.placeholder.com/150'} alt={id} className="person-img" /> */}
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{veterinary_name}</h4>
      <p className="phone">{phone}</p>
      {reviews.length > 1 && <h4>{reviewContent}</h4>}
      <div className="button-container">
        <button className="prev-btn" onClick={getRandomPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={getRandomPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={() => goVets()}>
        Ver más sobre nuestros veterinarios
      </button>
    </article>
  );
};

export default TopVetReviews;

