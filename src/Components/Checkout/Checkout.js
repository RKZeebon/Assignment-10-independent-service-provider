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
        <div className='min-h-[850px]'>
            <div className='w-3/4 mx-auto'>

                <div className='flex justify-center'>

                    <form onSubmit={handleCheckOut} action="" className='w-full lg:w-1/4 block'>

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