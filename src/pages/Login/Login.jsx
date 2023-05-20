import React, { useContext } from 'react';
import { BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const { userLogin, signInWithGoogle } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            alert('user login successfully')
        })
        .catch(err => {
            console.log(err.message)
        })

    }


    // handle sign in with google
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(err => {
            console.log(err.message)
        })
    }


    return (
        <div className="min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <h1 className="text-3xl mb-6 font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-secondary">Login</button>
                            </div>
                        </form>
                    </div>
                    <div className='px-8'>
                        <p onClick={handleSignInWithGoogle} className='flex justify-center border py-2 rounded-xl text-center cursor-pointer border-amber-300'><BsGoogle className='text-warning text-2xl mr-4' />  <span>Sign in with Google</span></p>
                    </div>
                    <p className='text-center mt-4 pb-6'>If You are new Please <Link to='/signup' className='text-secondary font-bold underline'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;