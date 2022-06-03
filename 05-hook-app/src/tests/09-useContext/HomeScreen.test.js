import { HomeScreen } from "../../components/09-useContext/HomeScreen"
import { mount } from 'enzyme';
import { UserContext } from "../../components/09-useContext/UserContext";

describe('Pruebas en <HomeScreen />', () => {

    const user = {
        name: 'Mariana',
        email: 'mariana@correo.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('debe mostrarse correctamente ', () => {

        expect(wrapper).toMatchSnapshot();

    })

})
