import React from 'react'

export const PerfilCitas = () => {
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
            <tr>
                <td>
                   <span className="float-right font-weight-bold pl-3">Fecha: 28.02.23</span> 
                   <button type="button" className="btn btn-danger float-right" >Cancelar</button>
                   <button type="button" className="btn btn-success float-right" >Aceptar</button>
                   <p>Dueño: Andrés Muñoz</p>
                   <p>Mascota: Zeus</p>
                </td>
            </tr>
            <tr>
                <td>
                   <span className="float-right font-weight-bold pl-3">Fecha: 25.03.23</span> 
                   <button type="button" className="btn btn-danger float-right" >Cancelar</button>
                   <button type="button" className="btn btn-success float-right" >Aceptar</button>
                   <p>Dueño: Matías Briceño</p>
                   <p>Mascota: Odin</p>
                </td>
            </tr>
            <tr>
                <td>
                   <span className="float-right font-weight-bold pl-3">Fecha: 29.03.23</span> 
                   <button type="button" className="btn btn-danger float-right" >Cancelar</button>
                   <button type="button" className="btn btn-success float-right" >Aceptar</button>
                   <p>Dueño: Andrea Paez</p>
                   <p>Mascota: Charmander</p>
                </td>
            </tr>
        </tbody> 
    </table>
</div>
</>
  )
}
