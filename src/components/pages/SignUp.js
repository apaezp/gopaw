import React, {useState} from 'react';
import "./SignUp.css";
import Video from '../assets/video/signup.mp4';
import Footer from '../Footer'


export default function SignUp() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [type, setType] = useState("dueño")
  
    const handleInputChange = (e) => {
      const {id , value} = e.target;
          if(id === "firstName"){
              setFirstName(value);
          }
          if(id === "lastName"){
              setLastName(value);
          }
          if(id === "email"){
              setEmail(value);
          }
          if(id === "phone"){
              setPhone(value);
          }
          if(id === "password"){
              setPassword(value);
          }
          if(id === "confirmPassword"){
              setConfirmPassword(value);
          }
    };
  
  const changeType = () => {
      setType("veterinario")
  }
  
  const register = () => {
      if(type === "dueño"){
          //Se ejecuta consulta que ingresa nuevo dueño
      }else{
          //se ejecuta consulta que ingresa nuevo veterinario
      }
  }
  
  
    console.log(firstName, lastName, email, phone, password, confirmPassword, type)


    return(
        <div className="signup-container">
      <video src={Video} autoPlay loop muted />

      <div className="form">
        <div className="form-body">
          <div className="username">
            <label className="form__label">Nombre </label>
            <input
              className="form__input"
              type="text"
              id="firstName"
              placeholder="Nombre"
              onChange = {(e) => handleInputChange(e)}
            />
          </div>
          <div className="lastname">
            <label className="form__label">Apellido </label>
            <input
              type="text"
              name=""
              id="lastName"
              className="form__input"
              placeholder="Apellido"
              onChange = {(e) => handleInputChange(e)}
            />
          </div>
          <div className="email">
            <label className="form__label">Email </label>
            <input
              className="form__label_email"
              type="email"
              id="email"
              placeholder="Email"
              onChange = {(e) => handleInputChange(e)}
            />
          </div>
          <div className="phone">
            <label className="form__label">Teléfono </label>
            <input
              className="form__label"
              type="text"
              id="phone"
              placeholder="Teléfono"
              onChange = {(e) => handleInputChange(e)}
            />
          </div>
          <div className="password">
            <label className="form__label">Contraseña </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Contraseña"
              onChange = {(e) => handleInputChange(e)}
            />
          </div>
          <div className="confirm-password">
            <label className="form__label">Confirmar Contraseña </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              placeholder="Confirmar Contraseña"
              onChange = {(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btnSignUp" onClick={() => register()}>
            Registrarse como dueño de mascota.
          </button> 
          <p></p>
          <button type="button" className="btnSignUp" onClick={() => changeType()}>
            Registrarse como veterinario.
          </button>
        </div>
      </div>
      <Footer/>
    </div>
    )       
}