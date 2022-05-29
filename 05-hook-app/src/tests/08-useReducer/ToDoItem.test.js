import { shallow } from 'enzyme'
import { ToDoItem } from '../../components/08-useReducer/ToDoItem'
import { demoToDo } from '../fixtures/demoToDo';


describe('Pruebas en <ToDoItem />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <ToDoItem
            tarea={demoToDo[0]}
            i={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    )

    test('debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de llamar la función handleDelete', () => {

        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoToDo[0].id);

    });

    test('debe de llamar la handleToggle', () => {

        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoToDo[0].id);

    });

    test('debe de mostrar el texto correctamente', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`1.  ${demoToDo[0].desc}`);

    });

    test('debe tener la clase complete si la tarea esta done', () => {

        const tarea = demoToDo[0];
        tarea.done = true;

        const wrapper = shallow(
            <ToDoItem
                tarea={tarea}
            />
        )

        expect(wrapper.find('p').hasClass('complete')).toBe(true);

    });

})
