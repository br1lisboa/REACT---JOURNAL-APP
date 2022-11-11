import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({

    name: 'journal',

    initialState: {
        /* BANDERA BOOLEANA PARA SABER SI ESTOY GUARDANDO LA NOTA O NO */
        isSaving: false,
        /* MENSAJE QUE SE GUARDARA */
        messageSaved: '',
        /* LAS NOTAS VAN A SER ALMACENADAS EN UN OBJETO, LO INICIALIZO VACIO */
        notes: [],
        /* Y ACA TENDREMOS LA NOTA ACTIVA */
        active: null,

        /* EJEMPLO DE COMO QUIERO QUE LUZCA LA NOTA ACTIVA 
        active: {
            id: 'ABC123',
            title: '',
            body: '',
            date: 1234,
            imageUrls: []
        }*/
    },

    reducers: {
        /* TODO LO QUE COLOQUEMOS EN LOS REDUCERS DEBE SER TRABAJO SINCRONO */
        isSaving: (state) => {
            state.isSaving = true
        },

        addNewEmptyNote: (state, action) => {

            state.notes.push(action.payload) /* EN EL PAYLOAD VAMOS A TENER NUESTRA NUEVA NOTA */
            state.isSaving = false


        },
        setActiveNote: (state, action) => {

            state.active = action.payload
            state.messageSaved = ''

        },
        setNotes: (state, action) => {

            state.notes = action.payload

        },
        setSaving: (state) => {

            state.isSaving = true
            state.messageSaved = ''
            //TODO: mensaje de error
        },
        updateNote: (state, action) => {
            state.isSaving = false
            state.notes = state.notes.map(note => {

                if (note.id === action.payload.id) {
                    return action.payload
                }

                return note
            })

            //TODO: mostrar msj de actualizacion...
            state.messageSaved = `${action.payload.title}, actualizada correctamente`
        },
        deleteNoteById: (state, action) => {

        }
    },
})

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById, isSaving } = journalSlice.actions