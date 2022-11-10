import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({

    name: 'journal',

    initialState: {
        /* BANDERA BOOLEANA PARA SABER SI ESTOY GUARDANDO LA NOTA O NO */
        isSaving: true,
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
        addNewEmptyNote: (state, action) => {

        },
        setActiveNote: (state, action) => {

        },
        setNotes: (state, action) => {

        },
        setSaving: (state) => {

        },
        updateNote: (state, action) => {

        },
        deleteNoteById: (state, action) => {

        },
    },
})

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = journalSlice.actions