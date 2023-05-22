import React from 'react';
import img1 from '../../../assets/offerBanner/offerBanner1.jpg';
import img2 from '../../../assets/offerBanner/offerBanner2.jpg';

const OffersBanner = () => {
    return (
        <div className='py-16 my-container'>
            <div className='grid md:grid-cols-2 gap-4 '>
                <div>
                    <img className='rounded-md' src={img1} alt="" />
                    <div className='text-center mt-8'>

                        <h3 className="text-2xl font-bold">Up to 20% Off</h3>
                        <p className='my-4'>Selected Gabby's Dollhouse Toys</p>
                        <button className='btn btn-outline btn-secondary rounded-2xl'>Buy Now</button>
                    </div>
                </div>
                <div>
                    <img className='rounded-md' src={img2} alt="" />
                    <div className='text-center mt-8'>

                        <h3 className="text-2xl font-bold">Up to 20% Off</h3>
                        <p className='my-4'>on selected Peppa Pig toys</p>
                        <button className='btn btn-outline btn-secondary rounded-2xl'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OffersBanner;