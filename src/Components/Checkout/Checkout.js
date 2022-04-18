import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../Hooks/UseServices';

const Checkout = () => {
    const [submit, setSubmit] = useState(false)
    const { serviceId } = useParams()
    const [services] = useServices()
    const selectedService = services.find(service => service.id == serviceId)
    const handleCheckOut = event => {
        event.preventDefault()
        setSubmit(true)
    }

    return (
        <div className='min-h-[850px] mt-12'>
            <div className='w-3/4 mx-auto lg:grid grid-cols-2'>
                <div className='shadow-2xl shadow-orange-200 p-3 rounded-lg lg:w-3/4 mx-auto'>
                    <div className='rounded-lg mx-auto min-h-[650px]'>
                        <img className='mb-3 rounded-t-lg max-h-[450px] mx-auto' src={selectedService?.img} alt="" />
                        <div className='lg:flex lg:justify-center'>
                            <div>
                                <h1 className='text-4xl'>{selectedService?.title}</h1>
                                <p>{selectedService?.text}</p>
                                <h3 className='text-2xl'>${selectedService?.price}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-16'>
                    <form onSubmit={handleCheckOut} action="" className='w-full lg:w-3/4'>
                        <h1 className='text-3xl font-Anek'>Please fill out the form to check out.</h1>
                        <input className='border-black my-4 border-2 block p-3 rounded-lg text-2xl w-full' type="text" name="name" placeholder='Your Name' required />

                        <input className='border-black my-4 border-2 block p-3 rounded-lg text-2xl w-full' type="email" name="email" placeholder="Your Email" required />

                        <input className='border-black my-4 border-2 block p-3 rounded-lg text-2xl w-full' type="text" name="address" placeholder="Your Address" required />

                        <input className='border-black my-4 border-2 block p-3 rounded-lg text-2xl w-full' type="text" name="phone" placeholder="Your Phone Number" required />

                        <div>
                            {
                                submit && <h1 className='text-2xl font-semibold text-center'>Thanks For the booking <br /><span className='font-bold text-orange-600'>{selectedService.title}</span>.</h1>
                            }
                        </div>

                        <input className='my-4 block p-3 rounded-lg w-full bg-orange-400 text-2xl font-Anek font-semibold cursor-pointer' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Checkout;