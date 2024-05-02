import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Carousel from "./components/Carousel"
import Cards from "./components/Cards"
import Products from "./components/Products"
import EjemploFetch from "./components/EjemploFetch"
import ItemCount from "./components/ItemCount"
import ItemDetailContainer from "./components/ItemDetailContainer"



function App() {
  return(
    <>
    
    <NavBar/>
    <Carousel/>
    
    
    <ItemListContainer />
    <ItemDetailContainer />
    <Products/>

    
    </>
  )
}


export default App
