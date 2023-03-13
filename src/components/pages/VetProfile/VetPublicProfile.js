import React, { useEffect, useState } from "react";
import {  ModificarPerfil } from "../../ModificarPerfil";
import { PerfilCitas } from "../../PerfilCitas";
import "./vetpublicprofile.css";
import { PerfilReseña } from "../../PerfilReseña";
import axios from "axios";
function VetPublicProfile() {
  const [activeButton, setActiveButton] = useState('Inicio');
  const [vet, setVet] = useState({})
  const viewProfile = async () => {
    const id = localStorage.getItem("idVet");
    const urlServer = "http://localhost:8080";
    const endpoint = `/veterinary/${id}`;
    try {
      const { data } = await axios.get(urlServer + endpoint, { params: { id } });
      const vetData = data[0];
      setVet(vetData);      
    } catch ({ response: { data: message } }) {
      alert(message + " 🙁");
      console.log(message);
    }
  };
  useEffect(() => {
    viewProfile();
  }, [])
  
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-lg-4">
          <div className="profile-card-4 z-depth-3">
            <div className="card">
              <div className="card-body text-center bg-primary rounded-top">
                <div className="user-box">
                  <img
                    src="https://images.mubicdn.net/images/cast_member/310395/cache-118877-1598256308/image-w856.jpg?size=800x"
                    alt="user avatar"
                  />
                </div>
                <h5 className="mb-1 text-white">{vet.veterinary_name}</h5>
                {/* <h6 className="text-light">Zombie Killer</h6> */}
              </div>
              <div className="card-body">
                <ul className="list-group shadow-none">
                  <li className="list-group-item">
                    <div className="list-icon">
                      <i className="fa fa-phone-square"></i>
                    </div>
                    <div className="list-details">
                      <span>{vet.phone}</span>
                      <small>Celular</small>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-icon">
                      <i className="fa fa-envelope"></i>
                    </div>
                    <div className="list-details">
                      <span>{vet.email}</span>
                      <small>Email</small>
                    </div>
                  </li>
                  {/* <li className="list-group-item">
                    <div className="list-icon">
                      <i className="fa fa-globe"></i>
                    </div>
                    <div className="list-details">
                      <span>www.example.com</span>
                      <small>Website Address</small>
                    </div>
                  </li> */}
                </ul>
                <div className="row text-center mt-4">
                  <div className="col p-2">
                    <h4 className="mb-1 line-height-5">154</h4>
                    <small className="mb-0 font-weight-bold">Citas</small>
                  </div>
                  <div className="col p-2">
                    <h4 className="mb-1 line-height-5">5</h4>
                    <small className="mb-0 font-weight-bold">Reseñas</small>
                  </div>
                </div>
              </div>
              {/* <div className="card-footer text-center">
                <a className="btn-social btn-facebook waves-effect waves-light m-1">
                  <i className="fa fa-facebook"></i>
                </a>
                <a className="btn-social btn-google-plus waves-effect waves-light m-1">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a className="list-inline-item btn-social btn-behance waves-effect waves-light">
                  <i className="fa fa-behance"></i>
                </a>
                <a className="list-inline-item btn-social btn-dribbble waves-effect waves-light">
                  <i className="fa fa-dribbble"></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card z-depth-3">
            <div className="card-body">
              <ul className="nav nav-pills nav-pills-primary nav-justified">
                {/* <li className="nav-item">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => setActiveButton('Inicio')}
                  >
                    Perfil <span className="hidden-xs"></span>
                  </button>
                </li> */}
                <li className="nav-item">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => setActiveButton('Citas')}
                  >
                    Mis citas <span className="hidden-xs"></span>
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => setActiveButton('Reseña')}
                  >
                    Reseñas <span className="hidden-xs"></span>
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => setActiveButton('Contrasena')}
                  >
                    Modificar Perfil <span className="hidden-xs"></span>
                  </button>
                </li>
              </ul>
              <div className="tab-content p-3">
                {/* {activeButton === 'Inicio' &&
                 <InicioPerfil />
                 } */}
                {activeButton === 'Citas' && 
                <div>
                    <PerfilCitas/>
                </div>
                }
                {activeButton === 'Reseña' && 
                <div>
                    <PerfilReseña/>
                </div>
                }
                {activeButton === 'Contrasena' &&
                 <div>
                    <ModificarPerfil />
                 </div>
                 }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VetPublicProfile;
