import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Carousel from "./components/Carousel"
import Cards from "./components/Cards"
import Products from "./components/Products"
import EjemploFetch from "./components/EjemploFetch"
import ItemCount from "./components/ItemCount"



function App() {
  return(
    <>
    
    <NavBar/>
    <Carousel/>
    <ItemListContainer mensaje={"PRODUCTOS EN OFERTA"} />
    <Cards/>
    <ItemCount/>
    <ItemListContainer mensaje={"MAS PRODUCTOS QUE PUEDEN INTERESARTE"} />
    <Products/>

    <EjemploFetch/>
    </>
  )
}


export default App
