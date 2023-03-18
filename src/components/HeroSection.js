import React from "react";
import "../App.css";
import { Button } from "./Button";
import Video from "./assets/video/herosection.mp4";
import "./HeroSection.css";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../GlobalStates";



function HeroSection() {

  const [authState] = useContext(AuthContext);
  console.log(authState)
  
  let name = ""

  if(authState.owner_name){
      name = authState.owner_name
  }

  return (
    <div className="hero-container"> 
    <video src= {Video} autoPlay loop muted />                      
          <h1>“¡Bienvenido {name} a nuestra página de contacto para veterinarios y dueños de mascotas!”</h1>
          <p> Esto es GoPaw!</p>
          <div className="hero-btns">
          <Link to='/ContactPage'>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"             
            >
              ¿Quiénes somos?
            </Button>
          </Link>

          <Link to='/pages/VetProfile/VetHome'>
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"             
            >
              Busca tu veterinario
            </Button>
          </Link>
            
          </div>
        
      
    </div>
  );
}

export default HeroSection;
