import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { PrivateRoutes } from "../../Routers/PrivateRoutes";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: () => <span>Redirigiendo al LoginScreen</span>
}));


describe('Pruebas en PrivateRoutes', () => {

    Storage.prototype.setItem = jest.fn();

    test('debe de mostrar el componenete si esta autenticado, guardar en localStorage', () => {
      
        const contextValue = {
            user: {
                logged: true,
                name: 'Andrea'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}> {/*Debido al useLocation se emplea el MemoryRouter */}
                    <PrivateRoutes>
                        <h1>Componentes privados</h1>
                    </PrivateRoutes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper.text().trim() ).toBe('Componentes privados');
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/');

    });

    test('debe de bloquear el componente si no esta autenticado ', () => {

        const contextValue = {
            user: {
                logged: false
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}> 
                    <PrivateRoutes>
                        <h1>Componentes privados</h1>
                    </PrivateRoutes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper.text().trim() ).toBe('Redirigiendo al LoginScreen');

    });
     
  
})
