import { useContext, useEffect, useState } from "react";
import { addDoc, collection, doc, getDocs, getFirestore, writeBatch } from "firebase/firestore";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";


const Checkout = () => {
    const {cart, getCountProducts, getSumProducts} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [orderId, setOrderId] = useState("");
    const [errors, setErrors] = useState({ nombre: false, email: false, telephone: false });
    

    const validarCampos = () => {
        const nuevosErrores = {
            nombre: nombre.trim() === "",
            email: email.trim() === "",
            telephone: telephone.trim() === ""
        };
        setErrors(nuevosErrores);

        return !Object.values(nuevosErrores).includes(true);
    }

    const generarOrden = () => {
        
        if (!validarCampos()) {
            return;
        }
        const buyer = { nombre: nombre, email: email, telephone: telephone };
        const items = cart.map(item => ({ id: item.id, title: item.title, price: item.price }));
        const date = new Date();
        const currentDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        const order = { buyer: buyer, items: items, date: currentDate, total: getSumProducts() };


        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({ id }) => {
            setOrderId(id);
            clear();
        })
    }

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
            {!orderId ? 
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre y Apellido</label>
                            <input 
                                type="text" 
                                className={`form-control ${errors.nombre ? 'is-invalid' : ''}`} 
                                value={nombre} 
                                onChange={(e) => { setNombre(e.target.value) }} 
                            />
                            {errors.nombre && <div className="invalid-feedback">Este campo es obligatorio.</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input 
                                type="email" 
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                                value={email} 
                                onChange={(e) => { setEmail(e.target.value) }} 
                            />
                            {errors.email && <div className="invalid-feedback">Este campo es obligatorio.</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Telefono</label>
                            <input 
                                type="number" 
                                className={`form-control ${errors.telephone ? 'is-invalid' : ''}`} 
                                value={telephone} 
                                onChange={(e) => { setTelephone(e.target.value) }} 
                            />
                            {errors.telephone && <div className="invalid-feedback">Este campo es obligatorio.</div>}
                        </div>

                        <button 
                            type="button" 
                            className="btn text-white bg-black" 
                            onClick={generarOrden}
                        >
                            Generar Orden
                        </button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.img} alt={item.title} width={80} /></td>
                                    <td>{item.title}</td>
                                    <td>x{item.quantity}</td>
                                    <td className="text-end">${item.price}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3}><b>Total</b></td>
                                <td className="text-end"><b>${getSumProducts()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            : "" }
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? (
                        <div className="alert alert-light" role="alert">
                            Felicitaciones! Tu ID de Compra es: <b>{orderId}</b>
                        </div>
                    ) : ""}
                </div>
            </div>
        </div>
    );
};

export default Checkout;