import React from 'react';
import "./ContactPage.css";
import Footer from '../Footer'

function ContactPage() {
  return (
    <> 
    <div className="ContactContainer">      
      <h1>Bienvenido a nuestra página de contacto para veterinarios y dueños de mascotas!</h1>
      <p>Al igual que Tinder, nuestra plataforma está diseñada para conectar a personas con intereses comunes, pero en lugar de citas, nuestro enfoque es en la salud y el bienestar de las mascotas.</p>
      <p>Aquí, los dueños de mascotas pueden encontrar veterinarios cercanos y calificados para sus necesidades de cuidado animal, y los veterinarios pueden conectarse con nuevos pacientes y construir relaciones duraderas con los dueños de mascotas.</p>
      <p>Nuestra plataforma también incluye características útiles como reseñas de veterinarios, horarios de citas y mucho más.  ¡Únete a nuestra comunidad de amantes de las mascotas hoy mismo y empieza a encontrar el cuidado perfecto para tus amigos peludos!.”</p>
    </div>
    <Footer />
    </>
  )
}

export default ContactPage;