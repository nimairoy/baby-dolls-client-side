import React from 'react';
import img1 from '../../../assets/new-arrival/20394_its_all_me_candy_coding__laydown.jpg';
import img2 from '../../../assets/new-arrival/20749_american_cutie_main.jpg';
import img3 from '../../../assets/new-arrival/20750_bunny_hop_main.jpg';
import img4 from '../../../assets/new-arrival/20796_baby_lexi_medium_laydown.jpg';
import img5 from '../../../assets/new-arrival/20797_baby_lexi_dark_laydown.jpg';
import img6 from '../../../assets/new-arrival/20800_hugs_and_giggles_med_main.jpg';
import img7 from '../../../assets/new-arrival/20801_hugs_and_giggles_dark_main.jpg';
import img8 from '../../../assets/new-arrival/alice_dollft_1100.jpg';
import img9 from '../../../assets/new-arrival/fairygodmother_dollft_1100.jpg';
import img10 from '../../../assets/new-arrival/piratelass_dollft_1100.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const NewArrival = () => {
    return (
        <div className="bg-slate-50">
            <div className='my-container px-4 py-12'>
                <h2 data-aos="fade-up" data-aos-duration="3000" className="text-4xl mb-16 font-bold text-center">New Arrivals</h2>
                <div className='grid md:grid-cols-5 gap-2'>
                    <div data-aos="fade-up" data-aos-duration="3000" className='border rounded-sm bg-white hover:shadow-lg p-4'>
                        <img className='w-full' src={img1} alt="" />
                        <h3 className="text-xl my-2">Hugs And Giggles Dark Skin</h3>
                        <p className='text-lg font-bold'>$44.95</p>
                        <button className='btn btn-secondary btn-sm mt-4'>Buy Now</button>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className='border rounded-sm bg-white hover:shadow-lg p-4'>
                        <img className='w-full' src={img2} alt="" />
                        <h3 className="text-xl my-2">A Birthday Wish Blue Eyes Blonde</h3>
                        <p className='text-lg font-bold'>$44.95</p>
                        <button className='btn btn-secondary btn-sm mt-4'>Buy Now</button>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className='border rounded-sm bg-white hover:shadow-lg p-4'>
                        <img className='w-full' src={img3} alt="" />
                        <h3 className="text-xl my-2">Bunny Hop</h3>
                        <p className='text-lg font-bold'>$144.95</p>
                        <button className='btn btn-secondary btn-sm mt-4'>Buy Now</button>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className='border rounded-sm bg-white hover:shadow-lg p-4'>
                        <img className='w-full' src={img4} alt="" />
                        <h3 className="text-xl my-2">Baby Lexi Doll Medium Skin</h3>
                        <p className='text-lg font-bold'>$31.95</p>
                        <button className='btn btn-secondary btn-sm mt-4'>Buy Now</button>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className='border rounded-sm bg-white hover:shadow-lg p-4'>
                        <img className='w-full' src={img5} alt="" />
                        <h3 className="text-xl my-2">Hugs And Giggles Dark Skin</h3>
                        <p className='text-lg font-bold'>$44.95</p>
                        <button className='btn btn-secondary btn-sm mt-4'>Buy Now</button>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className='border rounded-sm bg-white hover:shadow-lg p-4'>
                        <img className='w-full' src={img6} alt="" />
                        <h3 className="text-xl my-2">Swan Lake White</h3>
                        <p className='text-lg font-bold'>$23.95</p>
                        <button className='btn btn-secondary btn-sm mt-4'>Buy Now</button>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className='border rounded-sm bg-white hover:shadow-lg p-4'>
                        <img className='w-full' src={img7} alt="" />
                        <h3 className="text-xl my-2">Hugs And Giggles Dark Skin</h3>
                        <p className='text-lg font-bold'>$44.95</p>
                        <button className='btn btn-secondary btn-sm mt-4'>Buy Now</button>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className='border rounded-sm bg-white hover:shadow-lg p-4'>
                        <img className='w-full' src={img8} alt="" />
                        <h3 className="text-xl  my-">Alice</h3>
                        <p className='text-lg font-bold'>$87.88</p>
                        <button className='btn btn-secondary btn-sm mt-4'>Buy Now</button>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className='border rounded-sm bg-white hover:shadow-lg p-4'>
                        <img className='w-full' src={img9} alt="" />
                        <h3 className="text-xl my-2">All American Cutie</h3>
                        <p className='text-lg font-bold'>$414.95</p>
                        <button className='btn btn-secondary btn-sm mt-4'>Buy Now</button>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className='border rounded-sm bg-white hover:shadow-lg p-4'>
                        <img className='w-full' src={img10} alt="" />
                        <h3 className="text-xl my-2">Sugar Plum Fairy Dark Skin Tone</h3>
                        <p className='text-lg font-bold'>$44.95</p>
                        <button className='btn btn-secondary btn-sm mt-4'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrival;