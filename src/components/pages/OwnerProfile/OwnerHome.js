import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OwnerHome.css";
import Footer from "../../Footer";

function OwnerHome() {
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
    <div className="ownerHomeContainer">
      <div className="ownerHomeButtons">
        <Link to="/pages/OwnerProfile/OwnerPublicProfile">
          <button className="buttonMostrarPerfil" onClick={click}>
            Mostrar Perfil
          </button>
        </Link>
        <Link to="/pages/Login">
          <button className="buttonLogin" onClick={click}>
            Login
          </button>
        </Link>
      </div>
     
    </div>
    <Footer />
    </>
  );
}

export default OwnerHome;
