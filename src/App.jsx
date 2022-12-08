import { Footer } from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./components/itemDetailContainer/ItemDetailContainer"
import { NavBar } from "./components/navBar/NavBar";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={ <ItemListContainer/>} />
                    <Route path="/category" element={ <ItemListContainer />} />
                    <Route path="/category/:category" element={ <ItemListContainer />} />
                    <Route path="/itemDetail/:Id" element={ <ItemDetailContainer />} />
                    <Route path="/cart" element={ <h1>FUTURO CARRITO</h1>} />
                    <Route path="*" element={ <h1> 404 N0 EXISTE</h1>} />

                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}
export default App;