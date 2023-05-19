import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DollCard from './DollCard/DollCard';

const AllBabyDoll = () => {

    const allDolls = useLoaderData();
    console.log(allDolls)

    return (
        <div className='max-w-screen-xl mx-auto'>
            <h2 className="text-4xl my-6 font-bold">Available Baby Doll: {allDolls.length}</h2>
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