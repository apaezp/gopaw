import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../GlobalStates';

export const PerfilCitas = () => {


  const [authState] = useContext(AuthContext);
  const [appointmentsData, setAppointmentsData] = useState([]);
  const { id } = authState;

  const viewAppointments = async (id) => {
    const urlServerGET = "https://backendgopaw-production.up.railway.app";
    const endpointGET = `/veterinaryappointments/${id}`

    
      const response = await axios.get(urlServerGET + endpointGET, {
        params: { id },
      });

    if (response && response.data) {
      setAppointmentsData(response.data);
      
    } else {
      alert("No se pudo obtener los appointments del vet.");
    }
  };

  useEffect(() => {
    viewAppointments(id);
  }, []);

  return (
    <>
    <div className="tab-pane" id="messages">
    <div className="alert alert-info alert-dismissible" role="alert">
   <button type="button" className="close" data-dismiss="alert">×</button>
    <div className="alert-icon">
     <i className="icon-info"></i>
    </div>
    <div className="alert-message">
      <span><strong>Revisa tu historial de citas</strong> </span>
    </div>
  </div>
    <table className="table table-hover table-striped">
        <tbody>             
        {appointmentsData.map((appointment, index) => (
          <tr key={index}>
          <td>
             <span className="float-right font-weight-bold pl-3">Fecha: {appointment.date}</span> 
             <button type="button" className="btn btn-danger float-right" >Cancelar</button>
             <button type="button" className="btn btn-success float-right" >Aceptar</button>
             <p>Dueño: {appointment.owner_name}</p>
             <p>Mascota: {appointment.pet_name}</p>
          </td>
      </tr>
        ))}
        </tbody> 
    </table>
</div>
</>
  )
}
