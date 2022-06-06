import {Link} from 'react-router-dom';

export const HeroeCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const imagePath = `assets/heroes/${id}.jpg`;

    return (
        <div className='mt-4 animate__animated animate__fadeIn'>
            <div className='card'>
                <div className='row'>
                    <div className='col-md-4 my-auto d-flex justify-content-center'>
                        <img src={imagePath} className='card-img' style={{width: '50%'}} alt='{superhero}' />
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h3 className='card-title'>{superhero}</h3>
                            <p className='card-text'>{alter_ego}</p>
                            {
                                (alter_ego !== characters) 
                                    && <p className='text-muted'>{characters}</p>
                            }
                            <Link to={`/heroe/${id}`}>
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}