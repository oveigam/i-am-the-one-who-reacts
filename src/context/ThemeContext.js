import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { createContext, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../theme/themes";

/**
 * Contexto para gestionar el cambio de themes
 */
const ThemeContext = createContext()
export default ThemeContext

/**
 * Provider para la theme
 * Combina el provider de nuestro propio theme, que se encargara de gestionar el modo oscuro y claro y el
 * provider de Material UI que se encargara de proporcionar los colores de la theme a los componentes
 */
export const ThemeProvider = ({ children }) => {
    // Estado para identificar si usar el modo oscuro o claro, lo inicializamos con el valor guardado en el localStorage (si no existe sera false, osea light, el modo superior)
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('isDarkMode') === 'true')

    // Cada vez que se modifique el modo lo persistimos en el localstorage para reutilizarlo en futuras sesiones
    useEffect(() => {
        localStorage.setItem('isDarkMode', isDarkMode)
    }, [isDarkMode])

    // Funcion para alternar entre modo oscuro y claro
    const toggleTheme = () => setIsDarkMode(prev => !prev)

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <MUIThemeProvider theme={isDarkMode ? darkTheme : lightTheme} >
                {children}
            </MUIThemeProvider>
        </ThemeContext.Provider>
    )
}