import React, { useContext, useState } from "react"

//SIN CONTEXTO
// const Componente1 = ({isDarkMode}) => {
//         return(
//                 <Componente2 isDarkMode={isDarkMode}/>
//         )
// }
// const Componente2 = ({isDarkMode}) => {
//         return(
//                 <p>Es modo oscuro? <b>{isDarkMode ? "Si" : "No"}</b></p>
//         )
// }

//CON CONTEXTO  
const ThemeContext = React.createContext();

const Componente1 = () => {
        return(
                <Componente2/>
        )
}
const Componente2 = () => {
        const {isDarkMode, productos} =useContext(ThemeContext);
        return(
                <div className="container">
                        <div className="row">
                                <div className="col">
                                        <h1>array en contexto</h1>
                                        <p>Es modo oscuro? <b>{isDarkMode ? "Si" : "No"}</b></p>
                                        <ol>
                                                {productos.map(produ => (
                                                        <li key={produ.id}>{produ.nombre} precio:${produ.precio}</li>
                                                ))}
                                        </ol>
                                </div>
                        </div>
                </div>
                
        )
}


const Contexto = () => {
        const [isDarkMode, setIsDarkMode] = useState(true);
        const productos= [
                {id:1, nombre:"cocacola", precio:1800},
                {id:2, nombre:"pepsi", precio:1500},
                {id:3, nombre:"manaos", precio:1300}
        ];

        //SIN CONTEXTO
        // return(
        //         <div className="container">
        //                 <div className="row">
        //                         <div className="col">
        //                                 <h1>Contexto</h1>
        //                                 <Componente1 isDarkMode={isDarkMode}/>
        //                         </div>
        //                 </div>
        //         </div>
        // )

        //CON CONTEXTO
        //no se usa localStorage 
        return(
                <ThemeContext.Provider value={{isDarkMode, productos}}>
                        <Componente1/>
                </ThemeContext.Provider>
        )
}
export default Contexto;