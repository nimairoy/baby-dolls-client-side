import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const ShopByCategory = () => {
    const [categories, setCategories] = useState([]);
    const [activeTab, setActiveTab] = useState('cute-dolls');

    useEffect(() => {
        fetch(`http://localhost:5000/categories?category=${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, [activeTab])

    const handleTabClick = tabName => {
        setActiveTab(tabName);
    }

    return (
        <div className='my-container px-4 py-12'>
            <div className='text-center'>
                <h2 data-aos="fade-up" data-aos-duration="3000"className="text-4xl font-semibold">Shop By Category</h2>
            </div>
            <div className="tabs bg-white tabs-boxed mt-10">
                <a onClick={() => handleTabClick('cute-dolls')} className={`tab border-secondary border cute-dolls ${activeTab === 'cute-dolls' ? 'tab-active' : ''}`}>
                    Cute Dolls
                </a>
                <a onClick={() => handleTabClick('playing-dolls')} className={`tab border-secondary border playing-dolls ${activeTab === 'playing-dolls' ? 'tab-active' : ''}`}>
                    Playing Dolls
                </a>
                <a onClick={() => handleTabClick('collectible-dolls')} className={`tab border-secondary border collectible-dolls ${activeTab === 'collectible-dolls' ? 'tab-active' : ''}`}>
                    Collectible Dolls
                </a>
            </div>
            <div className='grid md:grid-cols-4 md:gap-4 mt-10'>
                {
                    categories.map(doll => <CategoryCard

                        key={doll._id}
                        doll={doll}

                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default ShopByCategory;