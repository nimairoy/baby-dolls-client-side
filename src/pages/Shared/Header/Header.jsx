import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../Provider/AuthProvider';
import { Tooltip } from 'react-tooltip';
import { Toaster, toast } from 'react-hot-toast';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(result => {
                toast.success('logout successfully')
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    const navItems = <>
        <li><Link to='/' className='font-semibold'>Home</Link></li>
        <li><Link to='/dolls' className='font-semibold'>All Dolls</Link></li>
        <li><Link to='/blogs' className='font-semibold'>Blogs</Link></li>
        {
            user
                ?
                <>
                    <li><Link to='/mydolls' className='font-semibold'>My Dolls</Link></li>
                    <li><Link to='/addnewdoll' className='font-semibold'>Add a Doll</Link></li>
                    <li>
                        <span><img id="my-anchor-element-id" className='w-10 rounded-full' src={user.photoURL} alt="" /></span>
                        <Tooltip
                            // Don't forget the `#`!
                            anchorSelect="#my-anchor-element-id"
                            content={user.displayName}
                            place="left"
                        />
                    </li>
                    <li><span onClick={handleSignOut} className='font-semibold'>Log Out</span></li>
                </>
                :
                <>
                    <li><Link to='/login' className='font-semibold'>Login</Link></li>
                    <li><Link to='/signup' className='font-semibold'>Sign Up</Link></li>
                </>
        }
    </>

    return (
        <div className="bg-base-100 shadow-md">
            <Toaster></Toaster>
            <div className='navbar max-w-screen-xl mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' > <img className='w-44' src={logo} alt="" /> </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;