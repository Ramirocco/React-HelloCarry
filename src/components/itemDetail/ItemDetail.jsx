import React, { useContext } from "react"

import { CartContext } from "../../context/CartContext"
import {ItemCount} from "../itemCount/ItemCount"
import swal from "sweetalert"

const ItemDetail = ({ product }) => {
  const { addToCart, getQuantityBiId } = useContext(CartContext)

  const onAdd = (quantity) => {
    addToCart({
      ...product,
      quantity: quantity,
    })

    swal({
      title: "Operacion Exitosa!",
      text: "Agregaste un producto al carrito!",
      icon: "success",
      button: "Ok",
    })
  }

  const quantity = getQuantityBiId(product.id)
console.log(product)
  return (
    <div className="TarjetaContainer ">
      <div>
        <img className="ImgTarjeta" src={product.img} alt="" />
      </div>

      <div>
        <h2 className="NombreProducto">
          <span> Nombre:</span> {product.productName}
        </h2>
        <h2 className="DescripcionProducto">
          <span> Descripcion:</span>{" "}
          {product.description}
        </h2>
        <h2 className="PrecioProducto">
          <span>Precio:</span> ${product.price}.-
        </h2>

        <ItemCount onAdd={onAdd} stock={product.stock} initial={quantity} />
      </div>
    </div>
  )
}

export default ItemDetail