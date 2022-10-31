import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"


export const JournalApp = () => {
  return (
    /* Este apptheme le provee los estilos de mui a nuestro proyecto, establecidos en theme */
    <AppTheme>
      {/* Aca colocamos nuestro sistema de rutas principal */}
      <AppRouter />
    </AppTheme>

  )
}
