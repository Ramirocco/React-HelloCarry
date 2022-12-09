import React from 'react'
import "./item.scss"
import { ButtonAddCarrito } from '../itemCount/ItemCount'
import {Link} from  "react-router-dom"

export const Item = ({element}) => {

  return (
    <div className='TarjetaContainer'>
        <h2 className='NombreProducto'>{element.productName}</h2>
        <img className='ImgTarjeta' src={element.img} alt="" />
        <p className='PrecioProducto'>${element.price}</p>
        <Link className='LinkDetalleProducto' to={`/itemDetail/${element.Id}`}>Ver detalle</Link>
        <ButtonAddCarrito  Texto={"sumar"} Texto2={"restar"} Stock= {element.Stock} />
    </div>

  )
}
