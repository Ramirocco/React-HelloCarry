import React, { useEffect, useState } from 'react'
import { ButtonAddCarrito } from '../itemCount/ItemCount'
import { products } from '../../productsMock'

import { useParams } from "react-router-dom"
import "./ItemDetailContainer.scss"
export const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})

  const { Id } = useParams()

  useEffect(() => {

    const productSelected = products.find(producto => producto.Id === parseInt(Id))
    setProduct(productSelected)

  }, [Id])

  return (
    <div className='TarjetaContainer'>
      <h2 className='NombreProducto'>{product.productName}</h2>
      <img className='ImgTarjeta' src={product.img} alt="" />
      <p className='DescripcionProducto'>{product.description}</p>
      <p className='PrecioProducto'>${product.price}</p>
      <ButtonAddCarrito  Texto={"sumar"} Texto2={"restar"} Stock={product.stock}/>
    </div>
  )
}
