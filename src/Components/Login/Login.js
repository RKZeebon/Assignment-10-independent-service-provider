import React, { useRef } from 'react';
import Glogo from '../../Assets/g-logo.jpg'
import Flogo from '../../Assets/f-logo.jpg'
import { Link } from 'react-router-dom';
const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);
    }
    return (
        <div className='min-h-[850px]'>
            <div className='w-3/4 mx-auto'>
                <h1 className='text-center text-4xl mt-4 font-bold'>Please Login</h1>
                <div className='flex justify-center'>
                    <form onSubmit={handleLogin} action="" className='w-full lg:w-1/4 block'>
                        <input className='border-black my-4 border-2 block p-3 rounded-lg text-2xl w-full' ref={emailRef} type="email" name="email" placeholder='Your email' required />
                        <input className='border-black my-4 border-2 block p-3 rounded-lg text-2xl w-full' ref={passwordRef} type="password" name="password" placeholder="Password" required />
                        <input className='my-4 block p-3 rounded-lg w-full bg-orange-400 text-2xl font-Anek font-semibold cursor-pointer' type="submit" value="Log in" />
                    </form>

                </div>
                <h3 className='text-center text-xl'>New here? <Link className='underline text-purple-600 font-bold hover:text-black' to='/register'>Sign up</Link></h3>
                <div className='flex justify-center items-baseline my-8'>
                    <div className='bg-gray-500 h-1 w-56 lg:w-[180px]'></div>
                    <p className='mt-2 px-2'>Or</p>
                    <div className='bg-gray-500 h-1 w-56 lg:w-[180px]'></div>
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

export default Login;