import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png"
import CartWidget from "./CartWidget";
import '../assets/css/style.css'


const Navbar = () => { 
        return (
            <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top custom-navbar">
                <div className="container-fluid">
                    <div className="row w-100 align-items-center">
                        <div className="col-auto d-flex align-items-center">
                            <Link to={"/"}>
                                <img src={logo} alt="BOB´S" width={150} />
                            </Link>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mb-2 mb-lg-0 text-center">
                                    <li className="nav-item me-3">
                                        <NavLink className="nav-item-link btn btn-dark text-white" aria-current="page" to={"/"}>
                                            Inicio
                                        </NavLink>
                                    </li>
                                    <li className="nav-item me-3">
                                        <NavLink className="nav-item-link btn btn-dark text-white" to={"/category/contacto"}>
                                            Contacto
                                        </NavLink>
                                    </li>
                                    <li className="nav-item dropdown me-3">
                                        <NavLink className="nav-item-link btn btn-dark dropdown-toggle text-white" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                            Productos
                                        </NavLink>
                                        <ul className="dropdown-menu bg-dark">
                                            <li>
                                                <NavLink className="dropdown-item text-white" to={"/category/remeras"}>
                                                    Remeras
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="dropdown-item text-white" to={"/category/buzos"}>
                                                    Buzos
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="dropdown-item text-white" to={"/category/camperas"}>
                                                    Camperas
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="dropdown-item text-white" to={"/category/ofertas"}>
                                                    Ofertas
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex ms-auto" role="search">
                                    <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Ej: Remera"
                                        aria-label="Buscar"
                                    />
                                    <button className="btn btn-dark text-white" type="submit">
                                        Buscar
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-auto d-flex justify-content-end align-items-center">
                            <CartWidget />
                        </div>
                    </div>
                </div>
            </nav>
            <div className="navbar-spacer"></div>
            </>
        );
    };
    
    export default Navbar;