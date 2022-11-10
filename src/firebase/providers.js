import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
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


export const registerUserWhitEmailPassword = async ({ email, password, displayName }) => {

    try {

        /* FUNCION PARA LLEGAR A FIREBASE */
        const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password)
        /* SI TODO SALE BIEN, DESESTRUCTURO EL UID, Y LO QUE NECESITE */
        const { uid, photoURL } = resp.user
        //console.log(resp)

        /* FUNCION PARA ACTUALIZAR EN FIREBASE DATOS */
        await updateProfile(firebaseAuth.currentUser/* USUARIO ACTUAL */, {
            displayName
        })

        return {
            ok: true,
            uid, photoURL, email, displayName
        }


    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }

}


export const loginWhitEmailPassword = async ({ email, password }) => {

    try {


        const respProvider = await signInWithEmailAndPassword(firebaseAuth, email, password)

        const { uid, photoURL, displayName } = respProvider.user

        return {

            ok: true,
            uid, photoURL, email, displayName

        }



    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }



}


export const logoutFirebase = async () => {

    /* ESTA FUNCION CIERRA TODAS LAS SESIONES */
    return await firebaseAuth.signOut()

}