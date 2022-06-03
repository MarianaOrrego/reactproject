import { mount, shallow } from 'enzyme';
import { ToDoApp } from '../../components/08-useReducer/ToDoApp';
import { demoToDo } from '../fixtures/demoToDo';
import { act } from '@testing-library/react';

describe('Pruebas en <ToDoApp />', () => {

    const wrapper = shallow( <ToDoApp />);
    Storage.prototype.setItem = jest.fn( () =>{});
  
    test('debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
      
    });

    test('debe de agregar un ToDo', () => {

        const wrapper = mount( <ToDoApp /> );

        act( () => {
            wrapper.find('ToDoAdd').prop('handleAddToDo')( demoToDo[0] );
            wrapper.find('ToDoAdd').prop('handleAddToDo')( demoToDo[1] );
        });

        expect( wrapper.find('h1').text().trim() ).toBe('To do list App ( 2 )');
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
        
    });

    test('debe eliminar un ToDo', () => {
      
        wrapper.find('ToDoAdd').prop('handleAddToDo')(demoToDo[0] );
        wrapper.find('ToDoList').prop('handleDelete')(demoToDo[0].id );

        expect( wrapper.find('h1').text().trim()).toBe('To do list App ( 0 )');

    });
    
})
