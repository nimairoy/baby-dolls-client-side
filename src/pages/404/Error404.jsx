import React from 'react';
import error from '../../../src/assets/404.jpg'
import { Link } from 'react-router-dom';
import useSetTitle from '../../hooks/useSetTitle';

const Error404 = () => {
    useSetTitle('Error Page')
    return (
        <div className='relative'>
            <img className='w-full max-h-screen' src={error} alt="" />
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 ">
                <Link to='/' className='btn btn-success bg-white '>Home</Link>
            </div>
        </div>
    );
};

export default Error404;