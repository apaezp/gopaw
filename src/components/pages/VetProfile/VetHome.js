import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Footer from "../../Footer.js";
import "./VetHome.css";

function VetHome() {
 
  return (
    <>
      <div className="vetHomeContainer">
        <div className="vetTitle"> 
        <h1>Bienvenido a la pagina de veterinarios, aqui podras encontrar a tu veterinario favorito</h1>
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
        
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default VetHome;
