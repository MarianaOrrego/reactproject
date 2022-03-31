import CounterApp from "../CounterApp";
import { shallow } from 'enzyme';

describe('Pruebas para CounterApp', () => {

    let wrapper = shallow(<CounterApp />); //no es buena practica pero es funcional

    //reiniciar variables, se ejecuta en antes de cada prueba
    beforeEach( () => {

        wrapper = shallow(<CounterApp />);
    })

    test('Debe mostrar <CounterApp/> correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    })
    
    test('Debe mostrar el valor por defecto de 100', () => {
        
        const wrapper = shallow(<CounterApp value={ 100 } />)
        const newValue = wrapper.find('h2').text().trim();
        console.log(newValue);
        expect( newValue ).toBe( '100' );
    })
    
    test('Debe incrementar con el botón +1', () => {
        
        wrapper.find('button').at(0).simulate('click');
        const newValue = wrapper.find('h2').text().trim();
        expect(newValue).toBe('11');
    })

    test('Debe disminuir con el botón -1', () => {
        
        wrapper.find('button').at(2).simulate('click');
        const newValue = wrapper.find('h2').text().trim();
        expect(newValue).toBe('9');
    })

    test('Debe reinicar al valor por defecto', () => {
        
        const wrapper = shallow(<CounterApp value={ 105 } />)

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const newValue = wrapper.find('h2').text().trim();
        
        expect(newValue).toBe('105');
    })
    
    
})
