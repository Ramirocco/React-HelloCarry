import { useState } from "react";
import "./itemCount.scss";


export const ButtonAddCarrito = ({ Texto, initial = 1, Stock, onAdd }) => {

  let [counter, setCounter] = useState(initial)
  // CAMBIAR EL 0 POR LA CANTIDAD DEL CARRITO dependeiendo del quantity por id
  let StockDisponible = +Stock

// useefecto que setee el counter por initial [inital]

  const sumar = () => {

    counter < StockDisponible ? setCounter(counter + 1) : alert("acción no permitida");
  }
  const restar = () => {
    counter <= 0 ? alert("acción no permitida") : setCounter(counter - 1);
  }

  

  return (
    <div className="Container">
      <div className="ManejadorCounter">
        <button className="Manejador" onClick={restar}>-</button>
        <p>{counter}</p>
        <button className="Manejador" onClick={sumar}>+</button>
        <button  className="BotonAdd" onClick={onAdd}>Agregar al carrito</button>
      </div>
    </div>
  )

};