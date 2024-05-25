import { useContext } from "react"
import { CartContext } from "./context/CartContext"

const Cards = () => {
        const{productos, totalProductos, agregarProducto} = useContext(CartContext);
        
        return(
                <div className="container my-5">
                        <h1>ZAPATILLAS</h1>
                        <div className="row">
                                <div className="col text-center">
                                        <button className="btn bg-dark text-white">Total Productos: {totalProductos()}</button> 
                                </div>
                        </div>
                        <div className="row">
                                {productos.map(item => (
                                        <div key={item.id} className="col-md-3">
                                                <div className="card border-0">
                                                        <img src={item.imagen} className="car-img-top" alt="..." />
                                                        <div className="card-body text-center">
                                                                <p className="car-text text-center"><b>{item.nombre}</b><br />${item.precio}</p>
                                                                <p className="text-center">{item.envioGratis ? <span className="text-white bg-dark p-2">ENVIO GRATIS</span> : ""}</p>
                                                                <p><button className="btn bg-dark text-white" onClick={() => {agregarProducto(item.id)}}>Agregar (+)</button></p>
                                                        </div>
                                                </div>
                                        </div>
                                ))}
                        </div>
                </div>
        )
}
export default Cards;