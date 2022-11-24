import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Footer } from "./components/footer/Footer";


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