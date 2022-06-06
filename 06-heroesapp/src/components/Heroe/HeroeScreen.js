import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroeById } from "../../selectors/getHeroById";

export const HeroeScreen = () => {

  const {heroeId} = useParams();

  const heroe = useMemo( () => getHeroeById( heroeId ), [heroeId]);

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  }

  if (!heroe){
    return <Navigate to='/'/>
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = heroe;

  const imagePath = `/assets/heroes/${id}.jpg`;

    return (
      <div className='row mt-5 animate__animated animate__fadeIn'>
        <div className='col-md-4'>
          <img 
            src={imagePath}
            alt={superhero}
            className='img-thumbnail'
          />
        </div>
        <div className='col-md-8'>
          <h3>{superhero}</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <b>Alter ego:</b> {alter_ego}
            </li>
            <li className='list-group-item'>
              <b>Publisher:</b> {publisher}
            </li>
            <li className='list-group-item'>
              <b>Appearance:</b> {first_appearance}
            </li>
          </ul>

          <h5 className="mt-3">Characters</h5>
          <p>{characters}</p>

          <button
            className="btn btn-outline-info"
            onClick={ handleReturn }
          >
            Regresar
          </button>
        </div>
      </div>
    )
  }