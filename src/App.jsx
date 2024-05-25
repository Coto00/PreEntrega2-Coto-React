import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Carousel from "./components/Carousel"
import ItemDetailContainer from "./components/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from "./components/Error404"
import Footer from "./components/Footer"
import Cards from "./components/Cards";
import CartContextProvider from "./components/context/CartContext";



function App() {
  return(
    <BrowserRouter>
    
    <NavBar/>
    <Carousel/>
    <CartContextProvider>
      <Cards/>
    </CartContextProvider>
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
