import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Cart } from "./components/cart/Cart"
import CartContextProvider from "./context/CartContext";
import { ErrorNotFound } from "./components/errorNotFound/ErrorNotFound";
import { Footer } from "./components/footer/Footer";
import Form from "./components/form/Form";
import FormikFormulario from "./components/formik/FormikFormulario";
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer"
import  ItemListContainer  from "./components/itemListContainer/ItemListContainer";
import { NavBar } from "./components/navBar/NavBar";
import Nosotros from './components/nosotros/Nosotros';

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
                        <Route path="/checkout" element={ <Form /> } />
                        <Route path="/formik" element={ <FormikFormulario /> } />
                        <Route path="*" element={<ErrorNotFound/>} />
                    </Routes>
                </CartContextProvider>
                <Footer />
            </BrowserRouter>
        </div>
    )
}
export default App;