import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DollDetails = () => {

    const doll = useLoaderData();
    console.log(doll)
    const email = '';
    const { _id, doll_name, photo, price, quantity, category, seller_name, description } = doll;

    return (
        <div className="md:grid md:grid-cols-2 w-full bg-base-100 shadow-xl">
            <div className="px-10 pt-10">
                <img src={photo} alt="img" className="rounded-xl" />
            </div>
            <div className="card-body mb-8">
                <h2 className="text-4xl mb-4">{doll_name}</h2>
                <h4 className="flex justify-between"><span className='text-2xl font-bold'>Price: ${price}</span> <span className='font-bold'> In Stock <br /> {quantity}</span></h4>
                <hr />
                <p className='mt-6'><strong>Description:</strong> {description}</p>
                <p className=''><strong>Sub Category:</strong> {category}</p>
                <p className=''><strong>Seller:</strong> {seller_name}</p>
               { email && <p className=''><strong>Seller's Email:</strong> {email ? email : ''}</p>}
                <button className='btn w-1/2 mt-5 btn-secondary'> Add to Cart </button>
            </div>
        </div>
    );
};

export default DollDetails;