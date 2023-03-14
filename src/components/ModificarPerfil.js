import React, { useState } from "react";

import axios from "axios";
export const ModificarPerfil = () => {

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    cambiarFoto: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
    // console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
  };
  const changeProfile = async () => {
    const id = localStorage.getItem("id");
    // const token = localStorage.getItem("token");
    const urlServer = "http://localhost:8080";
    const endpoint = `/editveterinary/:${id}`;
    const { nombre, telefono, email  } = formData;
    const newVetData = {id, nombre, telefono, email }
    try {
      // const responseToken = await axios.put(urlServer + endpoint, {
      //   headers: { Authorization: "Bearer " + token },
      // });
      const response = await axios.put(urlServer + endpoint, newVetData);
      console.log(response)
      
      alert("Usuario modificado exitosamente😀");
    } catch ({ response: { data: message } }) {
      alert(message + " 🙁");
      console.log(message);
    }
    
  };
  return (
    <div className="tab-pane" id="edit">
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label className="col-lg-3 col-form-label form-control-label">
            Nombre Completo
          </label>
          <div className="col-lg-9">
            <input
              className="form-control"
              type="text"
              name="nombre"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* <div className="form-group row">
          <label className="col-lg-3 col-form-label form-control-label">
            Apellidos
          </label>
          <div className="col-lg-9">
            <input
              className="form-control"
              type="text"
              name="apellidos"
              onChange={handleChange}
            />
          </div>
        </div> */}
        <div className="form-group row">
          <label className="col-lg-3 col-form-label form-control-label">
            Email
          </label>
          <div className="col-lg-9">
            <input
              className="form-control"
              type="email"
              onChange={handleChange}
              name="email"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-3 col-form-label form-control-label">
            Teléfono
          </label>
          <div className="col-lg-9">
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="telefono"
            />
          </div>
        </div>
        {/* <div className="form-group row">
          <label className="col-lg-3 col-form-label form-control-label row-lg-3">
            Acerca de mi
          </label>
          <div className="col-lg-9">
            <input
              className="form-control"
              type="text"
              name="acercaDeMi"
              onChange={handleChange}
            />
          </div>
        </div> */}
        <div className="form-group row">
          <label className="col-lg-3 col-form-label form-control-label">
            Cambiar Foto
          </label>
          <div className="col-lg-9">
            <input
              className="form-control"
              type="file"
              onChange={handleChange}
              name="cambiarFoto"
            />
          </div>
        </div>

        {/* <div className="form-group row">
          <label className="col-lg-3 col-form-label form-control-label">
            Dirección
          </label>
          <div className="col-lg-9">
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="direccion"
              ceholder="Calle"
            />
          </div>
        </div> */}
        {/* <div className="form-group row">
          <label className="col-lg-3 col-form-label form-control-label"></label>
          <div className="col-lg-6">
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              e="ciudad"
              placeholder="Ciudad"
            />
          </div>
          <div className="col-lg-3">
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              e="estado"
              placeholder="Estado"
            />
          </div>
        </div> */}
        <div className="form-group row">
          <label className="col-lg-3 col-form-label form-control-label">
            Contraseña
          </label>
          <div className="col-lg-9">
            <input
              className="form-control"
              type="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-3 col-form-label form-control-label">
            Confirmar contraseña
          </label>
          <div className="col-lg-9">
            <input
              className="form-control"
              type="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <button type="button" class="btn btn-primary ml-4" onClick={changeProfile}>
            Guardar Cambios <span className="hidden-xs"></span>
          </button>
        </div>
      </form>
    </div>
  );
};
