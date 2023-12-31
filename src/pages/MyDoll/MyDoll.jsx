import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyDollCard from './MyDollCard';
import Swal from 'sweetalert2';
import useSetTitle from '../../hooks/useSetTitle';

const MyDoll = () => {
    useSetTitle('My Dolls')
    const { user } = useContext(AuthContext);
    const [dolls, setDolls] = useState([]);

    // const options = [
    //     {value: "Price-Ascending"}
    // ]

    // const [selected, setSelected] = useState(options[0]);

    const url = `https://baby-dolls-server.vercel.app/dolls?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setDolls(data))
    }, [])


    // useEffect(()=>{
    //     const [value, type] = selected.value.split('-').map(item => item.toLowerCase())
    //     fetch(`http://localhost:5000/mydolls?value=${value}&type=${type}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, [selected])

    // handle delete api 

    const handleDelete = _id => {
        // console.log(_id)
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

                fetch(`https://baby-dolls-server.vercel.app/dolls/${_id}`, {
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
        <div className='my-container p-4 py-12'>
            <div className='mb-8 flex justify-end'>
                <select className="select select-secondary w-full max-w-xs">
                    <option disabled selected>Sort By</option>
                    <option>Name</option>
                    <option>Price</option>
                </select>
            </div>
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