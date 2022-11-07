import { signInWhitGoogle } from "../../firebase/providers"
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

