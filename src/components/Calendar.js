import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calendario() {
  const [value, setValue] = useState(new Date());
  const myDate = value.toLocaleDateString("es-CL")
  return (
    <div>
      <Calendar onChange={setValue} value={value} />
      {
        console.log(myDate) //valor de la fecha seleccionada para guardar en BD
      }
    </div>
  );
}

export default Calendario;
