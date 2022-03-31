import { getUser, getUsuarioActivo } from "../../base/05-funciones"
import '@testing-library/jest-dom';

describe('Preuebas en 05-funciones.js', () => {

  test('getUser debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual( userTest )
  })
  
  test('getUsuarioActivo debe retornar un objeto', () => {

        const nombre = 'Mariana';

        const usuario = getUsuarioActivo( nombre );

        expect( usuario ).toEqual( {
            uid: 'ABC567',
            username: nombre
        });

  })
  
})
