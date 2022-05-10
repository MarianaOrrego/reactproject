import {useEffect, useState} from 'react';
import './effect.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState( {
        name: '',
        email: ''
    });

    const { name, email } = formState;
    
    useEffect( () => {
        // console.log('Hola');
    }, [] );

    useEffect( () => {
        // console.log('formState cambió');
    }, [ formState ] );

    useEffect( () => {
        // console.log('email cambió');
    }, [ email ] );

    const handleInputChange = ( {target} ) => {

        setFormState({
            ...formState,
            [ target.name ] : target.value
        });
    }

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Nombre"
            autoComplete="off"
            value={ name } 
            onChange={ handleInputChange }
        />
      </div>
      <div className="form-group">
        <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Correo"
            autoComplete="off"
            value={ email } 
            onChange={ handleInputChange }
        />
      </div>

      { (name === '123') && <Message />}
    </>
  )
}
