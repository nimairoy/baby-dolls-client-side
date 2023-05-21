import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactTabDetails from './ReactTabDetails';

const ReactTabCard = ({ doll }) => {

    const { id, doll_name, photo, description } = doll;



    return (
        <div style={{boxShadow: '2px 4px 16px 0px rgba(0, 0, 0, 0.3)'}} className="card w-full bg-base-100 mt-4">
            <figure className="px-10 pt-10">
                <img src={photo} alt="image" className="rounded-md w-64" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{doll_name}</h2>
                <p className='my-2'>{description.slice(0, 80)}....</p>
                <div className="card-actions">
                    <Link className="btn btn-secondary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ReactTabCard;