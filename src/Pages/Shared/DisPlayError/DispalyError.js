import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DispalyError = () => {
    const {logOut}=useContext(AuthContext)
    const error=useRouteError();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <p className='text-red-500'>somthing went wrong</p>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <h4 className='text-3xl'>please <button onClick={handleLogOut}>Sign out</button>and log back in </h4>
        </div>
    );
};

export default DispalyError;