import "./ErrorNotFound.scss"

import { Link } from "react-router-dom"

export const ErrorNotFound = () => {
  return (
    <div className="content">
      <img className='imgDe404' src='https://res.cloudinary.com/dkolnsx2y/image/upload/v1673799248/DALL_E_2023-01-15_13.11.18_-_NADADOR_BUSCANDO_PAGINA_CON_ERROR_404_qjqdfn.png'></img>
      <div className="content__pYLink">
        <p className='pDe404'> Ups, nadamos en aguas desconocidas.</p>
        <Link className='linkDe404' to={`/`}>Volver al inicio</Link>
      </div>
    </div>
  )
}
