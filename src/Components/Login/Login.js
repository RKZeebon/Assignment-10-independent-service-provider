import React, { useRef } from 'react';
import Glogo from '../../Assets/g-logo.jpg'
import gitlogo from '../../Assets/GitHub.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    let errorMessage;
    let socialError;


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    if (error) {
        errorMessage = <div>
            <p className='text-red-600'>Error: {error.message}</p>
        </div>
        socialError = '';

    }

    if (gError) {
        socialError = <div>
            <p className='text-red-600 font-bold'>Error: {gError.message}</p>
        </div>
        errorMessage = '';
    }

    if (gitError) {
        socialError = <div>
            <p className='text-red-600 font-bold'>Error: {gitError.message}</p>
        </div>
        errorMessage = '';
    }


    if (loading || gLoading || gitLoading) {
        return (
            <Loading />
        );
    }

    if (user || gUser || gitUser) {
        navigate(from, { replace: true });
    }
    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
    }

    const resetPass = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email sent');
        }
        else {
            toast('Please enter your email');
        }
    }

    return (
        <div className='min-h-[850px]'>
            <div className='w-3/4 mx-auto'>
                <h1 className='text-center text-4xl mt-4 font-bold'>Please Login</h1>
                <div className='flex justify-center'>
                    <form onSubmit={handleLogin} action="" className='w-full lg:w-1/4 block'>
                        <input className='border-black my-4 border-2 block p-3 rounded-lg text-2xl w-full' ref={emailRef} type="email" name="email" placeholder='Your email' required />
                        <input className='border-black my-4 border-2 block p-3 rounded-lg text-2xl w-full' ref={passwordRef} type="password" name="password" placeholder="Password" required />
                        {errorMessage}
                        <input className='my-4 block p-3 rounded-lg w-full bg-orange-400 text-2xl font-Anek font-semibold cursor-pointer' type="submit" value="Log in" />
                    </form>

                </div>
                <h3 className='text-center text-xl'>New Here? <Link className='underline text-purple-600 font-bold hover:text-black' to='/register'>Sign up</Link></h3>

                <h3 className='text-center text-xl mt-4'>Forget Password? <button onClick={resetPass} className='underline text-purple-600 font-bold hover:text-black'>Reset Password</button></h3>
                <ToastContainer />
                <div className='flex justify-center items-baseline my-8'>
                    <div className='bg-gray-500 h-1 w-56 lg:w-[180px]'></div>
                    <p className='mt-2 px-2'>Or</p>
                    <div className='bg-gray-500 h-1 w-56 lg:w-[180px]'></div>
                </div>
                <div className='flex justify-center'>
                    <div className='w-full lg:w-1/4 block'>
                        {socialError}
                        <div onClick={() => signInWithGoogle()} className='flex items-center justify-center border-black my-4 border-2 p-3 rounded-lg text-2xl font-semibold w-full cursor-pointer'>
                            <img className='w-12 mr-2' src={Glogo} alt="" />
                            <p>Sign in with Google</p>
                        </div>
                        <div onClick={() => signInWithGithub()} className='flex items-center justify-center border-black my-4 border-2 p-3 rounded-lg text-2xl font-semibold w-full cursor-pointer'>
                            <img className='w-12 mr-2' src={gitlogo} alt="" />
                            <p>Sign in with Github</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;