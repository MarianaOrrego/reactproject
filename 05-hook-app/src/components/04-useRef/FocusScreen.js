import { useRef } from 'react';
import '../02-useEffect/effect.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }
    
  return (
    <div>   
      <h1>Focus screen</h1>
      <hr />

      <input
        ref={ inputRef }
        className='form-control'
        placeholder='Nombre'
      />

      <div className='d-flex justify-content-center'>
        <button 
            className='btn btn-outline-primary'
            onClick={ handleClick }
        >
            Focus
        </button>
      </div>
    </div>
  )
}