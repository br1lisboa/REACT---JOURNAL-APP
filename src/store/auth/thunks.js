import { registerUserWhitEmailPassword, signInWhitGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

/* thunk login */
export const checkingAuhtentication = (mail, password) => {

    return async (dispatch) => {

        dispatch(checkingCredentials())

    }

}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())

        const result = await signInWhitGoogle()
        if (!result.ok) return dispatch(logout(result.errorMessage))
        /* console.log({ result }) */

        dispatch(login(result))
    }
}


export const startCreatingUserWhitEmailPassword = ({ email, password, displayName }) => {

    return async (dispatch) => {

        dispatch(checkingCredentials())

        const { ok, uid, photoURL, errorMessage } = await registerUserWhitEmailPassword({ email, password, displayName })

        if (!ok) return dispatch(logout({ errorMessage }))

        dispatch(login({ uid, displayName, email, photoURL }))

        //console.log(respThunk)


    }


}
