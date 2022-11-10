import { collection, doc, setDoc } from "firebase/firestore/lite"
import { firebaseBD } from "../../firebase/config"
import { loadNotes } from "../../helpers/loadNotes"
import { addNewEmptyNote, isSaving, setActiveNote, setNotes, setSaving } from "./journalSlice"


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


export const startLoadingNotes = () => {

    return async (dispatch, getState) => {

        const { uid } = getState().auth

        if (!uid) throw new Error('El uid del usuario no existe')

        const loadNote = await loadNotes(uid)

        dispatch(setNotes(loadNote))


    }


}



export const startSaveNote = () => {

    return async (dispatch, getState) => {

        dispatch(setSaving())

        /* CREAR EL URL NECESARIO PARA ACTUALIZAR LA NOTA */
        const { uid } = getState().auth
        /* BUSCAMOS LA NOTA ACTIVA */
        const { active: note } = getState().journal

        /* DESESTRUCTURAMOS LA NOTA Y LE QUITAMOS EL ID POR QUE EN EL UPDATE NO QUEREMOS QUE FIRESTORE NOS OTORGUE UN NUEVO ID */
        const noteToFireStore = { ...note }
        delete noteToFireStore.id

        /* REFERENCIA AL DOCUMENTO */
        const docRef = doc(firebaseBD, `${uid}/journal/notes/${note.id}`)

        /* GUARDAR EN LA BD DE FIREBASE */
        await setDoc(docRef, noteToFireStore, { merge: true })

    }


}