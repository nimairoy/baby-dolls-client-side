import React from 'react';
import { Link } from 'react-router-dom';

const DollCard = ({ doll }) => {

    const { _id, doll_name, photo, price, quantity, category, seller_name } = doll;

    return (
        <div className="md:flex justify-between gap-4 rounded-md items-center bg-slate-200 mb-8 p-4">
            <div className='md:flex items-center gap-4'>
                <img className='w-44 mb-4 md:mb-2' src={photo} alt="" />
                <div>
                    <h4 className="text-xl font-bold">{doll_name}</h4>
                    <p className='mt-3'><strong>Price: </strong> ${price}</p>
                    <p className='mt-3'><strong>Quantity: </strong> {quantity}</p>
                    <p className='mt-3'><strong>Category: </strong>{category}</p>
                    <p className='mt-3'><strong>Seller: </strong> {seller_name}</p>
                </div>
            </div>
            <div className='pr-8'>
                <Link to={`/dolls/${_id}`} className='btn mt-4 md:auto sm:btn-sm md:btn-md btn-secondary'>View Details</Link>
            </div>
        </div>
    );
};

export default DollCard;