import React, { Component } from "react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../GlobalStates";
import "./Review.css";
import axios from "axios";

function Review() {
  const navigate = useNavigate();
  const [authState, setAuthState] = useContext(AuthContext);
  const { id, token } = authState;
  const [showInfo, setShowInfo] = useState(false);

  const [revTitle, setRevTitle] = useState("");
  const [revContent, setRevContent] = useState("");
  const [vetId, setVetId] = useState(0);

  const getParams = useParams();
  const getVetId = getParams.id;

  const parseData = () => {
    const formatInt = parseInt(getVetId);
    setVetId(formatInt);
  };


  const showProfile =  () => {
    if (token) {
      setShowInfo(true);
      parseData();
    } else {
      setShowInfo(false);
      navigate("/pages/login");
    }
  };

  const inputHandlerRev = (e) => {
    const { id, value } = e.target;
    if (id === "revTitle") {
      setRevTitle(value);
    }
    if (id === "revContent") {
      setRevContent(value);
    }
  };

  const getReviewData = () => {
    const myDate = new Date();
    const formatDate = myDate.toLocaleString("es-CL")
    // const [day, month, year] = [
    //   myDate.getMonth(),
    //   myDate.getDate(),
    //   myDate.getFullYear(),
    // ];

    const review = {
      date: formatDate,
      title: revTitle,
      content: revContent,
      owner_id: id,
      veterinary_id: vetId,
    };
    console.log(review);
    navigate("/pages/OwnerProfile/OwnerPrivateProfile");
    axios
      .post(
        "https://backendgopaw-production.up.railway.app/registerreview",
        review
      )
      .then(() => {
        alert("Reseña Enviada!");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const logOut = () => {
    setAuthState("");
    navigate("/");
  };

  const goBack = () => {
    navigate("/pages/OwnerProfile/OwnerPrivateProfile");
  };

  useEffect(() => {
    showProfile()
    ;
  }, []);

  return (
    <div className="containerOwnerPublicProfile">
      {/* {showInfo === true && ( */}
      <div className="main-body">
        <div className="col-md-12 mb-3 d-flex flex-row ">
          <div className="card m-2 col-md-6">
            <div className="card-body">
              <div className="d-flex  flex-row justify-content-center align-items-center text-left">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Admin"
                  className="rounded-circle"
                  width="150"
                />
                <div>
                  <h4>{authState.owner_name}</h4>
                  <h6>{authState.email}</h6>
                  <h6>{authState.phone}</h6>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => goBack()}
                  >
                    Volver
                  </button>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => logOut()}
                  >
                    Salir
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card m-2 col-md-6">
            <div className="card-body ">
              <form className="revForm">
                <div>
                  <label>Titulo:</label>{" "}
                  <input
                    id="revTitle"
                    type="text"
                    value={revTitle}
                    onChange={(e) => inputHandlerRev(e)}
                  ></input>
                </div>

                <div>
                  <label>Reseña:</label>{" "}
                  <textarea
                    id="revContent"
                    type="text"
                    value={revContent}
                    onChange={(e) => inputHandlerRev(e)}
                  ></textarea>
                </div>
                <div>
                  <button onClick={() => getReviewData()}>Enviar Reseña</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <div className="card-body">
            <div className="card mb-3">
              <h6 className="boxTitle">Agendar Visita</h6>
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Nombre de Mascota</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <select
                      type="text"
                      id="petName"
                      onClick={(e) => inputHandler(e)}
                    >
                      <option>Selecciona</option>
                      {petList.map((item) => (
                        <option key={item.id} value={item.pet_name}>
                          {item.pet_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Veterinario</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <select
                      type="text"
                      id="vetName"
                      onClick={(e) => inputHandlerVet(e)}
                    >
                      <option>Selecciona</option>
                      {petList.map((item) => (
                        <option
                          key={petList.indexOf(item)}
                          value={item.veterinary_name}
                        >
                          {item.veterinary_name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <hr />
                <div className="row rowCalendar">
                  <div className="col-sm-3">
                    <h6 className="mb-2">Fecha de agendamiento</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <Calendar
                      onChange={setDate}
                      value={appoinDate}
                      className="birthCalendar"
                    />

                    <TimePicker
                      value={hourSelected}
                      onChange={setHourSelected}
                    />
                    <h4>Hora seleccionada: {hourSelected}</h4>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <button type="submit" onClick={() => getAppointmentData()}>
                      Registrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
      </div>
      {/* )} */}
    </div>
  );
}

export default Review;
