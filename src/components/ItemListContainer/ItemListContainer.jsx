import { ButtonAddCarrito } from "../itemCount/ItemCount";
import { ItemList } from "../itemList/ItemList";

import "./ItemListContainer.scss"

export const ItemListContainer = ({ greeting }) => {
    return (
        <div className="titulo">
            <h1 className="HydraLaPlata" >{greeting}</h1>
            <ItemList/>
            <ButtonAddCarrito Texto={"sumar"} Texto2={"restar"} Stock={10} />
        </div>
    );
}