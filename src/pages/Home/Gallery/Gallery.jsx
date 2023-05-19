import React from 'react';
import img from '../../../assets/images/screenshot-1.jpg'
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <div className='py-12 mt-12'>
            <h2 className="text-4xl text-center mb-12 font-bold">See Our Products</h2>
            <div className="md:grid md:grid-cols-5">
                <div className='relative overflow-hidden img-parent'>
                    <img className='w-full' src={img} alt="" />
                    <div className="img-child absolute top-full right-full duration-500 bottom-0 left-0 bg-slate-950/25">
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <Link to='/shop' className='btn btn-outline btn-xs btn-success mt-4'>Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className='relative overflow-hidden img-parent'>
                    <img className='w-full' src={img} alt="" />
                    <div className="img-child absolute top-full right-full duration-500 bottom-0 left-0 bg-slate-950/25">
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <Link to='/shop' className='btn btn-outline btn-xs btn-success mt-4'>Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className='relative overflow-hidden img-parent'>
                    <img className='w-full' src={img} alt="" />
                    <div className="img-child absolute top-full right-full duration-500 bottom-0 left-0 bg-slate-950/25">
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <Link to='/shop' className='btn btn-outline btn-xs btn-success mt-4'>Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className='relative overflow-hidden img-parent'>
                    <img className='w-full' src={img} alt="" />
                    <div className="img-child absolute top-full right-full duration-500 bottom-0 left-0 bg-slate-950/25">
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <Link to='/shop' className='btn btn-outline btn-xs btn-success mt-4'>Shop Now</Link>
                        </div>
                    </div>
                </div>               

            </div>
        </div>
    );
};

export default Gallery;