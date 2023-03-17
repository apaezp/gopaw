import React, { Component } from "react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../GlobalStates";
import "./OwnerPrivateProfile.css";
import Calendar from "react-calendar";
import axios from "axios";

function OwnerPrivateProfile() {
  const navigate = useNavigate();
  const [authState, setAuthState] = useContext(AuthContext);
  const { id, token } = authState;
  const [showInfo, setShowInfo] = useState(false);
  const [petList, setPetList] = useState([]);

  const [appoinDate, setDate] = useState(new Date());
  const formatedAppointmenthDate = appoinDate.toLocaleDateString("es-CL");
  // console.log(formatedAppointmenthDate);

  const [vetId, setVetId] = useState();
  const [petId, setPetId] = useState();

  const showProfile = () => {
    if (token) {
      setShowInfo(true);
      getPetList();
    } else {
      setShowInfo(false);
      navigate("/pages/login");
    }
  };

  const getPetList = async () => {
    const endpoint = `/pet/${id}`;
    const urlServer = "https://backendgopaw-production.up.railway.app";
    const { data } = await axios.get(urlServer + endpoint);
    setPetList(data);
    console.log(petList);
  };

  const inputHandler = (e) => {
    const { id, value } = e.target;
    if (id === "petName") {
    const result = petList.find((item) => item.pet_name === value);
    const myPetId = result.id
    setPetId(myPetId)
    }
  };

  const inputHandlerVet = (e) => {
    const {id, value} = e.target;
    if (id === "vetName") {
      const result2 = petList.find((item) => item.veterinary_name === value);
      const myVetId = result2.veterinary_id
      setVetId(myVetId)
    
    }
  }


  const getAppointmentData = () => {

    const appointmentData = {
      date: formatedAppointmenthDate,
      pet_id: petId,
      veterinary_id: vetId,
    };

    console.log(appointmentData);
    axios
      .post(
        "https://backendgopaw-production.up.railway.app/registerappointment",
        appointmentData
      )
      .then(() => {
        alert("Reserva exitosa!");
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
    showProfile();

   
  }, []);

  return (
    <div className="containerOwnerPublicProfile">
      {showInfo === true && (
      <div className="main-body">
        <div className="col-md-12 mb-3 d-flex flex-row ">
          <div className="card m-2 col-md-6  d-flex  flex-row justify-content-center align-items-center">
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
              <div className="">
                <div className="col-sm-12 text-secondary">
                  <ul>
                    {petList.map((item) => (
                      <li key={item.id}>
                        Nombre: {item.pet_name}.<br></br>-Nacimiento:{" "}
                        {item.birth_date}.<br></br>-Veterinario:{" "}
                        {item.veterinary_name}.
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>{authState.owner_name}</h4>
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => goAppointment()}
                      >
                        Volver
                      </button>
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => logOut()}
                      >
                        Salir
                      </button>
                    </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="card-body">
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
                      <option key={item.id} value={item.pet_name}>{item.pet_name}</option>
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
                      <option key={petList.indexOf(item)} value={item.veterinary_name}>{item.veterinary_name}</option>
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
        </div>
      </div>
       )}
    </div>
  );
}

export default OwnerPrivateProfile;
