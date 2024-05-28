import { useEffect, useState } from "react"
import arrayProductos from "./json/productos.json"
import ItemDetail from "./ItemDetail";
import { Link, useParams } from "react-router-dom";

const ItemDetailContainer = () => {
        const [item, setItem] = useState([]);
        const {id} = useParams();

        useEffect(() => {
                const promesa = new Promise(resolve => {
                        setTimeout(() => {
                                const producto = arrayProductos.find(item => item.id === parseInt(id));
                                resolve(producto);
                        },)
                });

                promesa.then(respuesta => {
                        setItem(respuesta);
                })
        }, [id])


        return(
                <div className="container">
                        <div className="row">
                                <div className="col">
                                <Link to={"/"}>
                                        <button className="btn bg-dark text-white">← Volver</button>
                                </Link>
                                </div>
                        </div>
                        <div className="row my-5">
                                        <ItemDetail item={item}/>
                        </div>
                </div>

        )
}

export default ItemDetailContainer;