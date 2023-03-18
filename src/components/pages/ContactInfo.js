import React from 'react';
import './ContactInfo.css';
import Footer from '../Footer'
import {BiMap} from "react-icons/bi"
import {BsFillPhoneVibrateFill, BsFillEnvelopeOpenFill} from "react-icons/bs"


function ContactInfo() {
  return (
    <> 
    <div className="contact-info-container">
      <h2>Información de Contacto</h2>
      <div className="contact-info">
        <h3 className="contact-text">
        Si tienes consultas, puedes contactarnos a través de cualquiera de los siguientes medios:
        </h3>
        <div className="contact-item">
          <BiMap />
          <p>Dirección: 123 Main Street, Santiago</p>
        </div>
        <div className="contact-item">
          <BsFillPhoneVibrateFill /> 
          <p>Teléfono: (+56) 94567890</p>
        </div>
        <div className="contact-item">
          <BsFillEnvelopeOpenFill />
          <p>Correo electrónico: info@gopaw.com</p>
        </div>
        <p> Estamos disponibles para responder cualquier pregunta o duda que puedas tener. ¡No dudes en contactarnos! Además, puedes encontrar más información en nuestro sitio web y en nuestras redes sociales.</p>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ContactInfo;
