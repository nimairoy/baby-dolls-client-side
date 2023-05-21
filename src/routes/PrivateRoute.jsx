import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    const color = 'green';

    if (loading) {
        return <div className='flex justify-center my-12'>
            <HashLoader
                loading={loading}
                color={color}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    }

    if (user?.email) {
        return children;
    }

    return <>
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    </>
};

export default PrivateRoute;