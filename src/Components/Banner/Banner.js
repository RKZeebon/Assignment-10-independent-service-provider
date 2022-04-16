import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-bg'>
            <div className='px-10 py-10'>
                <div className='text-center leading-8'>
                    <h1 className='text-4xl uppercase font-Anek font-bold'>Capture your <span className='text-orange-600'>moment</span>!</h1>
                    <p className='text-2xl'>I am here to capture your spacial moment to give you a nostalogic feel in your future.</p>
                </div>
            </div>
        </div >
    );
};

export default Banner;