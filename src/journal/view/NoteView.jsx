import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { useEffect } from "react"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startSaveNote } from "../../store/journal/thunks"
import { ImageGallery } from "../components"


export const NoteView = () => {

    const dispatch = useDispatch()

    const { active: note } = useSelector(state => state.journal)

    const { body, title, onInputChange, formState, date } = useForm(note)

    const dateString = useMemo(() => {

        const newDate = new Date(date)
        return newDate.toUTCString()

    }, [date])


    useEffect(() => {

        dispatch(setActiveNote(formState))

    }, [formState])

    const onSaveNote = () => {

        dispatch(startSaveNote())

    }



    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }} className='animate__animated animate__fadeIn'>

            <Grid item>

                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>

            </Grid>

            <Grid item>
                <Button
                    color="primary" sx={{ padding: 2 }}
                    onClick={onSaveNote}
                >
                    <SaveOutlined
                        sx={{ fontSize: 30, mr: 1 }}
                    />
                    Guardar
                </Button>
            </Grid>

            <Grid container>

                <TextField
                    type={"text"}
                    variant={"filled"}
                    fullWidth
                    placeholder="Ingrese un titulo"
                    label="Titulo"
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type={"text"}
                    variant={"filled"}
                    fullWidth
                    multiline
                    placeholder="¿Que sucedio hoy?"
                    minRows={5}
                    sx={{ border: 'none', mb: 1 }}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />

                {/* Galeria de imagenes */}
                <ImageGallery />

            </Grid>

        </Grid>
    )
}
