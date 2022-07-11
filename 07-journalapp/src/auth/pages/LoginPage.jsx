import { Link as RouterLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Button, Grid, Link, TextField, Typography} from '@mui/material';
import { Google } from '@mui/icons-material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { checkingAuth, startGoogle } from '../../store/auth';
import { useMemo } from 'react';

export const LoginPage = () => {

  const { status } = useSelector( state => state.auth );

  const dispatch =  useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'mariana@correo.com',
    password: '0311'
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const onSubmit = ( event ) => {
    event.preventDefault();

    dispatch(checkingAuth());
  }

  const onGoogle = () => {
    dispatch(startGoogle());
  }

  return (
    <AuthLayout title='Iniciar sesión'>
      <form onSubmit={ onSubmit }>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@correo.com' 
                fullWidth 
                name='email'
                onChange={onInputChange}
                value={email}
              />
            </Grid>
            <Grid item xs={12} sx={{mt:3}}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña'
                fullWidth 
                name='password'
                onChange={onInputChange}
                value={password}
              />
            </Grid>
            <Grid container spacing={2} sx={{mb:2, mt:2}}>
                <Grid item xs={12} md={6}>
                  <Button
                    disabled ={isAuthenticating} 
                    type='submit' 
                    variant='contained' 
                    fullWidth
                  >
                    Iniciar
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    disabled ={isAuthenticating} 
                    onClick={onGoogle} 
                    variant='contained' 
                    fullWidth
                  >
                    <Google/>
                    <Typography sx={{ml:1}}>Google</Typography>
                  </Button>
                </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to='/auth/register'>
                Crear una cuenta
              </Link>
            </Grid>

          </Grid>
        </form>
    </AuthLayout>
  )
}