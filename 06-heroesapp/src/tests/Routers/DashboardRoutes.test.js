import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { DashboardRoutes } from '../../Routers/DashboardRoutes'

describe('Pruebas en DashboardRoutes', () => {

    const contextValue = {
        user:{
            logged: true,
            name: 'Mariana'
        }
    }
  
    test('debe de mostrarse correctamente ruta por defecto (Marvel, /)', () => {
      
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={ ['/'] }> {/*sirve para proveer el useNavigate */}
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Mariana');
        expect(wrapper.find('h1').text().trim()).toBe('Marvel');

    });
    
    test('debe de mostrarse correctamente ruta DC', () => {
      
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={ ['/dc'] }> {/*sirve para proveer el useNavigate */}
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('DC');

    });
})
