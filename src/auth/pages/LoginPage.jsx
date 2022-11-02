import { Grid, TextField, Typography } from "@mui/material"

export const LoginPage = () => {
    return (
        /* Grid se puede ver como un div pero con props interesantes, la mayor parte de los componentes de material vienen con un xs, y tenemos una popiedad sx que es style extended y tenemos acceso al tema que definimos con nuestro teamProvider*/
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}>

            {/* xs en pantallas pequeñas tendra 3 posiciones, tenemos md, xl */}
            <Grid item
                className="box-shadow"
                xs={3}
                sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}>

                <Typography variant="h5"
                    sx={{ mb: 1 }}>
                    Login
                </Typography>

                <form>
                    <Grid container >
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="Correo"
                                type="email"
                                placeholder="correo@google.com"
                                fullWidth />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="Contraseña"
                                type="paswword"
                                placeholder="Contraseña"
                                fullWidth />
                        </Grid>
                    </Grid>
                </form>

            </Grid >

        </Grid >
    )
}
