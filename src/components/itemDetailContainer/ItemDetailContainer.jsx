import { collection, doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from 'react'

import  ItemDetail  from '../itemDetail/ItemDetail'
import { db } from '../../firebaseConfig'
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})

  const { Id } = useParams()

  useEffect( ()=>{
    const itemCollection = collection(db, "products")
    const ref = doc( itemCollection, Id )

    getDoc(ref)
    .then( res => {
      setProduct(
        {
          id: res.id,
          ...res.data()
        }
      )
    })

  }, [Id])

  return (
    <>
    <ItemDetail product={product} />
    </>
  )
}
