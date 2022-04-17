import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import photo1 from '../../Assets/Gallery/1.jpg'
import photo2 from '../../Assets/Gallery/2.jpg'
import photo3 from '../../Assets/Gallery/3.jpg'
import photo4 from '../../Assets/Gallery/4.jpg'
import photo5 from '../../Assets/Gallery/5.jpg'
import photo6 from '../../Assets/Gallery/6.jpg'
import photo7 from '../../Assets/Gallery/7.jpg'
import photo8 from '../../Assets/Gallery/8.jpg'

const Gallery = () => {
    return (
        <div className='w-5/6 lg:w-4/6 mx-auto'>
            <h2 className='text-center text-orange-600 mb-8 text-4xl font-bold font-Anek'>Some of my work</h2>
            <Carousel className='px-3' autoPlay interval="2500" transitionTime="1000">
                <div className='h-[700px]'>
                    <img src={photo1} alt='' />
                </div>
                <div className='h-[700px]'>
                    <img src={photo2} alt='' />
                </div>
                <div className='h-[700px]'>
                    <img src={photo3} alt='' />
                </div>
                <div className='h-[700px]'>
                    <img src={photo4} alt='' />
                </div>
                <div className='h-[700px]'>
                    <img src={photo5} alt='' />
                </div>
                <div className='h-[700px]'>
                    <img src={photo6} alt='' />
                </div>
                <div className='h-[700px]'>
                    <img src={photo7} alt='' />
                </div>
                <div className='h-[700px]'>
                    <img src={photo8} alt='' />
                </div>

            </Carousel>
        </div>
    );
};

export default Gallery;