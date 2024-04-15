import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import Carousel from "./components/Carousel"
import Cards from "./components/Cards"

function App() {
  return(
    <>
    <NavBar/>
    <Carousel/>
    <Cards/>
    <ItemListContainer mensaje={"MAS PRODUCTOS DISPONIBLES PROXIMAMENTE"} />
    </>
  )
}


export default App
