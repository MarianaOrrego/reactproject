import { useForm } from "../../hooks/useForm";

export const ToDoAdd = ({ handleAddToDo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {

        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }
        const nuevaTarea = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddToDo( nuevaTarea );
        reset();
    }

    return (
        <>
            <h4>Agregar tarea</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    autoComplete='off'
                    className='form-control'
                    name='description'
                    onChange={handleInputChange}
                    placeholder='Tarea pendiente...'
                    type='text'
                    value={description}
                />

                <div className='d-flex justify-content-center mt-3'>
                    <button className='btn btn-outline-primary' type='submit'>
                        Agregar
                    </button>
                </div>

            </form>
        </>
    )
}

