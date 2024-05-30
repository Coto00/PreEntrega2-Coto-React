import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
import { Link, useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
        const [item, setItem] = useState(null);
        const {id} = useParams();

        // useEffect(() => {
        //         const promesa = new Promise(resolve => {
        //                 setTimeout(() => {
        //                         const producto = arrayProductos.find(item => item.id === parseInt(id));
        //                         resolve(producto);
        //                 },)
        //         });

        //         promesa.then(respuesta => {
        //                 setItem(respuesta);
        //         })
        // }, [id])

        useEffect(() => {
                const db = getFirestore();
                const itemRef = doc(db, "items", id)
                getDoc(itemRef).then(snapShot =>{
                        if (snapShot.exists()) {
                                setItem({ id: snapShot.id, ...snapShot.data() });
                                } 
                        })
                        }, [id]);


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
                                {item ? <ItemDetail item={item} /> : <p>Cargando...</p>}
                        </div>
                </div>

        )
}

export default ItemDetailContainer;