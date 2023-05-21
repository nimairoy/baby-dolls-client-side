import React from 'react';
import Error404 from '../pages/404/Error404';
import { Outlet } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <Error404></Error404>
            <Outlet></Outlet>
        </div>
    );
};

export default ErrorPage;