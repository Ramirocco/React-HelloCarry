import { useEffect, useState } from "react";
import { ItemList } from "../itemList/ItemList";
import { products } from "../../productsMock";
import {useParams} from "react-router-dom"
import "./ItemListContainer.scss"

export const ItemListContainer = () => {

const [items, setItems] = useState([])
const { category } = useParams()

useEffect(() => {
    const productsFiltered = products.filter(
        (productos) => productos.category === category
    )

const task = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(category ? productsFiltered : products)
    }, 2000);
})
    task
        .then ((res)=>{
            setItems(res)
        })
        .catch ((error)=>{
            console.log("error al traer productos")
        })
    console.log("se realizo la peticion")

}, [category])

    return(
        <div className= "ListContainer">
            <ItemList items={items}/>
        </div>
    );}
