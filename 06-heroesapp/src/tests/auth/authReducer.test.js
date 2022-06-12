import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {
  
    test('debe de retornar el estado por defecto', () => {
      
        const state = authReducer({ logged: false}, {});

        expect( state ).toEqual({logged: false});
        
    });

    test('debe autenticar y poner name del usuario', () => {
      
        const action = {
            type: types.login,
            payload: {
                name: 'Mariana',
            }
        }

        const state = authReducer({ logged: false}, action);

        expect( state ).toEqual({
            logged: true,
            name: 'Mariana'
        })

    });

    test('debe borrar name de usuario, logged: false', () => {
      
        const action = {
            type: types.logout,
        }

        const state = authReducer({ logged: true, name: 'Mariana'}, action);

        expect( state ).toEqual({logged:false});

    });    
    
})
