import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types'


export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handeLogout = () => {

        dispatch({type: types.logout});

        navigate('/login', {
            replace: true
          });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                HeroesApp
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/search"
                    >
                        Búscar
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>
                        { user.name }
                    </span>

                    <button
                        className="nav-item nav-link btn" 
                        onClick={handeLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}