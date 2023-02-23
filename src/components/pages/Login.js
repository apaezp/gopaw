import React from "react";
import "./Login.css"
import Video from '../assets/video/signup.mp4';

function Login() {
  return (
    <div className="login-container">
      <video src={Video} autoPlay loop muted />
      <div className="form">
        <div className="form-body">
          <div className="email">
            <label className="form__label">Email</label>
            <input
              className="form__input"
              type="text"
              placeholder="Email"
            ></input>
          </div>
          <div className="password">
            <label className="form__label">Contraseña</label>
            <input
              className="form__input"
              type="password"
              placeholder="Contraseña"
            ></input>
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btnSignUp">Ingresar</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
