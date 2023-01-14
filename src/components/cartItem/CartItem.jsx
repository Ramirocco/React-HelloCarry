import React, { useContext } from 'react'


export const CartItem = () => {

    const{deleteProductById} = useContext

  return (
    <div>
        <button onClick={deleteProductById}>quitar</button>
    </div>
  )
}
