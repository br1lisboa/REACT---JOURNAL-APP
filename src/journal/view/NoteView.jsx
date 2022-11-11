import { useEffect, useRef } from "react"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { setActiveNote } from "../../store/journal/journalSlice"
import { startSaveNote, startUploadingFiles } from "../../store/journal/thunks"
import { ImageGallery } from "../components"
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { SaveOutlined, UploadOutlined } from "@mui/icons-material"



export const NoteView = () => {

    const dispatch = useDispatch()

    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal)

    const { body, title, onInputChange, formState, date } = useForm(note)

    const dateString = useMemo(() => {

        const newDate = new Date(date)
        return newDate.toUTCString()

    }, [date])

    const fileInputRef = useRef()


    useEffect(() => {

        dispatch(setActiveNote(formState))

    }, [formState])

    useEffect(() => {

        if (messageSaved.length > 0) {

            Swal.fire('Nota actualizada', messageSaved, 'success')

        }

    }, [messageSaved])


    const onSaveNote = () => {

        dispatch(startSaveNote())

    }

    const onFileInputChange = ({ target }) => {

        if (target.files === 0) return

        console.log('subiendo archivos...')
        dispatch(startUploadingFiles(target.files))

    }


    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }} className='animate__animated animate__fadeIn'>

            <Grid item>

                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>

            </Grid>

            <input
                type="file"
                multiple
                ref={fileInputRef}
                onChange={onFileInputChange}
                style={{ display: 'none' }}
            />

            <IconButton
                color="primary"
                disabled={isSaving}
                onClick={() => fileInputRef.current.click()} // de esta manera llamamos a la referencia
            >
                <UploadOutlined />
            </IconButton>

            <Grid item>
                <Button
                    disabled={isSaving}
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
