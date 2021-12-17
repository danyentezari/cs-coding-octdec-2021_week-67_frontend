import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';
import logo from './logo.svg';

function NavBar(props) {

    const [state, setState] = useState({})
    const { loggedIn } = useContext(UserContext)

    console.log('loggedIn', loggedIn)

    useEffect(
        function() {
            setState(
                {
                    // Use spread syntax to copy a new blank object
                    ...{}, 
                    // Overwrite with new key-value pair, where the key 
                    // is the current path
                    [props.path]: 'active'
                }
            )
        },
        [props.path]
    )



    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <img src={logo} alt="logo" width="64" /> 
                <span className="fs-4">Simple header</span>
            </Link>

            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to="/" className={`nav-link ${state['/']}`}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className={`nav-link ${state['/about']}`}>About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className={`nav-link ${state['/contact']}`}>Contact</Link>
                </li>
                { 
                    loggedIn === false &&
                    <li className="nav-item">
                        <Link to="/register" className={`nav-link ${state['/register']}`}>Register</Link>
                    </li>
                }
                { 
                    loggedIn === false &&
                    <li className="nav-item">
                        <Link to="/login" className={`nav-link ${state['/login']}`}>Login</Link>
                    </li>
                }
                { 
                    loggedIn === true &&
                    <li className="nav-item">
                        <Link to="/profile" className={`nav-link ${state['/profile']}`}>Profile</Link>
                    </li>
                }
            </ul>
            </header>
        </div>
    )
}

export default NavBar;