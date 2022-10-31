import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"

import { purpleTheme } from "./purpleTheme"

/* Al pasarle children por prop a este componente lo transformamos en un high order component */
export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={purpleTheme}> {/* Aca estamos importando nuestro tema creado */}
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}
