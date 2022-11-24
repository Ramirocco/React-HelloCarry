import "./ItemListContainer.scss"
export const ItemListContainer = ({ greeting }) => {
    return (
        <div className="titulo">
            <h1 className="HydraLaPlata" >{greeting}</h1>
        </div>
    );
}