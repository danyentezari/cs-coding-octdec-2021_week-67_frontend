import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from './logo.svg';

function NavBar(props) {

    console.log( props.path )

    const initialState = {
        'home': '',
        'register': ''
    }
    const [state, setState] = useState(initialState)


    useEffect(
        function() {

            if(props.path === '/') {
                setState(
                    {...initialState, 'home': 'active'}
                )
            } else  if(props.path === '/register') {
                setState(
                    {...initialState, 'register': 'active'}
                )
            }
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
                    <Link to="/" className={`nav-link ${state['home']}`}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className={`nav-link ${state['register']}`}>Register</Link>
                </li>
            </ul>
            </header>
        </div>
    )
}

export default NavBar;