import React from 'react';
import useServices from '../Hooks/UseServices';

import Service from './Service/Service';

const Services = () => {
    const [services] = useServices()

    return (
        <div className='min-h-[850px] grid grid-cols-1 lg:grid-cols-3 gap-10 w-5/6 mx-auto mb-16'>
            {
                services.map(service => <Service
                    kye={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;