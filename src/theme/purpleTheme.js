/* Este es el "theme" que se importa al themProvider de mui */

import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
/* CreateTheme crea temas para material */
/* Podemos importar paleta de colores, nos lo provee material */

/* Objeto por el cual vamos escribiendo nuestro tema */
export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#262254'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        }
    }
})