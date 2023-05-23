import React from 'react';
import img1 from '../../../assets/offerBanner/offerBanner1.jpg';
import img2 from '../../../assets/offerBanner/offerBanner2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const OffersBanner = () => {
    return (
        <div className='py-16 my-container px-4'>
            <div className='grid md:grid-cols-2 gap-4 '>
                <div data-aos="fade-right" data-aos-duration="3000" >
                    <img className='w-full rounded-md' src={img1} alt="" />
                    <div className='text-center mt-8'>
                        <h3 data-aos="fade-up" data-aos-duration="3000" className="text-2xl font-bold">Up to 20% Off</h3>
                        <p data-aos="fade-up" data-aos-duration="3000" className='my-4'>Selected Gabby's Dollhouse Toys</p>
                        <button data-aos="fade-up" data-aos-duration="3000" className='btn btn-outline btn-secondary rounded-2xl'>Buy Now</button>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="3000" >
                    <img className='w-full rounded-md' src={img2} alt="" />
                    <div className='text-center mt-8'>
                        <h3 data-aos="fade-up" data-aos-duration="3000" className="text-2xl font-bold">Up to 20% Off</h3>
                        <p data-aos="fade-up" data-aos-duration="3000" className='my-4'>on selected Peppa Pig toys</p>
                        <button data-aos="fade-up" data-aos-duration="3000" className='btn btn-outline btn-secondary rounded-2xl'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OffersBanner;