import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateNote } from "../../store/journal/journalSlice"
import { SideBarItem } from "./SideBarItem"

export const SideBar = ({ drawerWidht = 240 }) => {

    const dispatch = useDispatch()

    const { displayName } = useSelector(state => state.auth)

    const { notes } = useSelector(state => state.journal)





    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidht }, flexShrink: { sm: 0 } }}>

            <Drawer
                variant="permanent"
                open={true}
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidht }
                }}>

                <Toolbar>
                    <Typography variant="h5" noWrap component='div'>{displayName}</Typography>
                </Toolbar>

                <Divider />

                <List>
                    {
                        notes.map(note => (
                            <SideBarItem key={note.id} note={note} />
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}
