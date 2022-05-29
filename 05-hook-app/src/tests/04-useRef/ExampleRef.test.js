import { shallow } from 'enzyme';
import { ExampleRef } from '../../components/04-useRef/ExampleRef';

describe('Pruebas en useRef', () => {

    const wrapper = shallow( <ExampleRef /> )
    
    test('debe mostrarse correctamente', () => {
      
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'MultipleCustomHook').exists() ).toBe( false );

    })

    test('debe de mostrar el componente <MultipleCustomHook/>', () => {
      
        wrapper.find('button').simulate('click');
        expect( wrapper.find( 'MultipleCustomHook').exists() ).toBe( true );

    })
    
    
})
