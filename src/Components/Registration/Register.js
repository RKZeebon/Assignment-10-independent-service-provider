import React from 'react';
import Glogo from '../../Assets/g-logo.jpg'
import Flogo from '../../Assets/f-logo.jpg'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='min-h-[850px]'>
            <div className='w-3/4 mx-auto'>
                <h1 className='text-center text-4xl mt-4 font-bold'>Please Sign Up</h1>
                <div className='flex justify-center'>
                    <form action="" className='w-full lg:w-1/4 block'>
                        <input className='border-black my-4 border-2 block p-3 rounded-lg text-2xl w-full' type="text" name="name" placeholder='Your name' />
                        <input className='border-black my-4 border-2 block p-3 rounded-lg text-2xl w-full' type="email" name="email" placeholder='Your email' />
                        <input className='border-black my-4 border-2 block p-3 rounded-lg text-2xl w-full' type="password" name="password" placeholder="Password" />
                        <input className='border-black my-4 border-2 block p-3 rounded-lg text-2xl w-full' type="password" name="password" placeholder="Confirm Password" />
                        <input className='my-4 block p-3 rounded-lg w-full bg-orange-400 text-2xl font-Anek font-semibold cursor-pointer' type="submit" value="Sign Up" />
                    </form>

                </div>
                <h3 className='text-center text-xl'>Already have an account? <Link className='underline text-purple-600 font-bold hover:text-black' to='/login'>Login</Link></h3>
                <div className='flex justify-center items-baseline'>
                    <div className='bg-gray-500 h-1 w-56'></div>
                    <p className='mt-2 px-2'>Or</p>
                    <div className='bg-gray-500 h-1 w-56'></div>
                </div>
                <div className='flex justify-center'>
                    <div className='w-full lg:w-1/4 block'>
                        <div className='flex items-center justify-center border-black my-4 border-2 p-3 rounded-lg text-2xl font-semibold w-full cursor-pointer'>
                            <img className='w-12 mr-2' src={Glogo} alt="" />
                            <p>Sign in with Google</p>
                        </div>
                        <div className='flex items-center justify-center border-black my-4 border-2 p-3 rounded-lg text-2xl font-semibold w-full cursor-pointer'>
                            <img className='w-12 mr-2' src={Flogo} alt="" />
                            <p>Sign in with Facebook</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;