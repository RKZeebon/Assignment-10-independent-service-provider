import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-bg relative'>
            <div className='px-10 py-10 absolute right-0 left-0 bottom-20 text-white'>
                <div className='text-center leading-8'>
                    <h1 className='text-4xl uppercase font-Anek'>Keep your <span className='text-orange-400'>memory</span> safe!</h1>
                    <p className='text-xl'>I am here to capture your spacial moment to give you a nostalogic feel in your future.</p>
                </div>
            </div>
        </div >
    );
};

export default Banner;