
import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../view/NoteView"
import { NothingSelectdView } from "../view/NothingSelectdView"
/* Se debe usar con el param variante, por defecto es un parrafo */

export const JournalPage = () => {

    const dispatch = useDispatch()

    const { isSaving, active } = useSelector(state => state.journal)
    const isActive = !!active


    const onClickNewNote = () => {

        dispatch(startNewNote())

    }



    return (
        <JournalLayout>

            {
                (active) ? <NoteView /> : <NothingSelectdView />
            }

            {/* Nada seleccionado */}
            {/* <NothingSelectdView /> */}

            {/* Vista de la nota */}
            {/* <NoteView /> */}

            <IconButton
                disabled={isSaving}
                onClick={onClickNewNote}
                size="large"
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />

            </IconButton>

        </JournalLayout>
    )
}
