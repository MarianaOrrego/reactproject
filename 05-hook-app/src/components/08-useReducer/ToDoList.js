import PropTypes from 'prop-types';
import { ToDoItem } from "./ToDoItem"

export const ToDoList = ( { tareas, handleDelete, handleToggle } ) => {
    return (
        <ul className='list-group list-group-flush'>
            {
                tareas.map((tarea, i) => (
                    <ToDoItem
                        key={ tarea.id } 
                        tarea= { tarea } 
                        i = { i }
                        handleDelete = { handleDelete } 
                        handleToggle = { handleToggle }
                    />
                ))
            }
        </ul>
    )
}

ToDoList.propTypes = {
    tareas: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}