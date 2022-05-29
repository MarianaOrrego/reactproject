import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHook } from '../../components/03-examples/MultipleCustomHook';
import { useFetch } from '../../hooks/useFetch';
import { useCouter } from '../../hooks/useCouter';

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCouter');




describe('Pruebas en <MultipleCustomHooks />', () => {

    beforeEach( () =>  {
 
        useCouter.mockReturnValue({
            counter: 10,
            increment: () => {}
        });
 
    });

    
    test('debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHook /> );
        expect( wrapper ).toMatchSnapshot();
        
    })

    test('should debe de mostrar la información', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Mariana',
                quote: 'Pura vida'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHook /> );

        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('.mb-0').text().trim() ).toBe( 'Pura vida' );
        expect( wrapper.find('footer').text().trim() ).toBe( 'Mariana' );

    })
    
    

})


