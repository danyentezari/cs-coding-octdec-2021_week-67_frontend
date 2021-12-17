import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
// Connect to the context (i.e, global state)
import {UserContext} from './UserContext';

function ProfileScreen() {

    const { firstName, lastName, email, avatar, updateUser } = useContext(UserContext);

    function logout() {
        updateUser(
            {
                ...{}
            }
        )
        localStorage.clear()
    }

    if (!localStorage.getItem('jsonwebtoken')) {
        return (<Redirect to="/login" />)
    }
    else {
        return (
            <div>
                <div className="container py-5" style={{maxWidth: 600 }}>
                    <h1>My Profile</h1>
                    <div>
                        <ul>
                            <li>{firstName}</li>
                            <li>{lastName}</li>
                            <li>{email}</li>
                            <li>{avatar}</li>
                        </ul>
                    </div>
                    <button onClick={logout} className="btn btn-danger">Log out</button>
                </div>  
            </div>
        )
    }
}

export default ProfileScreen;