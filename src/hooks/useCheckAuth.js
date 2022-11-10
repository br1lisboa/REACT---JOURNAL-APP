import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { firebaseAuth } from "../firebase/config"
import { login, logout } from "../store/auth/authSlice"
import { startLoadingNotes } from "../store/journal/thunks"


export const useCheckAuth = () => {

    const { status } = useSelector(state => state.auth)
    const dispatch = useDispatch()


    useEffect(() => {

        /* FIREBASE NOS OFRECE UNA FORMA DE ESTAR PENDIENTE DE LOS CAMBIOS QUE ESE USUARIO VA A TENER */
        onAuthStateChanged(firebaseAuth, async (user) => {
            if (!user) return dispatch(logout())


            const { uid, email, displayName, photoURL } = user
            dispatch(login({ uid, email, displayName, photoURL }))

            dispatch(startLoadingNotes())

        }) /* ESTA ES UNA FUNCION QUE EMITE VALORES CUANDO EL ESTADO CAMBIA */

    }, [])

    return {
        status
    }

}