import { NavLink } from "react-router-dom";


const Footer = () => {
        return(
                <div className="container bg-white">
                <footer className="py-5">
                <div className="row ">
                <div className="col-6 col-md-2 mb-3">
                        <h5>Tienda</h5>
                        <ul className="nav flex-column">
                        <li className="nav-item mb-2"><NavLink className="nav-link p-0 text-muted" to={"/category/remeras"}>
                                                Remeras
                                                </NavLink></li>
                        <li className="nav-item mb-2"><NavLink className="nav-link p-0 text-muted" to={"/category/buzos"}>
                                                Buzos
                                                </NavLink></li>
                        <li className="nav-item mb-2"><NavLink className="nav-link p-0 text-muted" to={"/category/camperas"}>
                                                Camperas
                                                </NavLink></li>
                        <li className="nav-item mb-2"><NavLink className="nav-link p-0 text-muted" to={"/category/ofertas"}>
                                                Ofertas
                                                </NavLink></li>
                        </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                        <h5>Ayuda</h5>
                        <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Arrepentimiento</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Formas de Pago</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Envios y Cambios</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Guia de talles</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Como Comprar</a></li>
                        </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                        <h5>Compania</h5>
                        <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Terminos y Condiciones</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Defensa del Consumidor</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Politica de privacidad</a></li>
                        </ul>
                </div>

                <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                        <h5>Subscribete para Recibir Novedades</h5>
                        <p>Resumen mensual de nuestras novedades.</p>
                        <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                        <label for="newsletter1" className="visually-hidden">Direccion de Correo</label>
                        <input id="newsletter1" type="text" className="form-control" placeholder="Direccion de Correo"/>
                        <button className="btn btn-primary" type="button">Subscribete</button>
                        </div>
                        </form>
                </div>
                
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-around py-4 my-4 border-top">
                <p>© 2024 BOB´S, Inc. Todos los derechos reservados.</p>
                <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-light" href="#"><i class="bi bi-twitter"></i></a></li>
                        <li className="ms-3"><a className="link-light" href="#"><i class="bi bi-facebook"></i></a></li>
                        <li className="ms-3"><a className="link-light" href="#"><i class="bi bi-instagram"></i></a></li>
                        
                </ul>
                </div>
                </footer>
                </div>
        )
}
export default Footer;