import { useState } from "react"

const ItemCount = ({stock}) => {
        const [contador, setContador]= useState(1);
        const [ItemStock, setItemStock]= useState(stock);

        const incrementar = () => {
                if(contador< ItemStock){
                        setContador(contador + 1);
                }
        }

        const decrementar = () => {
                if(contador > ItemStock){
                        setContador(contador - 1);
                }
        }

        return(
                <div className="container">
                        <div className="row">
                                <div className="col">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" className="btn btn-primary" onClick={decrementar}> - </button>
                                                <button type="button" className="btn btn-primary" > {contador} </button>
                                                <button type="button" className="btn btn-primary" onClick={incrementar}> + </button>
                                        </div>
                                </div>
                        </div>
                        <div className="row">
                                <div className="col">
                                        <button type="button" className="btn btn-danger">Agregar Al Carrito</button>
                                </div>
                        </div>
                </div>
        )
}

export default ItemCount