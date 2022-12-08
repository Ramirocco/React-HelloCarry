import "./LogoYNombre.scss"
import {Link} from "react-router-dom"

export const LogoYNombre = () => {

    return (
        <div className="LogoYNombre">
            <div  className="ContenedorImagen">
                <Link to="/" >
                <img src="./assets/img/HYDRA FLYER-06.svg" />
                </Link>
            </div>
                <h1><span className="Negrita">Hydra </span>La Plata</h1>
        </div>
    )
}