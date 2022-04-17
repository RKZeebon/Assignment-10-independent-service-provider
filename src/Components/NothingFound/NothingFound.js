import React from 'react';
import Nothing from '../../Assets/404.jpg'

const NothingFound = () => {
    return (
        <div className='min-h-[850px] flex justify-center'>
            <img className='h-[850px] block' src={Nothing} alt="" />
        </div>
    );
};

export default NothingFound;