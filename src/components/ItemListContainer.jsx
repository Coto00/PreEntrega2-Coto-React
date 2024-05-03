import { useEffect, useState } from "react"
import arrayProductos from "./json/productos.json"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
        const [items, setItems] = useState([]);
        const {id} = useParams();

        useEffect(() => {
                const promesa = new Promise(resolve => {
                        setTimeout(() => {
                                resolve(id ? arrayProductos.filter(item => item.category == id) : arrayProductos);
                        }, 2000)
                });

                promesa.then(respuesta => {
                        setItems(respuesta);
                })
        }, [id])


        return(
                <div className="container">
                        <div className="row text-uppercase"><h1>Productos</h1></div>
                        <div className="row my-5">
                                        <ItemList items={items}/>
                        </div>
                </div>

        )
}

export default ItemListContainer