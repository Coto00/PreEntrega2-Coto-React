import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
        return(
                <div className="container">
                        <div className="row">
                                <div className="col-md-4 offset-md-2">
                                <img src={item.img} className="img-fluid" alt={item.title} />
                                </div>
                                <div className="col">
                                        <h1>{item.title}</h1>
                                        <p><b>${item.price}</b></p>
                                        <ItemCount stock={item.stock}/>
                                </div>
                        </div>
                </div>
        )

}
export default ItemDetail;