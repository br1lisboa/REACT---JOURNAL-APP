import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const NavBar = ({ drawerWidht = 240 }) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidht}px)` },
                ml: { sm: ` ${drawerWidht}px` }
            }}>

            <Toolbar>
                <IconButton
                    color="inherit"
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}>
                    <MenuOutlined />
                </IconButton>

                <Grid container
                    direction='row'
                    justifyContent='space-between'
                    alignItems="center">

                    <Typography variant="h6" noWrap component="div">Journal APP</Typography>

                    <IconButton color="error">
                        <LogoutOutlined />
                    </IconButton>
                </Grid>

            </Toolbar>

        </AppBar>
    )
}
