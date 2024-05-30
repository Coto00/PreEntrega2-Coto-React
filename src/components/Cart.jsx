import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/images/trash-fill.svg"


const Cart = () => {
        const {cart, removeItem, clear, getCountProducts, getSumProducts} = useContext(CartContext);

        if (getCountProducts() == 0) {
        return (
                <div className="container my-5">
                <div className="row">
                        <div className="col text-center">
                        <h3>No se encontraron Productos en el Carrito!</h3>
                        <Link to={"/"} className="btn text-white bg-dark my-5">Volver a la Página Principal</Link>
                        </div>
                </div>
                </div>
        )
        }

        return (
        <div className="container my-5">
                <div className="row">
                <div className="col">
                        <table className="table">
                        <tbody>
                                <tr>
                                <td colSpan={6} className="text-end"><button className="btn text-white bg-dark " onClick={clear}>Vaciar Carrito</button></td>
                                </tr>
                                {cart.map(item => (
                                <tr key={item.id}>
                                        <td><img src={item.img} alt={item.title} width={120} /></td>
                                        <td className="align-middle text-center">{item.title}</td>
                                        <td className="align-middle text-center">${item.price}</td>
                                        <td className="align-middle text-center">{item.quantity}</td>
                                        <td className="align-middle text-end"><img src={trash} width={24} alt="Eliminar Producto" title="Eliminar Producto" onClick={() => {removeItem(item.id)}} /></td>
                                </tr>
                                ))}
                                <tr>
                                <td>&nbsp;</td>
                                <td colSpan={2} className="text-center"><b>Total</b></td>
                                <td className="text-center"><b>${getSumProducts()}</b></td>
                                <td className="text-end"><Link to={"/checkout"} className="btn text-white bg-dark ">Checkout</Link></td>
                                </tr>
                        </tbody>
                        </table>
                </div>
                </div>
        </div>
        )
}

export default Cart;