import { createContext, useState } from "react";
import arrayProductos from "../json/productos.json";

export const CartContext = createContext();


const CartContextProvider = ({children}) => {
        const productos = arrayProductos
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