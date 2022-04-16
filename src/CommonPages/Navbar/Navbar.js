import React from 'react';
import { Link } from 'react-router-dom';
import o from '../../Assets/o.png'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between bg-orange-400 px-20 h-20'>
            <Link to='/'><h1 className='flex items-center text-3xl font-semibold font-poppins'>RKZ PHOT<img className='w-6' src={o} alt="" />GRAPHY</h1>
            </Link>
            <div>
                <Link className='text-xl mx-2 font-medium px-5 py-2 rounded-lg  hover:bg-orange-200' to='/home'>Home</Link>
                <Link className='text-xl mx-2 font-medium px-5 py-2 rounded-lg  hover:bg-orange-200' to='/services'>Services</Link>
                <Link className='text-xl mx-2 font-medium px-5 py-2 rounded-lg  hover:bg-orange-200' to='/checkout'>Check Out</Link>
                <Link className='text-xl mx-2 font-medium px-5 py-2 rounded-lg  hover:bg-orange-200' to='/login'>Sign Out</Link>
                <Link className='text-xl mx-2 font-medium px-5 py-2 rounded-lg  hover:bg-orange-200' to='/login'>Login/Sign Up</Link>
            </div>
        </div>
    );
};

export default Navbar;