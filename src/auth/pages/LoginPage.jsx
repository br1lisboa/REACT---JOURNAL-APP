import { Grid } from "@mui/material"

export const LoginPage = () => {
    return (
        /* Grid se puede ver como un div pero con props interesantes, la mayor parte de los componentes de material vienen con un xs, y tenemos una popiedad sx que es style extended y tenemos acceso al tema que definimos con nuestro teamProvider*/
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}>
            {/* xs en pantallas pequeñas tendra 3 posiciones, tenemos md, xl */}
            <Grid item className="box-shadow" xs={3} sx={{backgroundColor}}>


            </Grid>

        </Grid>
    )
}
