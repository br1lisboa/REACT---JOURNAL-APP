import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider()

export const signInWhitGoogle = async () => {

    try {

        const result = await signInWithPopup(firebaseAuth, googleProvider)

        //const credentials = GoogleAuthProvider.credentialFromResult(result)

        const user = result.user
        /* console.log(user) */
        const { displayName, email, photoURL, uid } = user

        return {
            ok: true,
            //User info
            displayName, email, photoURL, uid
        }


    } catch (error) {

        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        return {
            ok: false,
            errorMessage
        }

    }

}