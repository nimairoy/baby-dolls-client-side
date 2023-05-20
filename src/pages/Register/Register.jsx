import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        const name = form.name.value;
        const photo = form.photo.value;
        console.log(email, password, name, photo)

        createUser(email, password)
        .then(result => {
            const user = result.user;
            updateProfile(user, {
                displayName: name,
                photoURL: photo
            });
            console.log(user)
            alert('user created successfully')
        })
        .catch(error => {
            console.log(error.message)
        })

    }
    
    return (
        <div className="min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <h1 className="text-3xl mb-6 font-bold">Please Sign Up !</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-primary input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-primary input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered input-primary w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo url" className="input input-primary input-bordered" />
                               
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-secondary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <p className='text-center mt-4 pb-6'>Already a Member ? Please <Link to='/login' className='text-secondary font-bold underline'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;