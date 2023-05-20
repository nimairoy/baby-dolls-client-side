import React, { useEffect, useState } from 'react';
import DollCard from './DollCard/DollCard';

const AllBabyDoll = () => {

    const [allDolls, setAllDolls] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/dolls')
        .then(res => res.json())
        .then(data => setAllDolls(data))
    }, [])

    return (
        <div className='max-w-screen-xl mx-auto'>
            <h2 className="text-4xl my-8 text-center font-bold">Available Dolls</h2>
            <div className='text-center my-8'>
                <form >
                    <input type="text" placeholder="Type here" className="input rounded-r-none input-bordered input-info w-full max-w-xs" />
                    <button className='btn rounded-l-none btn-secondary'>Search</button>
                </form>
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