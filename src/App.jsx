import { Footer } from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { NavBar } from "./components/navBar/NavBar";


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={ <ItemListContainer  />} />
                    <Route path="/category" element={ <ItemListContainer />} />
                    <Route path="/category/:categoryName" element={ <ItemListContainer />} />
                    <Route path="/category/:id" element={ <ItemListContainer />} />
                    <Route path="/cart" element={ <h1>FUTURO CARRITO</h1>} />
                    <Route path="*" element={ <h1> 404 N0 EXISTE</h1>} />

                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}
export default App;