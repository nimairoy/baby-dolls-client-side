import React from 'react';

const DollCard = ({ doll }) => {

    const { _id, doll_name, img, price, quantity, category, seller } = doll;

    return (
        <row className="md:flex justify-between gap-4 items-center bg-slate-200 mb-8 p-4">
            <div className='flex items-center gap-4'>
                <img src={img} alt="" />
                <div>
                    <h4 className="text-xl font-bold">{doll_name}</h4>
                    <p className='mt-4'><strong>Price: </strong> ${price}</p>
                    <p className='mt-4'><strong>Quantity: </strong> {quantity}</p>
                    <p className='mt-4'><strong>Category: </strong>{category}</p>
                    <p className='mt-4'><strong>Seller: </strong> {seller}</p>
                </div>
            </div>
            <div className='pr-8'>
                <button className='btn btn-secondary'>See Details</button>
            </div>
        </row>
    );
};

export default DollCard;