import "./CartWidget.scss";
import { BsFillCartCheckFill} from "react-icons/bs"

export const CardWidget = () => {
    return (
        <div>
            <div className="container-fluid d-flex justify-content-end ContainerCardWidget">
                <div className="navbar-brand row ContainerImgP" href="#">
                    <BsFillCartCheckFill className="svg"/>
                    <p className="col text-light">99</p>
                </div> 
            </div>
        </div>
    )
}