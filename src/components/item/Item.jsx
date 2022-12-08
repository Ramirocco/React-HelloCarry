import React from 'react'
import "./item.scss"
import { ButtonAddCarrito } from '../itemCount/ItemCount'
import {Link} from  "react-router-dom"

export const Item = ({element}) => {

  return (
    <div className='TarjetaContainer'>
        <img className='ImgTarjeta' src={element.img} alt="" />
        <h2 className='NombreProducto'>{element.productName}</h2>
        <p className='PrecioProducto'>${element.price}</p>
        <Link className='LinkDetalleProducto' to={`/itemDetail/${element.id}`}>Ver detalle</Link>
        <ButtonAddCarrito  Texto={"sumar"} Texto2={"restar"} Stock={element.Stock} />
    </div>

  )
}
