import { Toolbar } from "@mui/material"
import { Box } from "@mui/system"
import { NavBar, SideBar } from "../components"

const drawerWidht = 240

export const JournalLayout = ({ children }) => {
    return (
        /* El Box es como un div */
        <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn'>

            {/* Navbar drawerWidht */}
            <NavBar drawerWidht={drawerWidht} />


            {/* Sidebar drawerWidht */}
            <SideBar drawerWidht={drawerWidht} />

            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}>

                {/* Toolbar */}
                <Toolbar />

                {children}

            </Box>

        </Box>
    )
}
