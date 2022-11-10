import { collection, doc, setDoc } from "firebase/firestore/lite"
import { firebaseBD } from "../../firebase/config"
import { addNewEmptyNote, isSaving, setActiveNote } from "./journalSlice"


export const startNewNote = () => {

    /* ESTE SEGUNDO ARGUMENTO DE NUESTRO THUNK, GETSTATE, ES UNA FUNCION QUE NOS DEVUELVE TODO EL ESTADO DEL STORE */
    return async (dispatch, getState) => {

        dispatch(isSaving())

        /* console.log(getState()) */
        /* para grabar en firebase vamos a necesitar el uid del usuario */
        const { uid } = getState().auth

        const newNote = {

            title: '',
            body: '',
            date: new Date().getTime()

        }


        /* ACA CREAMOS LA REFERENCIA A LA COLECCION DE FIRESTORE */
        const newDoc = doc(collection(firebaseBD/* CONFIGURACION DE FIREBASE */, `${uid}/journal/notes`))
        /* SET DOC GRABA _ PIDE LA REFERENCIA DE LA COLECCION Y EL OBJETO A GRABAR */
        await setDoc(newDoc, newNote)

        /* console.log({ newDoc }, { setDocResp }) */

        newNote.id = newDoc.id

        //! dispatch ya tenemos la nota en firestore, ahora debemos cargarla a nuestro store, y luego pasar su estado a activa

        dispatch(addNewEmptyNote(newNote))

        dispatch(setActiveNote(newNote))


    }


}