import React from "react";
import "../App.css";
import { Button } from "./Button";
import Video from "./assets/video/herosection.mp4";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container"> 
    <video src= {Video} autoPlay loop muted />                      
          <h1>“¡Bienvenido a nuestra página de contacto para veterinarios y dueños de mascotas!”</h1>
          <p> Esto es GoPaw!</p>
          <div className="hero-btns">
          <Link to='/pages/ContactPage'>
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
