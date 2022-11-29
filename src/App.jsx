import { Footer } from "./components/footer/Footer";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { NavBar } from "./components/navBar/NavBar";


const App = ()=>{
    return (
        <div>
        <NavBar/>
        <ItemListContainer greeting={"Hydra La Plata"}/>
        <Footer/>
        </div>
    )
}
export default App;