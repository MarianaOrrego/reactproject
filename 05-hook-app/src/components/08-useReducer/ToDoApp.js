import { useEffect, useReducer } from 'react';
import { toDoReducer } from './toDoReducer';
import './toDoApp.css';
import { ToDoList } from './ToDoList';
import { ToDoAdd } from './ToDoAdd';

const init = () => {

  return JSON.parse(localStorage.getItem('Tareas')) || [];

}

export const ToDoApp = () => {

  const [tareas, dispatch] = useReducer(toDoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('Tareas', JSON.stringify(tareas));
  }, [tareas]);

  const handleDelete = (tareaId) => {

    const action = {
      type: 'delete',
      payload: tareaId
    }

    dispatch(action);
  }

  const handleToggle = (tareaId) => {

    dispatch({
      type: 'toggle',
      payload: tareaId
    })

  }

  const handleAddToDo = ( nuevaTarea ) =>{

    dispatch({
      type: 'add',
      payload: nuevaTarea
    })

  }


  return (
    <div>
      <h1>To do list App ( { tareas.length } )</h1>
      <hr />

      <div className='row'>
        <div className='col-md-6'>

          <ToDoList 
            tareas = { tareas }
            handleDelete = { handleDelete }
            handleToggle = { handleToggle }
          />

        </div>
        <div className='col-md-6'>

          <ToDoAdd 
            handleAddToDo = { handleAddToDo }
          />

        </div>
      </div>

    </div>
  )
}

