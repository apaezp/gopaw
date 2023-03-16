import React, { Component } from "react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../GlobalStates";
import "./OwnerPrivateProfile.css";
import jwtDecode from "jwt-decode";
import Calendar from "react-calendar";
import axios from "axios";

function OwnerPrivateProfile() {
  const navigate = useNavigate();
  const [authState, setAuthState] = useContext(AuthContext);
  const { email, phone, id } = authState;
  const [birthDate, setDate] = useState(new Date());
  const [petName, setPetName] = useState("");
  const [vetName, setVetName] = useState("");
  const [petType, setPetType] = useState("");
  const [vetList, setVetList] = useState([]);
  const [vetId, setVetId] = useState(0);

  const arrayTypes = ["Perro", "Gato", "Exotico", "Ave"]

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "petName") {
      setPetName(value);
    }
    if (id === "petType") {
      setPetType(value);
    }
    if (id === "vetName") {
      setVetName(value);
      const veterinaryId = vetList.find(
        (item) => item.veterinary_name === vetName
      );
      const idVet = veterinaryId.id;
      setVetId(idVet);
    }
  };

  const formatedBirthDate = birthDate.toLocaleDateString("es-CL");

  const petData = {
    pet_name: petName,
    type: petType,
    birth_date: formatedBirthDate,
    owner_id: id,
    veterinary_id: vetId
  };
  console.log(petData);

  useEffect(() => {
    const getVetList = async () => {
      const endpoint = "/veterinarys";
      const urlServer = "https://backendgopaw-production.up.railway.app";
      const { data } = await axios.get(urlServer + endpoint);
      setVetList(data);
    };
    getVetList();

    if (!authState.token || isTokenExpired(authState.token)) {
      navigate("/pages/Login");
    }
  }, [authState.token, vetName]);

  const logOut = () => {
    setAuthState({});
    navigate("/");
  };

  const isTokenExpired = (token) => {
    if (!token) {
      return true;
    }
    try {
      // Decodificar el token utilizando la librería jwt-decode.
      const decodedToken = jwtDecode(token);

      // Obtener la fecha actual en milisegundos.
      const currentTime = Date.now() / 1000;

      // Si la fecha actual es mayor que la fecha de expiración del token, se considera que ha expirado.
      return decodedToken.exp < currentTime;
    } catch (error) {
      // Si ocurre un error al decodificar el token, se considera que ha expirado.
      return true;
    }
  };

  // const validateNAme = () => {
  //   if(petName ===""){
  //     alert("Por favor ingresar nombre")
  //   }else{
  //     sendForm()
  //   }
  // }

  // const sendForm = async() => {
  //   console.log(petData)

  //   await axios.post(
  //         "https://backendgopaw-production.up.railway.app/registerpet",
  //         petData
  //       )
  //       .then(() => {
  //         alert("Registro de mascota exitoso");
  //       })
  //       .catch((error) => {
  //         alert(error);
  //       });
  // }
  return (
    <div className="containerOwnerPublicProfile">
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
                  <div className="col-sm-9 text-secondary">{email}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{phone}</div>
                </div>
              </div>
            </div>
          </div>
          <form className="col-md-8">
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
                      onChange={(e) => handleInputChange(e)}
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
                      onChange={(e) => handleInputChange(e)}
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
                      onChange={(e) => handleInputChange(e)}
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
                    <Calendar onChange={setDate} value={birthDate} className="birthCalendar" />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <button type="submit" onClick="{() => validateNAme()}">Registrar</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OwnerPrivateProfile;
