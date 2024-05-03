import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png"
import CartWidget from "./CartWidget";

const NavBar = () => {
        return(
                

                        <div className="container-fluid">
                        <div className="row bg-white">
                                <div className="col">
                                </div>
                                <div className="col-md text-center">
                                        <Link to={"/"}>
                                                <img src={logo} alt="BOB´S" width={150}/>
                                        </Link>
                                </div>
                                <div className="col d-flex align-items-center justify-content-end">
                                        <CartWidget />
                                </div>
                                

                        </div>
                        <div className="row">
                                <div className="col">
                                        <ul className="nav justify-content-center">
                                        <li className="nav-item">
                                                <NavLink className="nav-link text-dark" aria-current="page" to={"/"}>Inicio</NavLink>
                                        </li>
                                        <li className="nav-item dropdown">
                                                <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to={"/category/"} role="button" aria-expanded="false">Productos</NavLink>
                                                <ul className="dropdown-menu">
                                                <li><NavLink className="dropdown-item" to={"/category/remeras"}>Remeras</NavLink></li>
                                                <li><NavLink className="dropdown-item" to={"/category/buzos"}>Buzos</NavLink></li>
                                                <li><NavLink className="dropdown-item" to={"/category/camperas"}>Camperas</NavLink></li>
                                                <li className="dropdown-divider"></li>
                                                <li><NavLink className="dropdown-item" to={"/category/ofertas"}>Ofertas</NavLink></li>
                                                </ul>
                                        </li>
                                        <li>
                                                <NavLink className="nav-link text-dark" to={"/category/contacto"}>Contacto</NavLink>
                                        </li>
                                        
                                        </ul>
                                </div>
                        </div>
                </div>
        )
}

export default NavBar;