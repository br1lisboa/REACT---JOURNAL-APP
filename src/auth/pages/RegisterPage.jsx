import { Link as RouterLink } from "react-router-dom";

import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";


/* DATOS ESTATICOS DEL FORMULARIO */
const formData = ({
    mail: 'jhonDoe@jhon.com',
    password: '12345',
    displayName: 'Jhon Doe'
})

const RegisterPage = () => {

    /* CUSTOM HOOK USEFORM PARA TOMAR LOS DATOS DEL FORMULARIO */
    const { displayName, mail, password, onInputChange, formState } = useForm(formData)

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
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
                            onChange={onInputChange} />
                    </Grid>
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
                        <Grid item xs={12} >
                            <Button
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

        </AuthLayout>
    )
}

export default RegisterPage