import React from 'react';
import './ContactInfo.css';

function ContactInfo() {
  return (
    <div className="contact-info-container">
      <h2>Información de Contacto</h2>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <p>Dirección: 123 Main Street, Santiago</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <p>Teléfono: (+56) 94567890</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <p>Correo electrónico: info@gopaw.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
