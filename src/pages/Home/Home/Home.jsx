import React from 'react';
import SlickSlider from '../SlickSlider/SlickSlider';
import Gallery from '../Gallery/Gallery';
import NewArrival from '../NewArrival/NewArrival';
import OffersBanner from '../OffersBanner/OffersBanner';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import useSetTitle from '../../../hooks/useSetTitle';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
// ..
AOS.init();

const Home = () => {

    useSetTitle('Home')

    return (
        <div className='max-w-screen-xl pb-24 mx-auto'>
            <SlickSlider></SlickSlider>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <OffersBanner></OffersBanner>
            <NewArrival></NewArrival>
        </div>
    );
};

export default Home;