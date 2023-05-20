import React from 'react';
import Slider from "react-slick";
import slide1 from '../../../assets/images/slide1.jpg';
import slide2 from '../../../assets/images/slide2.jpg';
import slide3 from '../../../assets/images/slide3.jpg';
import slide4 from '../../../assets/images/slide4.jpg';
import slide5 from '../../../assets/images/slide5.jpg';
import slide6 from '../../../assets/images/slide6.jpg';
import { Link } from 'react-router-dom';

const SlickSlider = () => {

    const settings = {
        dots: true,
        autoplay: true,
        fade: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        speed: 1000
    };

    return (
        <div>
            <Slider {...settings}>
                <div className='relative'>
                    <img src={slide1} alt="" />
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-pink-400">
                        <div className='absolute w-3/4 mx-auto py-10 rounded-lg bg-slate-100/25 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <h3 className="text-4xl uppercase text-primary font-bold">60% OFF Delivery Fee</h3>
                            <h4 className='text-4xl text-secondary mt-3 font-semibold'>With Voucher</h4>
                            <Link to='/shop' className='btn btn-outline btn-primary mt-4'>Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={slide2} alt="" />
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-info">
                        <div className='absolute z-20 w-3/4 mx-auto py-10 rounded-lg bg-slate-100/25 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <h3 className="text-4xl uppercase text-[#00ff9d] font-bold">60% OFF Delivery Fee</h3>
                            <h4 className='text-4xl text-[#e5ff00] mt-3 font-semibold'>With Voucher</h4>
                            <Link to='/shop' className='btn btn-outline btn-primary mt-4'>Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={slide3} alt="" />
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-success">
                        <div className='absolute z-20 w-3/4 mx-auto py-10 rounded-lg bg-slate-100/25 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <h3 className="text-4xl uppercase text-primary font-bold">60% OFF Delivery Fee</h3>
                            <h4 className='text-4xl text-secondary mt-3 font-semibold'>With Voucher</h4>
                            <Link to='/shop' className='btn btn-outline btn-primary mt-4'>Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={slide4} alt="" />
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-neutral">
                        <div className='absolute z-20 w-3/4 mx-auto py-10 rounded-lg bg-slate-100/25 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <h3 className="text-4xl uppercase text-white font-bold">60% OFF Delivery Fee</h3>
                            <h4 className='text-4xl text-white mt-3 font-semibold'>With Voucher</h4>
                            <Link to='/shop' className='btn btn-outline btn-success mt-4'>Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={slide5} alt="" />
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-accent">
                        <div className='absolute z-20 w-3/4 mx-auto py-10 rounded-lg bg-slate-100/25 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <h3 className="text-4xl uppercase text-primary font-bold">60% OFF Delivery Fee</h3>
                            <h4 className='text-4xl text-secondary mt-3 font-semibold'>With Voucher</h4>
                            <Link to='/shop' className='btn btn-outline btn-primary mt-4'>Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={slide6} alt="" />
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-black">
                        <div className='absolute z-20 w-3/4 mx-auto py-10 rounded-lg bg-slate-100/25 text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <h3 className="text-4xl uppercase text-[#00ff9d] font-bold">60% OFF Delivery Fee</h3>
                            <h4 className='text-4xl text-[#e5ff00] mt-3 font-semibold'>With Voucher</h4>
                            <Link to='/shop' className='btn btn-outline btn-warning mt-4'>Shop Now</Link>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default SlickSlider;