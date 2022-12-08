import { useEffect, useState } from "react";
import { ItemList } from "../itemList/ItemList";
import { products } from "../../productsMock";
import "./ItemListContainer.scss"

export const ItemListContainer = () => {


const [items, setItems] = useState([])

useEffect(() => {
const task = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(products)
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

    return(
        <div className= "titulo">
            <ItemList items={items}/>
        </div>
    );
})}