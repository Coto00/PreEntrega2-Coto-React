import { Link } from "react-router-dom";

const Item = ({item}) => {
        return(
                <div className="col-md-4 text-center">
                        <Link to={"/item/"+ item.id} className="text-decoration-none">
                        <div className="card">
                        <img src={item.img} className="img-fluid" alt={item.title} />
                        <div className="card-body">
                        <h5 className="card-title text-uppercase">{item.title}</h5>
                        <p className="card-text">${item.price}</p>
                        <a href="#" className="btn details bg-black text-white">Ver Detalles</a><br />
                        <a href="#" className="btn cart bg-black text-white">AÑADIR AL CARRITO</a>
                        </div>
                        </div>
                        </Link>
                </div>
        )
}

export default Item;