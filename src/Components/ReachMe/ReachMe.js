import React from 'react';

const ReachMe = () => {
    return (
        <div className='w-5/6 mx-auto bg-slate-400 p-3 mb-16'>
            <input className='block my-2 pl-2' type="text" name='name' placeholder='Your Name' />
            <input className='block my-2 pl-2' type="email" name='email' placeholder='Your email' />
            <textarea className='block my-2 pl-2' name="messege" id="messege" cols="50" rows="10"></textarea>
        </div>
    );
};

export default ReachMe;