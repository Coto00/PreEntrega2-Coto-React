import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Item = ({item}) => {
        

        return(
                <div className="col-md-3 text-center">
                        <Link to={"/item/"+ item.id} className="text-decoration-none">
                        <div className="card border-0">
                                <div className="card-img-top overflow-hidden" style={{ height: '200px' }}>
                                <img src={item.img} className="w-150 h-100" style={{ objectFit: 'cover' }} alt={item.title} />
                                </div>
                                <div className="card-body text-center">
                                <p className="card-text text-center" style={{ height: '30px' }}>
                                        <b>{item.title}</b><br />
                                </p>

                                <p >
                                        ${item.price}
                                </p>
                                
                                <p>
                                        <button className="btn bg-dark text-white" onClick={() => {addItem(item.id); }}>Comprar</button>
                                </p>
                                
                                </div>
                                </div>
                        </Link>
                </div>
                
        )
}

export default Item;
