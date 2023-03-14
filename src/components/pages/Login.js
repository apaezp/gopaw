import React, {useState} from "react";
import "./Login.css"
import Video from '../assets/video/login.mp4';
import Footer from '../Footer'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuarioLocal] = useState({});

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuarioLocal({ ...usuario, ...field });

  };

  const iniciarSesion = async () => {
    const urlServer = "http://localhost:8080";
    const endpoint = "/login";
    const { email, password } = usuario;
    try {
      if (!email || !password) return alert("Email y password obligatorias");
      const {data} = await axios.post(urlServer + endpoint, usuario);
      const {token, id} = data
      alert("Usuario identificado con éxito 😀");
      localStorage.setItem("token", token);
      localStorage.setItem("idVet", id);
      navigate("/");
    } catch ({ response: { data: message } }) {
      alert(message + " 🙁");
      console.log(message);
    }
  };
  return (
    <>
    <div className="login-container">
      <video src={Video} autoPlay loop muted />
      <div className="form-login">
        <div className="form-body">
          <div className="email">
            <label className="form__label">Email</label>
            <input
              value={usuario.email}
              onChange={handleSetUsuario}
              className="form__input"
              type="email"
              name="email"
              placeholder="Email"
            ></input>
          </div>
          <div className="password">
            <label className="form__label">Contraseña</label>
            <input
              value={usuario.password}
              onChange={handleSetUsuario}
              className="form__input"
              type="password"
              name="password"
              placeholder="Contraseña"
            ></input>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btnSignUp" onClick={iniciarSesion}>Ingresar</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Login;
