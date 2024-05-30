import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) => {
        
        const {addItem} = useContext(CartContext)

        const onAdd = (quantity) => {
                addItem(item, quantity);
                console.log("Agregaste: " + quantity + " productos!");
                }

        const priceIn3Cuotas = item.price / 3;
        const priceIn6Cuotas = (item.price * 1.10) / 6;
        const priceIn12Cuotas = (item.price * 1.25) / 12;
        

        return(
                <div className="container">
                        <div className="row">
                                <div className="col-md-4 offset-md-2">
                                <img src={item.img} className="img-fluid" alt={item.title} />
                                </div>
                                <div className="col">
                                        <p>
                                        {item.envioGratis ? <span className="text-success fw-semibold p-1">ENVIO GRATIS</span> : ""}
                                        </p>
                                        <h1>{item.title}</h1>
                                        <p><h3><b>${item.price}</b><br /></h3>
                                        3 Cuotas sin interes de <b>${priceIn3Cuotas.toFixed(3)}</b>, 
                                        6 Cuotas de <b>${priceIn6Cuotas.toFixed(3)}</b> con 10% recargo y 
                                        12 Cuotas de <b>${priceIn12Cuotas.toFixed(3)}</b> con 25 % recargo.
                                        </p>
                                        <h3>Descripcion</h3>
                                        <p>{item.descripcion}</p>
                                        
                                        <ItemCount stock={item.stock} onAdd={onAdd}/>
                                </div>
                        </div>
                </div>
        )

}
export default ItemDetail;