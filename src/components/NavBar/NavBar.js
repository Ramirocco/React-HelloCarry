import { CardWidget } from "../CartWidget/CartWidget";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer.js";

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar bg-primary">
            <ItemListContainer greeting={"Hydra La Plata"}/>
                <CardWidget/>
            </nav>
        </div>
    );
}
