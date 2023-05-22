import React from 'react';
import SlickSlider from '../SlickSlider/SlickSlider';
import Gallery from '../Gallery/Gallery';
import ReactTabs from '../ReactTabs/ReactTabs';
import NewArrival from '../NewArrival/NewArrival';
import OffersBanner from '../OffersBanner/OffersBanner';

const Home = () => {
    return (
        <div className='max-w-screen-xl pb-24 mx-auto'>
            <SlickSlider></SlickSlider>
            <Gallery></Gallery>
            <ReactTabs></ReactTabs>
            <OffersBanner></OffersBanner>
            <NewArrival></NewArrival>
        </div>
    );
};

export default Home;