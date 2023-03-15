import React from "react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../GlobalStates";
import "./OwnerPrivateProfile.css";
import jwtDecode from "jwt-decode";

function OwnerPrivateProfile() {

  const navigate = useNavigate();
  const [authState] = useContext(AuthContext);
  const { email, phone, id, account_type } = authState;

  console.log(authState)

  useEffect(() => {
      if( !authState.token || isTokenExpired(authState.token)){
          navigate('/pages/Login')
      }
  },[authState.token])

  const logOut = () => {
    delete authState.token
    navigate('/')
  }

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
  }



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
                    <button className="btn btn-outline-primary" onClick={() => logOut()}>Log Out</button>
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
        </div>
      </div>
    </div>
  );
}

export default OwnerPrivateProfile;
