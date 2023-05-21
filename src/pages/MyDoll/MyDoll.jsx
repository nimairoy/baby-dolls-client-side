import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyDollCard from './MyDollCard';
import Swal from 'sweetalert2';

const MyDoll = () => {
    const { user } = useContext(AuthContext);
    const [dolls, setDolls] = useState([]);

    const url = `http://localhost:5000/dolls?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setDolls(data))
    }, [])


    // handle delete api 

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/dolls/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Successfully Deleted',
                                'success'
                            )
                            const remaining = dolls.filter(dol => dol._id !== _id);
                            setDolls(remaining);
                        }
                    })
            }
        })
    }


    return (
        <div className='my-container py-12'>
            {
                dolls.map(doll => <MyDollCard
                    key={doll._id}
                    doll={doll}
                    handleDelete={handleDelete}
                ></MyDollCard>)
            }
        </div>
    );
};

export default MyDoll;