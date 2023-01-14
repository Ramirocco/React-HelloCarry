import "./ItemListContainer.scss"

import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"

import DotLoader from "react-spinners/DotLoader"
import {ItemList} from "../itemList/ItemList"
import { db } from "../../firebaseConfig"
import { useParams } from "react-router-dom"

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
}

const ItemListContainer = () => {
  const { category } = useParams()

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    const itemCollection = collection(db, "products")

    if (category) {
      const q = query(itemCollection, where("category", "==", category))
      getDocs(q)
        .then((res) => {
          const products = res.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            }
          })

          setItems(products)
        })
        .catch((err) => console.log(err))
    } else {
      getDocs(itemCollection)
        .then((res) => {
          const products = res.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            }
          })

          setItems(products)
        })
        .catch((err) => console.log(err))
    }

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [category])

  return (
    <div className="light">
      {isLoading ? (
        <DotLoader
          color={"purple"}
          cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <ItemList items={items} />
      )}

      {/* <ItemList items={items} /> */}
    </div>
  )
}

export default ItemListContainer