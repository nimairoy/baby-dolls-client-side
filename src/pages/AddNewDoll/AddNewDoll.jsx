import React from 'react';

const AddNewDoll = () => {

    const handleAddDoll = event => {
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

        const dollInfo = {
            doll_name: name,
            seller_email: email,
            photo,
            seller_name,
            price,
            quantity,
            description,
            ratings,
            category
        }
        console.log(dollInfo)

        fetch('http://localhost:5000/dolls', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dollInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert('Data insert successfully')
            form.reset();
        })
    }

    return (
        <div className='my-container py-20'>
            <form onSubmit={handleAddDoll}>
                <fieldset className='border-2 border-primary p-4 rounded'>
                    <legend className='text-4xl font-semibold pr-2'>Add a New Doll: </legend>
                    <div className="md:grid md:grid-cols-2 py-4 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Dolls Name</span>
                            </label>
                            <input type="text" placeholder="Dolls Name" name='name' className="input border-primary input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='photo' required type="text" placeholder="Photo URL" className="input border-primary input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" required placeholder="Seller Name" name='seller_name' className="input border-primary input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input name='email' required type="email" placeholder="Seller Email" className="input border-primary input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub Category</span>
                            </label>
                            <input type="text" placeholder="Sub Category" name='category' className="input border-primary input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input name='price' type="text" placeholder="Price" className="input border-primary input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <input type="text" placeholder="Ratings" name='ratings' className="input border-primary input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input name='quantity' type="text" placeholder="Quantity" className="input border-primary input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input name='description' type="text" placeholder="Description" className="input border-primary input-bordered" />
                        </div>
                        <div className="form-control">                           
                            <input type="submit" value="Add New Doll" className="btn btn-secondary mt-10" />
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default AddNewDoll;