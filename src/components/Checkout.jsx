import { useEffect, useState } from "react";
import { addDoc, collection, doc, getDocs, getFirestore, updateDoc, writeBatch } from "firebase/firestore";


const Checkout = () => {
    const [cart, setCart] = useState([]);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [orderId, setOrderId] = useState("");
    const [errors, setErrors] = useState({ nombre: false, email: false, telephone: false });

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then(snapShot => {
            if (snapShot.size > 0) {
                setCart(snapShot.docs.map(item => ({ id: item.id, ...item.data() })));
            }
        });
    }, []);

    const calcularTotal = () => {
        return cart.reduce((acumulador, item) => acumulador += item.price, 0);
    }

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
        const order = { buyer: buyer, items: items, total: calcularTotal() };





        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({ id }) => {
            setOrderId(id);

            
            const batch = writeBatch(db);
            cart.forEach(item => {
                const itemRef = doc(db, "items", item.id);
                batch.update(itemRef, { stock: item.stock - 1 });
            });
            batch.commit();
        })
    }

    return (
        <div className="container my-5">
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
                            <label className="form-label">Telephone</label>
                            <input 
                                type="tel" 
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
                                    <td className="text-end">${item.price}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}><b>Total</b></td>
                                <td className="text-end"><b>${calcularTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
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