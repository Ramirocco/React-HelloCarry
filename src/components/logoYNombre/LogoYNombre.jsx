import "./LogoYNombre.scss"

import {Link} from "react-router-dom"

export const LogoYNombre = () => {

    return (
        <div className="LogoYNombre">
            <div  className="ContenedorImagen">
                <Link to="/" >
                <img src="https://res.cloudinary.com/dkolnsx2y/image/upload/v1673795491/LOGO_HYDRA_PNG_s2ag7b.png" />
                </Link>
            </div>
                <h1><span className="Negrita">Hydra </span>La Plata</h1>
        </div>
    )
}