import React from 'react';
import useServices from '../Hooks/UseServices';

const Services = () => {
    const { services } = useServices({})
    // console.log(services);
    return (
        <div className='my-16'>
            <h1>This is services</h1>
        </div>
    );
};

export default Services;