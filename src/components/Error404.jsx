import { Link } from "react-router-dom";

const Error404 = () => {
        return(
                <div className="container my-5">
                        <div className="row">
                                <div className="col text-center">
                                        <h1>- ERROR -</h1>
                                        <h2>404</h2>
                                        <p>La pagina que estan buscando no existe!</p>
                                        <p className="my-5"><Link to={"/"} className="btn bg-black text-white">Volver a la Pagina Principal</Link></p>
                                </div>
                        </div>
                </div>
        )
}
export default Error404;