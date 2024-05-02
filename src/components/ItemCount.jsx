import { useEffect, useState } from "react"

const ItemCount = ({stock}) => {
        const [contador, setContador]= useState(1);
        const [ItemStock, setItemStock]= useState(stock);

        const incrementar = () => {
                if(contador< ItemStock){
                        setContador(contador + 1);
                }
        }

        const decrementar = () => {
                if(contador > 1){
                        setContador(contador - 1);
                }
        }


        const onAdd = () => {
                if(contador <= ItemStock){
                        setItemStock(ItemStock - contador)
                        setContador(1)
                        console.log("Agregaste " + contador + " productos al carrito")
                }
        }

        useEffect(() => {
                setItemStock(stock);
        },[stock])

        return(
                <div className="container">
                        <div className="row">
                                <div className="col">
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" className="btn bg-black text-white" onClick={decrementar}> - </button>
                                                <button type="button" className="btn bg-black text-white" > {contador} </button>
                                                <button type="button" className="btn bg-black text-white" onClick={incrementar}> + </button>
                                        </div>
                                </div>
                        </div>
                        <div className="row">
                                <div className="col">
                                        <button type="button" className="btn bg-black text-white" onClick={onAdd}>Agregar Al Carrito</button>
                                </div>
                        </div>
                </div>
        )
}

export default ItemCount