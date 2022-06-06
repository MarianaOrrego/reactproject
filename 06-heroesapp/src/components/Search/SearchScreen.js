import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../Hooks/useForm';
import { getHeroeByName } from '../../selectors/getHeroByName';
import { HeroeCard } from '../Heroe/HeroeCard';
import { useMemo } from 'react';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);
  
  const [ formValues, handleInputChange] = useForm({
    searchText: q,
  })

  const { searchText } = formValues;

  const heroesFiltrados = useMemo( () => getHeroeByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <div className="row mt-5">
        <div className="col-md-5">
        <h4>Búscar heroe</h4>
        <hr/>
          <form onSubmit={handleSearch}>
            <input
              autoComplete="off"
              className="form-control"
              name="searchText"
              placeholder="Heroe de interes "
              type="text"
              value={searchText}
              onChange={handleInputChange}
            />

            <button
              className="btn btn-outline-primary mt-3"
              type="submit"
              onChange={handleInputChange}
            >
              Buscar
            </button>

          </form>
        </div>
        <div className="col-md-7">
          <h4>Resultados</h4>
          <hr/>
          {
            (q === '')
            ? <div className='alert alert-info'>Esperando búsqueda</div>
            : (heroesFiltrados.length === 0 ) 
              && <div className='alert alert-danger'>No hay resultados para: {q}</div>
          }

          {
            heroesFiltrados.map( heroe => (
              <HeroeCard
                key={ heroe.id }
                { ...heroe}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}