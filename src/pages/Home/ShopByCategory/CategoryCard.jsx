import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ doll }) => {

    const { _id, doll_name, photo, price, quantity, category, seller_name } = doll;


    return (
        <div data-aos="fade-up" data-aos-duration="3000" className='border rounded-sm bg-white hover:shadow-lg mt-4 p-4'>
            <img className='w-44' src={photo} alt="" />
            <h4 className="text-xl font-bold">{doll_name}</h4>
            <p className='mt-3'><strong>Price: </strong> ${price}</p>
            <p className='mt-3'><strong>Quantity: </strong> {quantity}</p>
            <p className='mt-3'><strong>Category: </strong>{category}</p>
            <p className='mt-3'><strong>Seller: </strong> {seller_name}</p>
            <Link to={`/dolls/${_id}`} className='btn mt-4 btn-secondary'>View Details</Link>
        </div>
    );
};

export default CategoryCard;