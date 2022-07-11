import { Link as RouterLink} from 'react-router-dom';
import {Button, Grid, Link, TextField, Typography} from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const formData = {
  email: 'mariana@correo.com',
  password: '0311',
  displayName: 'Mariana Orrego F'
}

const formValidation = {
  email: [ ( value ) => value.includes('@'), 'El correo debe tener un @'],
  password: [ ( value ) => value.length >= 6, 'La contraseña debe de tener mas de 6 caracteres'],
  displayName: [ ( value ) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

  const { formState, displayName, email, password, onInputChange, 
          isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidation );

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <AuthLayout title='Crear cuenta'>
      <form onSubmit={onSubmit}>
          <Grid container>
          <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="Nombre" 
                type="text" 
                placeholder='Mariana' 
                fullWidth 
                name='displayName'
                value={ displayName }
                onChange={ onInputChange }
                error={ !displayNameValid }
                helperText={ displayNameValid }
              />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@correo.com' 
                fullWidth 
                name='email'
                value={ email }
                onChange={ onInputChange }
              />
            </Grid>
            <Grid item xs={12} sx={{mt:3}}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña'
                fullWidth 
                name='password'
                value={ password }
                onChange={ onInputChange }
              />
            </Grid>
            <Grid container spacing={2} sx={{mb:2, mt:2}}>
                <Grid item xs={12} md={12}>
                  <Button 
                    type="submit"
                    variant='contained' 
                    fullWidth
                  >
                    Crear cuenta
                  </Button>
                </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr:2}}>¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to='/auth/login'>
                Ingresar
              </Link>
            </Grid>

          </Grid>
        </form>
    </AuthLayout>
  )
}