export const ToDoItem = ({ tarea, i, handleDelete, handleToggle}) => {
    return (
        <li
            key={tarea.id}
            className='list-group-item'
        >
            <p
                className={` ${tarea.done && 'complete'} `}
                onClick={() => handleToggle(tarea.id)}
            >
                {i + 1}.  {tarea.desc}
            </p>

            <button
                className='btn btn-danger'
                onClick={() => handleDelete(tarea.id)}
            >
                Borrar
            </button>
        </li>
    )
}
