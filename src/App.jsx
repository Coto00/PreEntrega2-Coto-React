import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Carousel from "./components/Carousel"
import ItemDetailContainer from "./components/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Error404 from "./components/Error404"
import Footer from "./components/Footer"
import './App.css'
import Contacto from "./components/Contacto";


function App() {
  return(
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
      <Route path={"*"} element={<Error404/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}


export default App


// <CartContextProvider>
//<Cards/>
//</CartContextProvider>