import React from "react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../GlobalStates";
import "./OwnerPrivateProfile.css";
import Calendar from "react-calendar";
import axios from "axios";

function OwnerPrivateProfile() {
  const navigate = useNavigate();
  const [authState, setAuthState] = (useContext(AuthContext));
  const { id, token } = authState;

  const [showInfo, setShowInfo] = useState(false);
  const arrayTypes = ["Perro", "Gato", "Exotico", "Ave"];

  const [birthDate, setDate] = useState(new Date());
  const formatedBirthDate = birthDate.toLocaleDateString("es-CL");

  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");

  const [vetList, setVetList] = useState([]);
  const [vetId, setVetId] = useState();

  const [petList, setPetList] = useState([]);

  console.log(authState.account_type)

  const showProfile = () => {
    if (token && authState.account_type === "owner") {
      setShowInfo(true);
      getVetList();
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
    // console.log(data)
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

  const goVetHome = () => {
    navigate("/pages/VetProfile/VetHome")
  }
  const goAppointment = () => {
    navigate("/Appointment")
  }

  const goReview = (id) => {
    navigate(`/Review/${id}`)
  }
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
                        onClick={() => goAppointment()}
                      >
                        Agendar Visita
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
                <hr />
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mascotas:</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <ul>
                        {petList.map((item) => (
                          <li key={item.id}>
                            Nombre: {item.pet_name}.
                            <br></br>-Tipo: {item.type}.
                            <br></br>-Nacimiento: {item.birth_date}.
                            <br></br>-Veterinario: {item.veterinary_name}.{" "}<button className="" onClick={() => goReview(item.veterinary_id)}>Escribir Reseña</button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <hr />
                  <div className="row rowCalendar">
                    <div className="col-sm-3">
                      <button onClick={()=> goVetHome()}>Ver Veterinarios</button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="card-body">
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
                              <option key={item.id}>
                                {item.veterinary_name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <hr />
                      <div className="row rowCalendar" >
                        <div className="col-sm-3">
                          <h6 className="mb-2">Fecha de nacimiento</h6>
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
            {/* <div className="col-md-8">
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
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default OwnerPrivateProfile;
