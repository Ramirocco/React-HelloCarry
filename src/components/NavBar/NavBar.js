import { CardWidget } from "./CartWidget/CartWidget";
import { MenuNavBar } from "../NavBar/MenuNavBar/MenuNavBar";

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar bg-primary">
                <MenuNavBar />
                <CardWidget />
            </nav>
        </div>
    );
}
