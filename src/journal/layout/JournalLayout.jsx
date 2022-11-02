import { Box } from "@mui/system"

const drawerWidht = 240

export const JournalLayout = ({ children }) => {
    return (
        /* El Box es como un div */
        <Box sx={{ display: 'flex' }}>

            {/* Navbar drawerWidht */}


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
