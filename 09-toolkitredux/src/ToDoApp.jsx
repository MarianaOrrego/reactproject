import { useState } from "react";
import { useGetToDosQuery, useGetToDosIdQuery } from "./store/apis/toDosApi"

export const ToDoApp = () => {

    const [todoId, setTodoId] = useState(1);

    const {data: todo, isLoading} = useGetToDosIdQuery(todoId);

    const nextToDo = () => {
        setTodoId( todoId + 1);
    }

    const prevToDo = () => {
        if(todoId === 1) return;
        setTodoId( todoId - 1);
    }

  return (
    <>
      <h1>To Do - RTK Query</h1>
      <hr/>
      <h4>isLoading: {isLoading ? 'True': 'False'}</h4>

      <pre>{ JSON.stringify(todo)}</pre>

      <button onClick={prevToDo}>
        Anterior tarea
      </button>
      <button onClick={nextToDo}>
        Siguiente tarea
      </button>

      {/* <ul>
        {todos.map (toDo => (
            <li key={toDo.id}>
                <strong>{ toDo.completed ? 'Completo ' : 'Pendiente ' }</strong>
                { toDo.title }
            </li>
        ))}
      </ul> */}

      
    </>
  )
}