import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calendario() {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <Calendar onChange={setValue} value={value} />
      {
        console.log(value.toLocaleDateString("es-CL")) //valor de la fecha seleccionada para guardar en BD
      }
    </div>
  );
}

export default Calendario;
