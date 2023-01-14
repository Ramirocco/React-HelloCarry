import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { ItemDetail } from '../itemDetail/ItemDetail'
import { getDoc, doc, collection } from "firebase/firestore"
import { db } from '../../firebaseConfig'

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
