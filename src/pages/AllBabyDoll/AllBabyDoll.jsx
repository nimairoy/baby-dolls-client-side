import React, { useEffect, useState } from 'react';
import DollCard from './DollCard/DollCard';
import useSetTitle from '../../hooks/useSetTitle';

const AllBabyDoll = () => {
    // page title
    useSetTitle('All Dolls')

    const [allDolls, setAllDolls] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/dolls')
            .then(res => res.json())
            .then(data => setAllDolls(data))
    }, [])


    const handleSearch = () => {
        fetch(`http://localhost:5000/jobSearchByName/${searchText}`)
        .then(res => res.json())
        .then(data => setAllDolls(data))
    }

    return (
        <div className='max-w-screen-xl mx-auto'>
            <h2 className="text-4xl my-8 text-center font-bold">Available Dolls</h2>
            <div className='text-center my-8'>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Type here" className="input rounded-r-none input-bordered input-info w-full max-w-xs" />
                <button onClick={handleSearch} className='btn rounded-l-none btn-secondary'>Search</button>
            </div>
            <div>
                {
                    allDolls.map(doll => <DollCard
                        key={doll._id}
                        doll={doll}
                    ></DollCard>)
                }
            </div>
        </div>
    );
};

export default AllBabyDoll;