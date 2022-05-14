const initialState = [{
    id: 1, 
    tarea: 'Comprar chocolate',
    done: false
}];

const tareaReducer = ( state = initialState, action ) => {

    if (action?.type === 'agregar'){
        return [ ...state, action.payload];
    }

    return state;
}

let tarea = tareaReducer();

const nuevaTarea = {
    id: 2, 
    tarea: 'Comprar leche',
    done: false
}

const agregarAction ={
    type: 'agregar',
    payload: nuevaTarea
}

tarea = tareaReducer( tarea, agregarAction)

console.log( tarea )