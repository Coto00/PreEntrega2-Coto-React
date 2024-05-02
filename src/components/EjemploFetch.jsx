import { useEffect, useState } from "react"

const EjemploFetch = () => {

        const [productos, setProductos] = useState([]);

        useEffect(() => {
                fetch("https://api.mercadolibre.com/sites/MLA/search?q=streetwear&limit=20")
                .then(respuesta => respuesta.json())
                .then(resultado => {
                        setProductos(resultado.results);
                })
        }, [])


        return(
                <div className="container">
                        <div className="row">
                                <div className="col">
                                {
                                        productos.map(producto => (
                                                <div key={producto.id} className="card col-md-3 col-10 mx-auto mt-5">
                                                <img className='mx-auto img-thumbnail img-fluid h-100 d-inline-block' src={producto.thumbnail} width="400" height="400"/>
                                                <div className="card-body text-center mx-auto">
                                                <div className='cvp'>
                                                <h5 className="card-title font-weight-bold">{producto.title}</h5>
                                                <p className="card-text">${producto.price}</p>
                                                <a href="#" className="btn details">Ver Detalles</a><br />
                                                <a href="#" className="btn cart">AÑADIR AL CARRITO</a>
                                                </div>
                                                </div>
                                                </div>
                                        ))
                                }
                                </div>
                        </div>
                </div>
        )
}
export default EjemploFetch;