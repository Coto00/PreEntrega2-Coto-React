import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [visible, setVisible] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, "items", id);

        let isMounted = true;

        getDoc(itemRef)
            .then(snapShot => {
                if (isMounted) {
                    if (snapShot.exists()) {
                        setItem({ id: snapShot.id, ...snapShot.data() });
                    } else {
                        setItem(null); 
                    }
                }
            })
            .catch(error => {
                console.error("Error getting document:", error);
                if (isMounted) {
                    setItem(null); 
                }
            })
            .finally(() => {
                if (isMounted) {
                    setVisible(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, [id]);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to={"/"}>
                        <button className="btn bg-dark text-white">← Volver</button>
                    </Link>
                </div>
            </div>
            <div className="row my-5">
                {visible ? <Loading/> : <ItemDetail item={item} />}
            </div>
        </div>
    );
};

export default ItemDetailContainer;