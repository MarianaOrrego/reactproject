import { useCouter } from '../../hooks/useCouter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effect.css';

export const MultipleCustomHook = () => {

    const {counter, increment} = useCouter(1);

    const { loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const {author, quote } = !!data && data[0];

    console.log(author, quote)

  return (
    <div>
      <h1>BreakingBad</h1>
      <hr />

      {
        loading
        ?
          (
            <div className='alert alert-info'>
                Loading...
            </div>
          )
        :
          (
            <blockquote className='blockquote text-right'>
              <p className='mb-0'>{ quote }</p>
              <footer className='blockquote-footer mt-1'>{ author }</footer>
            </blockquote>
          )
      }

      <div className='d-flex justify-content-center'>
        <button 
          className='btn btn-primary'
          onClick={ increment }>
          Siguiente frase
        </button>
      </div>

    </div>
  )
}