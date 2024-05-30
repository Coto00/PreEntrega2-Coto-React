import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import Loading from "./Loading";

const ItemListContainer = () => {
        const [items, setItems] = useState([]);
        const {id} = useParams();
        const [visible, setVisible] = useState(true);


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
                        setVisible(false)
                        } else {
                        setItems([]);
                        }
                })
                }, [id]);
        





        return(
                <div className="container">
                        <div className="row text-uppercase"><h1>Productos</h1></div>
                        <div className="row my-5">
                                        {visible ? <Loading/> : <ItemList items={items}/>}
                        </div>
                </div>

        )
}

export default ItemListContainer;