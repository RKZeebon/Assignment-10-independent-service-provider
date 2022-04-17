import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, price, text, img } = service;
    const navigate = useNavigate;
    return (
        <div className='shadow-2xl shadow-orange-200 p-3 rounded-lg'>
            <div className='rounded-lg mx-auto'>
                <img className='mb-3 rounded-t-lg' src={img} alt="" />
                <h1 className='text-4xl'>{title}</h1>
                <p>{text}</p>
                <h3 className='text-2xl'>${price}</h3>
                <div className='mt-3 text-center bg-orange-400 rounded-b-lg py-2 hover:bg-orange-600 hover:text-white cursor-pointer' onClick={() => navigate('/checkout')}><button className='text-lg font-semibold'>Check Out</button></div>
            </div>
        </div>
    );
};

export default Service;