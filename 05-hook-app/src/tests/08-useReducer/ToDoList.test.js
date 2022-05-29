import { shallow } from 'enzyme';
import { ToDoItem } from '../../components/08-useReducer/ToDoItem';
import { demoToDo } from '../fixtures/demoToDo';

describe('Pruebas en <toDoList />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <ToDoItem
                    tarea= { demoToDo } 
                    handleDelete = { handleDelete } 
                    handleToggle = { handleToggle }
                />          
    )

    test('debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
        
    });
    
    test('debe tener dos <ToDoItem />', () => {

        // expect(wrapper.find('ToDoItem').length).toBe( demoToDo.length );
        // console.log(wrapper.find('ToDoItem').at(0).prop('handleDelete')).toEqual( expect.any(Function));
      
    });
    
})
