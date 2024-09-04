import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [tareas, setTareas] = useState([]);
  const [entrada, setEntrada] = useState("");

  const ingresoTexto = (event) => {
    console.log(event.target.value);
    setEntrada(event.target.value);
  };

  const apretaronElBoton = () => {
    if (entrada.trim() !== "") {
      setTareas([...tareas, entrada]);
    }
  };

  const borrar=(index)=>{
    const nuevasTareas = [...tareas]; // Copiamos el array original
    nuevasTareas.splice(index, 1); // Eliminamos la tarea en el índice dado
    setTareas(nuevasTareas); // Actualizamos el estado con la nueva lista

  }
  console.log("tarea", tareas);
  return (
    <>
      <label htmlFor="tarea">Ingrese tarea</label>
      <input
        type="text"
        name="tarea"
        onChange={ingresoTexto}
        id="tarea"
        placeholder="Ingreasr tarea..."
      />
      <button onClick={apretaronElBoton}>Agregar</button>

      <h2>Tareas a realizar</h2>
      <ol type="A">
        {tareas.map((data, i) => {
          return (
            <li key={i}>
              {data}
              <button onClick={()=>borrar(i)}>Borrar</button>
            </li>
          );
        })}
      </ol>
    </>
  );
}

export default App;
