import { toDoReducer } from "../../components/08-useReducer/toDoReducer"
import { demoToDo } from "../fixtures/demoToDo";

describe('Pruebas en toDoReducer', () => {

    test('debe retornar el estado por defecto', () => {

        const state = toDoReducer(demoToDo, {});

        expect(state).toEqual(demoToDo);

    });

    test('debe de agregar un To Do', () => {

        const newToDo = {
            id: 3,
            desc: 'Aprender Java',
            donde: false
        }

        const action = {
            type: 'add',
            payload: newToDo
        };

        const state = toDoReducer( demoToDo, action );
        expect( state .length ).toBe( 3 );
        expect( state ).toEqual( [...demoToDo, newToDo] );

    });

    test('debe de eliminar un To Do', () => {

        const action = {
            type: 'delete',
            payload: 2
        };

        const state = toDoReducer( demoToDo, action );
        expect( state.length ).toBe( 1 );
        expect( state ).toEqual( [demoToDo[0]] );

    });

    test('debe de hacer el toggle del To Do', () => {
      
        const action = {
            type: 'toggle',
            payload: 1
        };

        const state = toDoReducer( demoToDo, action );
        expect( state[0].done ).toBe( true );
        expect( state[1] ).toEqual( demoToDo[1] );

    });

})
