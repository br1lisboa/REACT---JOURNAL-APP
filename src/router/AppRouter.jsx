import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoute } from "../auth/routes/AuthRoute"

import { useCheckAuth } from "../hooks"
import { JournalRoute } from "../journal/routes/JournalRoute"

import { ChekingAuth } from "../ui/components/ChekingAuth"

export const AppRouter = () => {

    const { status } = useCheckAuth()



    if (status === 'checking') {
        return <ChekingAuth />
    }



    return (
        // Configuracion clasica de rutas
        // 1- Importar Routes
        <Routes>

            {
                (status === "auth")
                    ? <Route path="/*" element={<JournalRoute />} />
                    : <Route path="/auth/*" element={<AuthRoute />} />
            }

            <Route path="/*" element={<Navigate to='/auth/login' />} />

            {/* 2- Definir las rutas */}

            {/* Ruta loggin y registro */}


            {/* Ruta del journal (diario) */}




        </Routes>

    )
}
