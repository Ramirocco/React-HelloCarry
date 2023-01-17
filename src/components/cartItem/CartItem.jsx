import "./cartItem.scss"

import { Button } from "@mui/material"
import { CartContext } from "../../context/CartContext"
import React from "react"
import { useContext } from "react"

export const CartItem = ({ item }) => {

  const { deleteProductById } = useContext( CartContext )

  return (
    <div key={item.id} className="cart-item">
      <img className="ImgTarjeta" src={item.img} alt="" />
      <div className="cart-item-info">
        <h2 className="NombreProducto ">{item.productName}</h2>
        <h2 className="PrecioProducto">${item.price}.-</h2>
        <h2 className="Unidades">Unidades: {item.quantity}</h2>
      </div>
      <Button className="ButtonQuitar" variant="contained" onClick={()=>deleteProductById(item.id)}>Quitar</Button>
    </div>
  )
}