import { useState } from 'react';
import { useCouter } from '../../hooks/useCouter';
import { Small } from './Small';
import './memo.css'

export const Memorize = () => {

  const { counter, increment} = useCouter( 10 );
  const [ show, setShow ] = useState( true );

  return (
    <div>
      <h1>Memo <Small values={ counter }/> </h1>
      <hr/>

      <button
        className='btn btn-primary'
        onClick={ increment }
      >
        +1
      </button>

      <button
        className='btn btn-outline-primary'
        onClick={ () => {
          setShow( !show );
        } }
      >
        Show/Hide { JSON.stringify( show ) }
      </button>
    </div>
  )
}
