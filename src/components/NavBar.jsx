import logo from "../assets/images/logo.png"
import CartWidget from "./CartWidget";

const NavBar = () => {
        return(
                

                        <div className="container-fluid">
                        <div className="row bg-white">
                                <div className="col">
                                </div>
                                <div className="col-md text-center">
                                        <a href="#">
                                                <img src={logo} alt="BOB´S" width={150}/>
                                        </a>
                                </div>
                                <div className="col d-flex align-items-center justify-content-end">
                                        <CartWidget />
                                </div>
                                

                        </div>
                        <div className="row">
                                <div className="col">
                                        <ul className="nav justify-content-center">
                                        <li className="nav-item">
                                                <a className="nav-link text-dark" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Productos</a>
                                                <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Remeras</a></li>
                                                <li><a className="dropdown-item" href="#">Buzos</a></li>
                                                <li><a className="dropdown-item" href="#">Camperas</a></li>
                                                <li className="dropdown-divider"></li>
                                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                                                </ul>
                                        </li>
                                        <li>
                                                <a className="nav-link text-dark" href="#">Contacto</a>
                                        </li>
                                        
                                        </ul>
                                </div>
                        </div>
                </div>
        )
}

export default NavBar;