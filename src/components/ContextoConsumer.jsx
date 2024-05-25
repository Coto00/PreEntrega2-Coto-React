import React from "react"; 

const ThemeContext = React.createContext(true)

const ContextoConsumer = () => {
        return(
                <ThemeContext>
                
                        {(isDarkMode) => (<p>Es modo oscuro? <b>{isDarkMode ? "Si" : "No"}</b></p>)}
                </ThemeContext>
        )
}
export default ContextoConsumer;