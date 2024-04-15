import logo from "../assets/images/logo.png"
import CartWidget from "./CartWidget";
const NavBar = () => {
        return(
                <div className="container-fluid">
                        <div className="row bg-white">
                                <div className="col"></div>
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
                                        <li className="nav-item">
                                                <a className="nav-link text-dark" href="#">Remeras</a>
                                        </li>
                                        <li className="nav-item">
                                                <a className="nav-link text-dark" href="#">Buzos</a>
                                        </li>
                                        <li className="nav-item">
                                                <a className="nav-link text-dark" href="#">Camperas</a>
                                        </li>
                                        </ul>
                                </div>
                        </div>
                </div>
        )
}

export default NavBar;