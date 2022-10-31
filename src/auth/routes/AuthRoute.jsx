import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages"
import RegisterPage from "../pages/RegisterPage"

export const AuthRoute = () => {
    return (
        <Routes>

            <Route path="login" element={<LoginPage />} />

            <Route path="register" element={<RegisterPage />} />

            {/* En caso de que el usuario que ingrese no este en una ruta valida lo redireccionamos al path de login */}
            <Route path="*" element={<Navigate to="/auth/login" />} />

        </Routes>
    )
}
