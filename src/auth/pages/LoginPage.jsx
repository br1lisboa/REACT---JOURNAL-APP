import { useEffect, useState } from "react"

import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { checkingAuhtentication, startGoogleSignIn, startLoginSignInWhitCredentials } from "../../store/auth/thunks"
import { useMemo } from "react";

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe tener un @'],
    password: [(value) => value.length >= 6, 'El password debe contener mas de 6 letras']
}

const formData = {
    email: "",
    password: ""
}

export const LoginPage = () => {


    const { email, password, onInputChange, formState, emailValid, passwordValid } = useForm(formData, formValidations)


    const dispatch = useDispatch()

    const { status, errorMessage } = useSelector(state => state.auth)
    const isAuthenticated = useMemo(() => status === 'checking', [status])

    const [formSubmited, setFormSubmited] = useState(false)



    /* auth mail / password */
    const onSubmit = (event) => {
        event.preventDefault()

        setFormSubmited(true)

        console.log({ email, password })

        //! NO ES LA ACCION CORRECTA
        dispatch(startLoginSignInWhitCredentials(formState))
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
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmited}
                            helperText={emailValid} />
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
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmited}
                            helperText={passwordValid} />
                    </Grid>

                    {/* Contenedor botones */}
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

                        <Grid item xs={12}
                            display={errorMessage ? '' : 'none'}>

                            <Alert severity="error">

                                {errorMessage}

                            </Alert>
                        </Grid>


                        {/* Boton login */}
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticated}
                                type="submit"
                                variant="contained"
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>
                        {/* Boton Google login */}
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticated}
                                onClick={onGoogleSignIn}
                                variant="contained"
                                fullWidth
                            >
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
