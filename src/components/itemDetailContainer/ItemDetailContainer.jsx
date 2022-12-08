import React, { useEffect, useState } from 'react'

import { products } from '../../productsMock'

import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})

  const { Id } = useParams()

  useEffect( ()=>{

    const productSelected = products.find( producto => producto.Id === parseInt(Id) )
    setProduct(productSelected)

  }, [Id])

  return (
    <div>
        <h2>{product.name}</h2>
        <h2>{product.price}</h2>
        <h2>{product.description}</h2>
    </div>
  )
}

export default ItemDetailContainer