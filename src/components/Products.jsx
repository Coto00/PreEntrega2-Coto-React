const Products = () => {

        const productos = [
                {
                        id: 1,
                        title: "Remera HappyInside",
                        price: 340,
                        img:"./public/images/imagen1.jpg",
                        quanty: 1,
                },
                {
                        id: 2,
                        title: "Remera Nature",
                        price: 230,
                        img:"./public/images/imagen2.jpg",
                        quanty: 1,
                },
                {
                        id: 3,
                        title: "Remera BrokenHeart",
                        price: 280,
                        img:"./public/images/imagen3.jpg",
                        quanty: 1,
                },
                {
                        id: 4,
                        title: "Remera Emilia",
                        price: 400,
                        img:"./public/images/imagen4.jpg",
                        quanty: 1,
                },
                {
                        id: 5,
                        title: "Remera Tupac",
                        price: 210,
                        img:"./public/images/imagen5.jpg",
                        quanty: 1,
                },
                {
                        id: 6,
                        title: "Remera Tortuga",
                        price: 220,
                        img:"./public/images/imagen6.jpg",
                        quanty: 1,
                },
                {
                        id: 7,
                        title: "Remera Summer",
                        price: 190,
                        img:"./public/images/imagen7.jpg",
                        quanty: 1,
                },
                {
                        id: 8,
                        title: "Remera 1975",
                        price: 200,
                        img:"./public/images/imagen8.jpg",
                        quanty: 1,
                },
        ]


        return(
                <>
                <div className="container-fluid">
                        <div className="row">
                        {productos.map(producto => (
                        
                        <div key={producto.id} className="card col-md-3 col-10 mx-auto mt-5">
                                <img className='mx-auto img-thumbnail img-fluid h-100 d-inline-block' src={producto.img} width="400" height="800"/>
                                <div className="card-body text-center mx-auto">
                                <div className='cvp'>
                                <h5 className="card-title font-weight-bold">{producto.title}</h5>
                                <p className="card-text">${producto.price}</p>
                                <a href="#" className="btn details">Ver Detalles</a><br />
                                <a href="#" className="btn cart">AÑADIR AL CARRITO</a>
                                </div>
                                </div>
                                </div>
                ))}
                        </div>
                
                </div>
                </>
        )
}
export default Products

