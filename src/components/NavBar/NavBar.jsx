import { CardWidget } from "../CartWidget/CartWidget";
import { MenuNavBar } from "../menuNavBar/MenuNavBar";
import { LogoYNombre } from "../logo y nombre/LogoYNombre";
import "./NavBar.scss";
export const NavBar = () => {
    return (
        <div>
            <nav className="NavBar">
                <LogoYNombre/>
                <MenuNavBar />
                <CardWidget />
            </nav>
        </div>
    );
}
