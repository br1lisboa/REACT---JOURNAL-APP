import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoute } from "../auth/routes/AuthRoute"
import { firebaseAuth } from "../firebase/config"
import { JournalRoute } from "../journal/routes/JournalRoute"
import { login, logout } from "../store/auth/authSlice"
import { ChekingAuth } from "../ui/components/ChekingAuth"

export const AppRouter = () => {

    const { status } = useSelector(state => state.auth)
    const dispatch = useDispatch()


    useEffect(() => {

        /* FIREBASE NOS OFRECE UNA FORMA DE ESTAR PENDIENTE DE LOS CAMBIOS QUE ESE USUARIO VA A TENER */
        onAuthStateChanged(firebaseAuth, async (user) => {
            if (!user) return dispatch(logout)


            const { uid, email, displayName, photoURL } = user
            dispatch(login({ uid, email, displayName, photoURL }))
        }) /* ESTA ES UNA FUNCION QUE EMITE VALORES CUANDO EL ESTADO CAMBIA */

    }, [])




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
