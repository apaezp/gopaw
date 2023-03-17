import React, { useState } from "react";
import "./ContactHelp.css";
import Footer from "../Footer";

function ContactHelp() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();   
    setMessageSent(true);
  };

  return (
    <>
      <div className="contact-help-container">
        <h2>¿Necesitas ayuda?</h2>
        <p>
          Por favor, completa el siguiente formulario y nos pondremos en
          contacto contigo lo antes posible.
        </p>
        <form className="contact-help-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre completo</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Asunto</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Enviar</button>
        </form>
        {messageSent && <p>El mensaje ha sido enviado exitosamente.</p>}
      </div>
      <Footer />
    </>
  );
}

export default ContactHelp;
