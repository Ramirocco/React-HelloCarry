import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Cart } from "./components/cart/Cart"
import CartContextProvider from "./context/CartContext";
import { Footer } from "./components/footer/Footer";
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer"
import  ItemListContainer  from "./components/itemListContainer/ItemListContainer";
import { NavBar } from "./components/navBar/NavBar";
import Nosotros from './components/nosotros/Nosotros'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <CartContextProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/todosLosProductos" element={<ItemListContainer />} />
                        <Route path="/" element={< Nosotros />} />
                        <Route path="/category" element={<ItemListContainer />} />
                        <Route path="/category/:category" element={<ItemListContainer />} />
                        <Route path="/itemDetail/:Id" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<h1> 404 N0 EXISTE</h1>} />
                    </Routes>
                </CartContextProvider>
                <Footer />
            </BrowserRouter>
        </div>
    )
}
export default App;