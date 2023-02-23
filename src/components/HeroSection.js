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
          <h1>“¡Bienvenido a nuestra página de contacto para veterinarios y dueños de mascotas! Al igual que Tinder, nuestra plataforma está diseñada para conectar a personas con intereses comunes, pero en lugar de citas, nuestro enfoque es en la salud y el bienestar de las mascotas. Aquí, los dueños de mascotas pueden encontrar veterinarios cercanos y calificados para sus necesidades de cuidado animal, y los veterinarios pueden conectarse con nuevos pacientes y construir relaciones duraderas con los dueños de mascotas. Nuestra plataforma también incluye características útiles como reseñas de veterinarios, perfiles de mascotas, horarios de citas y mucho más. ¡Únete a nuestra comunidad de amantes de las mascotas hoy mismo y empieza a encontrar el cuidado perfecto para tus amigos peludos!.”</h1>
          <p> Esto es GoPaw!</p>
          <div className="hero-btns">
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
