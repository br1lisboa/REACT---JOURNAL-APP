import { useEffect } from "react"

import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { checkingAuhtentication, startGoogleSignIn } from "../../store/auth/thunks"

export const LoginPage = () => {

    const { mail, password, onInputChange } = useForm({
        mail: "test1@test1.com",
        password: "123456"
    })

    const dispatch = useDispatch()

    /* auth mail / password */
    const onSubmit = (event) => {
        event.preventDefault()

        console.log({ mail, password })
        dispatch(checkingAuhtentication())
    }

    /* auth google signin */
    const onGoogleSignIn = () => {
        console.log('onGoogle')
        dispatch(startGoogleSignIn())
    }




    return (
        /* Grid se puede ver como un div pero con props interesantes, la mayor parte de los componentes de material vienen con un xs, y tenemos una popiedad sx que es style extended y tenemos acceso al tema que definimos con nuestro teamProvider*/
        <AuthLayout title="Login">

            <form onSubmit={onSubmit}>
                {/* Contenedor del form */}
                <Grid container >
                    {/* Input correo */}
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name="mail"
                            value={mail}
                            onChange={onInputChange} />
                    </Grid>
                    {/* Input contraseña */}
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="paswword"
                            placeholder="Contraseña"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange} />
                    </Grid>

                    {/* Contenedor botones */}
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        {/* Boton login */}
                        <Grid item xs={12} sm={6}>
                            <Button type="submit" variant="contained" fullWidth>
                                Login
                            </Button>
                        </Grid>
                        {/* Boton Google login */}
                        <Grid item xs={12} sm={6}>
                            <Button onClick={onGoogleSignIn} variant="contained" fullWidth>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    {/* Contenedor link a pagina de registro */}
                    <Grid container
                        direction="row"
                        justifyContent="end">
                        {/* Link a register, con ROuterLink ya que renombramos en la importacion el componente Link de react */}
                        <Link component={RouterLink} color="inherit" to="/auth/register">
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>

        </AuthLayout>
    )
}
