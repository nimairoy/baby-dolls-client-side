import React from 'react';
import { Link } from 'react-router-dom';

const GalleryCard = ({gallery}) => {
    const {image, title} = gallery;
    return (
        <div  data-aos="fade-up" data-aos-duration="3000" className='relative overflow-hidden shadow-md shadow-slate-200 hover:scale-95 duration-300 hover:shadow-2xl img-parent'>
            <img className='w-full' src={image} alt="" />
            <div className="img-child absolute top-full right-full duration-500 bottom-0 left-0 bg-slate-950/25">
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <p className='text-white'>{title}</p>
                    <Link to='/shop' className='btn btn-outline btn-xs btn-secondary mt-4'>Shop Now</Link>
                </div>
            </div>
        </div>
    );
};

export default GalleryCard;