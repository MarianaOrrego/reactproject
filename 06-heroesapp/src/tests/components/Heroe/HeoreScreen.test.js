import { mount } from 'enzyme';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { HeroeScreen } from '../../../components/Heroe/HeroeScreen';


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))


describe('Pruebas en HeroeScreen', () => {

    test('no debe mostrar el HeroeScreen si no hay un heroe en URL', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe']}>
                <Routes>
                    <Route path='/' element={<h1>No hay heroe</h1>} />
                    <Route path='/heroe' element={<HeroeScreen />} />
                </Routes>
            </MemoryRouter>
        )

        expect( wrapper.find('h1').text().trim()).toBe('No hay heroe');

    });

    test('debe mostrar un heroe si el parametro existe ', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
                <Routes>
                    <Route path='/' element={<h1>No hay heroe</h1>} />
                    <Route path='/heroe/:heroeId' element={<HeroeScreen />} />
                </Routes>
            </MemoryRouter>
        )

        expect(wrapper.find('.row').exists()).toBe(true);

    });

    test('debe de regresar a la pantalla anterior', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
                <Routes>
                    <Route path='/heroe/:heroeId' element={<HeroeScreen />} />
                </Routes>
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')();

        expect( mockNavigate ).toHaveBeenCalledWith(-1);
      
    });
    
    test('debe mostrar el No hay heroe si no se tiene un heroe', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/marvel-spider11']}>
                <Routes>
                    <Route path='/' element={<h1>No hay heroe</h1>} />
                    <Route path='/heroe/:heroeId' element={<HeroeScreen />} />
                </Routes>
            </MemoryRouter>
        )

        expect(wrapper.text()).toBe('No hay heroe');

    });
})
