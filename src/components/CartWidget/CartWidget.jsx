import "./CartWidget.scss";

import { useContext, useState } from "react"

import { BsFillCartCheckFill } from "react-icons/bs"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";

export const CardWidget = () => {
    const { cart } = useContext(CartContext)
    console.log(cart)
    return (
        <div>
            <Link to={"/cart"} className="ContainerCardWidget">
                <div className="ContainerImgP" href="#">
                    <BsFillCartCheckFill className="svg"/>
                    <p className="pCartWidget">{cart.length}</p>
                </div> 
            </Link>
        </div>
    )
}