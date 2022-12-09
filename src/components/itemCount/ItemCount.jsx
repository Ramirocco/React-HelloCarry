import { useState } from "react";
import "./itemCount.scss";


export const ButtonAddCarrito = ({ Texto, Texto2, Stock }) => {

  let [counter, setCounter] = useState(0)
  let StockDisponible = +Stock

  const sumar = () => {

    counter < StockDisponible ? setCounter(counter + 1) : alert("acción no permitida");
  }
  const restar = () => {
    counter <= 0 ? alert("acción no permitida") : setCounter(counter - 1);
  }

  const onAdd = () => {
    counter == 0 ? console.log("no funciona click") : alert("se agrego al carrito la cantidad de " + counter + " elementos")
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