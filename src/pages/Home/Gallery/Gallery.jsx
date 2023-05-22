import React, { useEffect, useState } from 'react';
import img from '../../../assets/images/screenshot-1.jpg'
import { Link } from 'react-router-dom';
import GalleryCard from './GalleryCard';

const Gallery = () => {

    const [galleries, setGalleries] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/galleries')
        .then(res => res.json())
        .then(data => setGalleries(data))
    }, [])

    return (
        <div className='py-12 mt-12 my-container'>
            <h2 className="text-4xl text-center mb-12 font-bold">See Our Products</h2>
            <div className="md:grid md:grid-cols-5">
                {
                    galleries.map(gallery => <GalleryCard
                        key={gallery._id}
                        gallery={gallery}
                    ></GalleryCard>)
                }
            </div>
        </div>
    );
};

export default Gallery;