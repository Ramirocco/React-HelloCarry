import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import "./Footer.scss";

export const Footer = () =>{
    return(
        <div className="Footer">
            <p>By <a>Mountop ™</a></p>
            <p>All rights reserved ©2023</p>
            <div className="redes">
            <p>Seguinos en</p>
            <a href="https://instagram.com/Hydra.laplata" target="_blank"><AiFillInstagram className="ico"/></a>
            <a href="https://facebook.com/Hydra.laplata" target="_blank"><FaFacebook className="ico"/></a>
            </div>
        </div>
    )
} 