import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <div className='bg-gray-600 py-12'>
                <div className="max-w-screen-xl mx-auto md:flex justify-around">
                    <div className='text-center'>
                        <Link to='/'> <img className='w-28 mx-auto' src={logo} alt="" /> </Link>
                        <h3 className="text-xl font-semibold mt-3 text-white">Follow Us On</h3>
                        <div className="flex justify-center mt-4">
                            <Link target='_blank' to='https://www.facebook.com' className='text-xl mx-2 text-white'> <BsFacebook /> </Link>
                            <Link target='_blank' to='https://twitter.com' className='text-xl mx-2 text-white'> <BsTwitter /> </Link>
                            <Link target='_blank' to='https://instagram.com' className='text-xl mx-2 text-white'> <BsInstagram /> </Link>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h3 className="text-2xl font-semibold text-white">Contact</h3>
                        <div className='mt-4'>
                            <p className='text-white'>5 No Chandra Mohon Bosak St. Old Dhaka</p>
                            <p className='text-white'>Email: babydoll@info.com</p>
                            <p className='text-white'>Phone: +880123456789</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h3 className="text-2xl font-semibold text-white">About Us</h3>
                        <div className='mt-4'>
                            <p className='text-white'>All Products</p>
                            <p className='text-white'>New Comings</p>
                            <p className='text-white'>Varities</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h3 className="text-2xl font-semibold text-white">Our Blogs</h3>
                        <div className='mt-4'>
                            <p className='text-white'>Babies Dolls</p>
                            <p className='text-white'>Fasion Dolls</p>
                            <p className='text-white'>Dolls Houses</p>
                            <p className='text-white'>Curly Hairs Cute Dolls</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white text-center bg-gray-700 py-6">
                <p>&copy; Copyright All Right Reserved By Baby Dolls 2023</p>
            </div>
        </>
    );
};

export default Footer;