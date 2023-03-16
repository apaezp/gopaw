import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../GlobalStates";



export const ModificarPerfil = () => {
  const [authState, setAuthState] = useContext(AuthContext);

  const initialFormData = {
    veterinary_name: "",
    email: "",
    phone: "",
    image: "",
    password: "",
    confirmPassword: "",
  };
  
  const [formData, setFormData] = useState(initialFormData);
  
  const handleChange = (e) => {
    console.log(formData)
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  
  const clearForm = () => {
    setFormData(initialFormData);
  };
  
  const changeProfile = async () => {
    const id = localStorage.getItem("id");
    const urlServer = "https://backendgopaw-production.up.railway.app";
    const endpoint = `/editveterinary/:${id}`;
    const { veterinary_name, phone, email, image, password, confirmPassword } = formData;
    const newVetData = {id, veterinary_name, phone, email, image}

    const errorMsg = (!password || !confirmPassword) ? "Contraseñas no coinciden" :
    (!veterinary_name || !phone || !email || !password || !confirmPassword) ? "Por favor completa todos los campos." :
    "";

    if (errorMsg) {
    alert(errorMsg);
    return;
    }

    try {
      const response = await axios.put(urlServer + endpoint, newVetData);
      console.log(response)
      alert("Usuario modificado exitosamente😀");

      changePass(id, password);
      viewProfile(id);  
      clearForm(); // Limpiar el formulario después de enviar los datos
    } catch ({ response: { data: message } }) {
      alert(message + " 🙁");
      console.log(message);
    }
  };


  const viewProfile = async (id) => {
    const urlServerGET = "https://backendgopaw-production.up.railway.app";
    const endpointGET = `/veterinary/${id}`
  
    const response = await axios.get(urlServerGET + endpointGET, {
      params: { id },
    });
    if (response && response.data) {
      console.log(response.data[0]);
      setAuthState(response.data[0]);
    } else {
      console.error("Error al obtener datos del perfil del veterinario.");
    }
  };
  const changePass = async (id, password) => {
    const urlServer = "https://backendgopaw-production.up.railway.app";
    const endpoint = `/editveterinarypassword/${id}`
  
    
    try {
      const response = await axios.put(urlServer + endpoint, {id, password})
       alert("Contraseña modificada correctamente");
       console.log(response);

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
              name="veterinary_name"
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
              name="phone"
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
              name="image"
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
              name="password"
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
              name="confirmPassword"
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
