import { Box } from "@mui/system"
import { NavBar } from "../components/NavBar"

const drawerWidht = 240

export const JournalLayout = ({ children }) => {
    return (
        /* El Box es como un div */
        <Box sx={{ display: 'flex' }}>

            {/* Navbar drawerWidht */}
            <NavBar drawerWidht={drawerWidht} />


            {/* Sidebar drawerWidht */}

            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}>

                {/* Toolbar */}

                {children}

            </Box>

        </Box>
    )
}
