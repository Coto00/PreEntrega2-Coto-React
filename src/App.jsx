import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Carousel from "./components/Carousel"
import Cards from "./components/Cards"
import Products from "./components/Products"
import EjemploFetch from "./components/EjemploFetch"
import ItemCount from "./components/ItemCount"
import ItemDetailContainer from "./components/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from "./components/Error404"
import Footer from "./components/Footer"



function App() {
  return(
    <BrowserRouter>
    
    <NavBar/>
    <Carousel/>
    <Routes>
      <Route path={"/"} element={<ItemListContainer/>}/>
      <Route path={"/category/:id"} element={<ItemListContainer/>}/>
      <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
      <Route path={"*"} element={<Error404/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}


export default App
