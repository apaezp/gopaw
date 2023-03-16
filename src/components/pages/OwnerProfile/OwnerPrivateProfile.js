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
  const arrayTypes = ["Perro", "Gato", "Exotico", "Ave"];

  const [birthDate, setDate] = useState(new Date());
  const formatedBirthDate = birthDate.toLocaleDateString("es-CL");

  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");

  const [vetList, setVetList] = useState([]);
  const [vetId, setVetId] = useState();


  const showProfile = () => {
    if (token) {
      setShowInfo(true);
      getVetList();
    } else {
      setShowInfo(false);
      navigate("/pages/login");
    }
  };

  const getVetList = async () => {
    const endpoint = "/veterinarys";
    const urlServer = "https://backendgopaw-production.up.railway.app";
    const { data } = await axios.get(urlServer + endpoint);
    setVetList(data);
  };

  const getVetId = (value) => {
    const veterinaryId = vetList.find((item) => item.veterinary_name === value);
    const idVet = veterinaryId.id;
    setVetId(idVet);
  };

  const inputHandler = (e) => {
    const { id, value } = e.target;
    if (id === "petName") {
      setPetName(value);
    }
    if (id === "petType") {
      setPetType(value);
    }
    if (id === "vetName") {
      getVetId(value);
    }
  };

  const getPetData = () => {
    const petData = {
      pet_name: petName,
      type: petType,
      birth_date: formatedBirthDate,
      owner_id: id,
      veterinary_id: vetId,
    };
    axios
      .post(
        "https://backendgopaw-production.up.railway.app/registerpet",
        petData
      )
      .then(() => {
        alert("Registro de mascota exitoso");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const logOut = () => {
    setAuthState("");
    navigate("/");
  };

  useEffect(() => {
    showProfile();
  }, []);

  return (
    <div className="containerOwnerPublicProfile">
      {showInfo === true && (
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>{authState.owner_name}</h4>
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => logOut()}
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {authState.owner_name}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {authState.email}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {authState.phone}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <h6 className="boxTitle">Agregar Mascota</h6>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Nombre</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        id="petName"
                        onChange={(e) => inputHandler(e)}
                        value={petName}
                      ></input>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Tipo</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <select
                        type="text"
                        id="petType"
                        onChange={(e) => inputHandler(e)}
                      >
                        <option>Selecciona</option>
                        {arrayTypes.map((item) => (
                          <option key={item}>{item}</option>
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
                        onChange={(e) => inputHandler(e)}
                      >
                        <option>Selecciona</option>
                        {vetList.map((item) => (
                          <option key={item.id}>{item.veterinary_name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Fecha de nacimiento</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <Calendar
                        onChange={setDate}
                        value={birthDate}
                        className="birthCalendar"
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <button type="submit" onClick={() => getPetData()}>
                        Registrar
                      </button>
                    </div>
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
