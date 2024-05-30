import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Carousel from "./components/Carousel"
import ItemDetailContainer from "./components/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from "./components/Error404"
import Footer from "./components/Footer"
import './App.css'
import Contacto from "./components/Contacto";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import CartContextProvider from "./components/context/CartContext";


function App() {
  return(
    <CartContextProvider>
      <BrowserRouter>
    
    <NavBar/>
    
    <Routes>
      <Route path={"/"} element={
        <>
        <Carousel/>
        
        <ItemListContainer/>
        </>
      }/>
      <Route path={"/category/:id"} element={<ItemListContainer/>}/>
      <Route path={"/category/Contacto"} element={<Contacto/>}/>
      <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
      <Route path={"/cart"} element={<Cart />} />
      <Route path={"/checkout"} element={<Checkout />} />
      <Route path={"*"} element={<Error404/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </CartContextProvider>
    
  )
}


export default App


// <CartContextProvider>
//<Cards/>
//</CartContextProvider>