import "./MenuNavBar.scss"
import { Link } from "react-router-dom";
export const MenuNavBar = () => {
    return (
        <ul className="UlMenuNavBar">
            <Link className="Link" to="/">
                Nosotros
            </Link>
            <Link className="Link" to="/category/ArticulosDeportivos">
                Articulos Deportivos
            </Link>
            <Link className="Link" to="/category/indumentaria">
                Indumentaria
            </Link>
            <Link className="Link" to="/category/accesorios">
                Accesorios
            </Link>
            <Link className="Link" to="/category">
                Todos los productos
            </Link>
        </ul>
    )
};