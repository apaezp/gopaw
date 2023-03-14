import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Footer from "../../Footer.js";
import "./VetHome.css";

function VetHome() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <div className="vetHomeContainer">
        <div className="vetTitle"> 
        <h1>Bienvenido a la pagina de veterinarios, aqui podras encontrar a tu veterinario favorito o ingresar a tu perfil de veterinario</h1>
        <div className="vetHomeButtons"> 
        {/* <Link to="/pages/VetProfile/VetPublicProfile">
          {button && (
            <button type="button" className="btn btn-dark" onClick={click}>
              Ver perfil
            </button>
          )}
        </Link> */}
         <Search />     
        </div>
        <Link to="/pages/Login">
          <button className="btn--primary" onClick={click}>
            Login
          </button>
        </Link>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default VetHome;
