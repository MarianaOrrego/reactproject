import { AppRouter } from "../../Routers/AppRouter";
import { mount } from 'enzyme';
import { AuthContext } from "../../auth/authContext";

describe('Pruebas en AppRouter', () => {

    const contextValue = {
        user:{
            logged: false
        }
    }
  
    test('debe mostrar el login si no esta autenticado', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim()).toBe( 'Login' );

    });

    test('debe mostrar el componente Marvel si esta autenticado', () => {

        const contextValue = {
            user:{
                logged: true,
                name: 'Mariana'
            }
        }
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.navbar').exists()).toBe( true );

    });
    
})
