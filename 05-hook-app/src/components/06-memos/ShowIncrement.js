import { memo } from "react";

export const ShowIncrement =memo(( {increment} ) => {

    console.log('Aparecí')

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={ () =>{
            increment( 5 );
        }}
      >
          Incrementar
      </button>
    </div>
  )
})