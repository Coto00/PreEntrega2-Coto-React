import { createContext, useState } from "react";

export const CartContext = createContext();


const CartContextProvider = ({children}) => {
        const productos = [
                {id:1, nombre:"Zapatillas U SK8-Low", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2022/6/7/7489323.jpg", precio:119000, stock:10, envioGratis:false, categoria:"urbanas"},
        {id:2, nombre:"Zapatillas U SK8-Low", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2023/2/13/8093665.jpg", precio:119000, stock:10, envioGratis:false, categoria:"urbanas"},
        {id:3, nombre:"Zapatillas U SK8-Low", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2023/2/13/8093705.jpg", precio:119000, stock:10, envioGratis:false, categoria:"lisas"},
        {id:4, nombre:"Zapatillas U AUTHENTIC", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2023/2/10/8086489.jpg", precio:85000, stock:10, envioGratis:false, categoria:"lisas"},
        {id:5, nombre:"Zapatillas U CLASSIC SLIP-ON", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2023/2/14/8096996.jpg", precio:79000, stock:10, envioGratis:false, categoria:"urbanas"},
        {id:6, nombre:"Zapatillas U SK8-HI", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2023/2/13/8093534.jpg", precio:135000, stock:10, envioGratis:true, categoria:"botitas"},
        {id:7, nombre:"Zapatillas U SK8-HI", imagen:"https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2023/6/5/8449888.jpg", precio:135000, stock:10, envioGratis:true, categoria:"botitas"},
        ];
        const [carrito, setCarrito] = useState([]);

        const totalProductos = () => {
                return carrito.length
        }

        const agregarProducto = (id) => {
                const producto = productos.find(item => item.id === id);
                setCarrito([...carrito, {...producto}]);
                console.log("Producto Agregado!")
        }
        
        return(
                <CartContext.Provider value={{productos, carrito, totalProductos, agregarProducto}}>
                        {children}
                </CartContext.Provider>
        )
}
export default CartContextProvider;