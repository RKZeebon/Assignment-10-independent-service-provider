import React, { useState } from 'react';

const Checkout = () => {
    const [submit, setSubmit] = useState(false)

    const handleCheckOut = event => {
        event.preventDefault()
        setSubmit(true)

    }

    return (
        <div className='min-h-[850px]'>
            <div className='w-3/4 mx-auto'>

                <div className='flex justify-center'>

                    <form onSubmit={handleCheckOut} action="" className='w-full lg:w-1/4 block'>
                        <div>
                            {
                                submit && <h1 className='text-2xl font-semibold'>Thanks For the booking.</h1>
                            }
                        </div>
                        <input className='border-black my-4 border-2 block p-3 rounded-lg text-2xl w-full' type="text" name="name" placeholder='Your Name' required />

                        <input className='border-black my-4 border-2 block p-3 rounded-lg text-2xl w-full' type="email" name="email" placeholder="Your Email" required />

                        <input className='border-black my-4 border-2 block p-3 rounded-lg text-2xl w-full' type="text" name="address" placeholder="Your Address" required />

                        <input className='border-black my-4 border-2 block p-3 rounded-lg text-2xl w-full' type="text" name="phone" placeholder="Your Phone Number" required />


                        <input className='my-4 block p-3 rounded-lg w-full bg-orange-400 text-2xl font-Anek font-semibold cursor-pointer' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Checkout;