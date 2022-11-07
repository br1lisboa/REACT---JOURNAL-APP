import { signInWhitGoogle } from "../../firebase/providers"
import { checkingCredentials } from "./authSlice"

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
        console.log({ result })
    }
}

