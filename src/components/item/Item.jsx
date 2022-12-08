import React from 'react'
import { ButtonAddCarrito } from '../itemCount/ItemCount'
import {Link} from  "react-router-dom"

export const Item = ({element}) => {

  return (
    <div>
        <img src={element.img} alt="" />
        <h2>{element.productName}</h2>
        <p>{element.price}</p>
        <Link to={`/itemDetail/${element.id}`}>Ver detalle</Link>
        <ButtonAddCarrito Texto={"sumar"} Texto2={"restar"} Stock={element.Stock} />
    </div>

  )
}
