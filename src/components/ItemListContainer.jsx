import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"

const ItemListContainer = () => {
        const [items, setItems] = useState([]);
        const {id} = useParams();

        // useEffect(() => {
        //         const promesa = new Promise(resolve => {
        //                 setTimeout(() => {
        //                         resolve(id ? itemsCollection.filter(item => item.category.includes(id)) : itemsCollection);
        //                 },200)
        //         });

        //         promesa.then(respuesta => {
        //                 setItems(respuesta);
        //         })
        // }, [id])

        useEffect(() => {
                const db = getFirestore();
                const itemsCollection = collection(db, "items");
                let itemsQuery;
        
                if (id) {
                        itemsQuery = query(itemsCollection, where("category", "==", id));
                } else {
                        itemsQuery = itemsCollection;
                }
        
                getDocs(itemsQuery).then(snapShot => {
                        if (snapShot.size > 0) {
                        setItems(snapShot.docs.map(item => ({ id: item.id, ...item.data() })));
                        } else {
                        setItems([]);
                        }
                })
                }, [id]);
        





        return(
                <div className="container">
                        <div className="row text-uppercase"><h1>Productos</h1></div>
                        <div className="row my-5">
                                        <ItemList items={items}/>
                        </div>
                </div>

        )
}

export default ItemListContainer;