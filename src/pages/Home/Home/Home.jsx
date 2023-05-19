import React from 'react';
import SlickSlider from '../SlickSlider/SlickSlider';
import Gallery from '../Gallery/Gallery';
import ReactTabs from '../ReactTabs/ReactTabs';

const Home = () => {
    return (
        <div className='max-w-screen-xl pb-24 mx-auto'>
            <SlickSlider></SlickSlider>
            <Gallery></Gallery>
            <ReactTabs></ReactTabs>
        </div>
    );
};

export default Home;