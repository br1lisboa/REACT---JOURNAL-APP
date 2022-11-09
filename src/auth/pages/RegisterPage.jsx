import { Link as RouterLink } from "react-router-dom";

import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWhitEmailPassword } from "../../store/auth/thunks";
import { useMemo } from "react";


/* DATOS ESTATICOS DEL FORMULARIO */
const formData = ({
    email: '',
    password: '',
    displayName: ''
})

/* ES UN SIEMPLE OBJETO CON LOS MISMOS VALORES QUE LOS DE NUESTRO REGISTRO, CADA ARREGLO TIENE EN SU PRIMER
POSICION LA FUNCION A EVALUAR Y EN SU SEGUNDA POSICION EL DE ERROR SI NO SE CUMPLE LA CONDICION */
const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe tener un @'],
    password: [(value) => value.length >= 6, 'El password debe contener mas de 6 letras'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio']
}

const RegisterPage = () => {

    const dispatch = useDispatch()


    const [formSubmited, setFormSubmited] = useState(false)


    const { status, errorMessage } = useSelector(state => state.auth)
    const isCheckingAtuhentication = useMemo(() => status === 'checking', [status])



    /* CUSTOM HOOK USEFORM PARA TOMAR LOS DATOS DEL FORMULARIO */
    const { displayName, email, password, onInputChange, formState,
        isFormValid, displayNameValid, emailValid, passwordValid } = useForm(formData, formValidations)




    const onSubmit = (event) => {
        event.preventDefault()
        setFormSubmited(true)

        if (!isFormValid) return

        dispatch(startCreatingUserWhitEmailPassword(formState))
    }


    return (
        /* Grid se puede ver como un div pero con props interesantes, la mayor parte de los componentes de material vienen con un xs, y tenemos una popiedad sx que es style extended y tenemos acceso al tema que definimos con nuestro teamProvider*/
        <AuthLayout title="Crear cuenta">

            <form onSubmit={onSubmit}>
                {/* Contenedor del form */}
                <Grid container >
                    {/* Input datos */}
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder="Jhon Doe"
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmited}
                            helperText={displayNameValid} />
                    </Grid>
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
                            display={!!errorMessage ? ' ' : 'none'}
                        >

                            <Alert severity="error">{errorMessage}</Alert>

                        </Grid>



                        {/* Boton login */}
                        <Grid item xs={12} >
                            <Button
                                disabled={isCheckingAtuhentication}
                                type="submit"
                                variant="contained"
                                fullWidth
                            >
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>

                    {/* Contenedor link a pagina de registro */}
                    <Grid container
                        direction="row"
                        justifyContent="end">
                        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                        {/* Link a register, con RouterLink ya que renombramos en la importacion el componente Link de react */}
                        <Link component={RouterLink} color="inherit" to="/auth/login">
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>

        </AuthLayout >
    )
}

export default RegisterPage