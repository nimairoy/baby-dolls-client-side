import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useSetTitle from '../../hooks/useSetTitle';

const Update = () => {

    const doll = useLoaderData();

    const { _id, doll_name, description, photo, price, ratings, quantity, category } = doll;

    useSetTitle( `Update-${doll_name}`)

    const { user } = useContext(AuthContext);

    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const seller_name = form.seller_name.value;
        const email = form.email.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const ratings = form.ratings.value;
        const category = form.category.value;

        const updateDoll = {
            doll_name: name,
            email,
            photo,
            seller_name,
            price,
            quantity,
            description,
            ratings,
            category
        }

        fetch(`https://baby-dolls-server.vercel.app/dolls/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateDoll)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                form.reset();
            })
    }

    return (
        <div className='my-container py-20'>
            <form onSubmit={handleUpdate}>
                <fieldset className='border-2 border-primary p-4 rounded'>
                    <legend className='text-4xl font-semibold pr-2'>Update Doll: </legend>
                    <div className="md:grid md:grid-cols-2 py-4 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Dolls Name</span>
                            </label>
                            <input type="text" defaultValue={doll_name} placeholder="Dolls Name" name='name' className="input border-primary input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='photo' defaultValue={photo} required type="text" placeholder="Photo URL" className="input border-primary input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input defaultValue={user?.displayName} type="text" required placeholder="Seller Name" name='seller_name' className="input border-primary input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input defaultValue={user?.email} name='email' required type="email" placeholder="Seller Email" className="input border-primary input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub Category</span>
                            </label>
                            <input type="text" defaultValue={category} placeholder="Sub Category" name='category' className="input border-primary input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input name='price' defaultValue={price} type="text" placeholder="Price" className="input border-primary input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input type="text" defaultValue={ratings} placeholder="Ratings" name='ratings' className="input border-primary input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input defaultValue={quantity} name='quantity' type="text" placeholder="Quantity" className="input border-primary input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input defaultValue={description} name='description' type="text" placeholder="Description" className="input border-primary input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="submit" value="Update" className="btn btn-secondary mt-10" />
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Update;