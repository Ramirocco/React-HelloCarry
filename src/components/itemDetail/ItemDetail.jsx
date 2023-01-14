import { ButtonAddCarrito } from '../itemCount/ItemCount'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./ItemDetail.scss"



export const ItemDetail = ({ product }) => {
  const { addToCart, getQuantityBiId } = useContext(CartContext)

  const onAdd = (quantity) => {
    addToCart({
      ...product,
      quantity: quantity,
    })

    alert("Operacion Exitosa! Agregaste al carrito")
  }
  const quantity = getQuantityBiId(product.Id)
  console.log(quantity)

    return (
      <div className='TarjetaContainer'>
        <h2 className='NombreProducto'>{product.productName}</h2>
        <img className='ImgTarjeta' src={product.img} alt="" />
        <p className='DescripcionProducto'>{product.description}</p>
        <p className='PrecioProducto'>${product.price}</p>
        <ButtonAddCarrito Texto={"sumar"} Texto2={"restar"} Stock={product.stock} onAdd={onAdd} initial={quantity} />
      </div>
    )
  }
