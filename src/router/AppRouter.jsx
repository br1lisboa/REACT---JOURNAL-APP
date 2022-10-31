import { Route, Routes } from "react-router-dom"
import { AuthRoute } from "../auth/routes/AuthRoute"
import { JournalRoute } from "../journal/routes/JournalRoute"

export const AppRouter = () => {
    return (
        // Configuracion clasica de rutas
        // 1- Importar Routes
        <Routes>

            {/* 2- Definir las rutas */}

            {/* Ruta loggin y registro */}
            <Route path="/auth/*" element={<AuthRoute />} />

            {/* Ruta del journal (diario) */}
            <Route />
            <Route path="/*" element={<JournalRoute />} />



        </Routes>

    )
}
