import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import Video from "../assets/video/signup.mp4";
import Footer from "../Footer";

export default function SignUp() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [image, setImage] = useState(null);

  const [type, setType] = useState("owner");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "phone") {
      setPhone(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };




  const changeType = () => {
    if (type === "owner") {
      setType("veterinary");
    } else {
      setType("owner");
    }
  };

  const fullName = firstName + " " + lastName;

  const validatePassword = () => {
    if (password === confirmPassword) {
      validateEmail();
    } else {
      alert("Password no coincide");
    }
  };

  const validateEmail = () => {
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (validEmail.test(email)) {
      register();
    } else {
      alert("Email invalido");
    }
  };

  const register = () => {
    if (type === "owner") {
      const data = {
        owner_name: fullName,
        phone: phone,
        email: email,
        image: image,
        password: password,
        account_type: type,
      };
console.log(data)
      axios
        .post(
          "https://backendgopaw-production.up.railway.app/registerowner",
          data
        )
        .then(() => {
          alert("Registro de dueño exitoso");
        })
        .catch((error) => {
          alert(error);
        });


    } else {
      const data = {
        veterinary_name: fullName,
        phone: phone,
        email: email,
        image: image,
        password: password,
        account_type: type,
      };
      axios
        .post(
          "https://backendgopaw-production.up.railway.app/registervet",
          data
        )
        .then(() => {
          alert("Registro de veterinario exitoso");
        })
        .catch((error) => {
          alert(error);
        });
      // console.log(data);
      //se ejecuta consulta que ingresa nuevo veterinario
    }
  };

  // console.log(firstName, lastName, email, phone, password, confirmPassword, type)

  return (
    <div className="signup-container">
      <video src={Video} autoPlay loop muted />

      <div className="form-signup">
        <div className="form-body">
          <div className="username">
            <label className="form__label">Nombre </label>
            <input
              className="form__input"
              type="text"
              id="firstName"
              placeholder="Nombre"
              onChange={(e) => handleInputChange(e)}
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
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="email">
            <label className="form__label">Email </label>
            <input
              className="form__label_email"
              type="email"
              id="email"
              placeholder="Email"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="phone">
            <label className="form__label">Teléfono </label>
            <input
              className="form__label"
              type="text"
              id="phone"
              placeholder="Teléfono"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="password">
            <label className="form__label">Contraseña </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Contraseña"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="confirm-password">
            <label className="form__label">Confirmar Contraseña </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              placeholder="Confirmar Contraseña"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          {/* <div className="profile-pic">
            <label className="form__label">Imagen de perfil </label>
            <input
              className="form__input"
              type="file"
              id="image"
              placeholder="Seleccionar archivo"
              // onChange={(e) => loadImage(e)}
            />
          </div> */}
        </div>
        <div className="footer">
          <button
            type="submit"
            className="btnSignUp"
            onClick={() => validatePassword()}
          >
            Registrarse.
          </button>
          <p></p>
          <button
            type="button"
            className="btnSignUp"
            onClick={() => changeType()}
          >
            Tipo de cuenta: {type}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
