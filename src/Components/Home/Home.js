import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import useServices from '../Hooks/UseServices';





const Home = () => {
    const [services] = useServices()
    const navigate = useNavigate()
    return (
        <div>
            <Banner />
            <div className='my-16'>
                <h1 className='text-center text-4xl text-orange-600 font-bold underline font-Anek'>My Services</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-5/6 mx-auto gap-16 mt-8'>

                    {

                        services.slice(0, 3).map(service => <HomePageServices
                            key={service.id}
                            service={service}
                        ></HomePageServices>)
                    }
                </div>
                <div className='mt-8 text-center text-4xl text-orange-600'>
                    <button className='font-semibold font-Anek hover:underline' onClick={() => navigate('/services')}>See all Services➟</button >
                </div>
            </div>
            <Gallery />
        </div>
    );
};

const HomePageServices = ({ service }) => {
    const { title, price, text, img, id } = service
    const navigate = useNavigate()
    return (
        <div className='shadow-2xl shadow-orange-200 p-3 rounded-lg'>
            <div className='rounded-lg mx-auto relative min-h-[650px]'>
                <img className='mb-3 rounded-t-lg max-h-[450px] w-full' src={img} alt="" />
                <h1 className='text-4xl'>{title}</h1>
                <p>{text}</p>
                <h3 className='text-2xl'>${price}</h3>
                <div className='absolute left-0 right-0 bottom-0 mt-3 text-center bg-orange-400 rounded-b-lg py-2 hover:bg-orange-600 hover:text-white cursor-pointer' onClick={() => navigate(`/checkout/${id}`)}><button className='text-lg font-semibold'>Check Out</button></div>
            </div>
        </div>
    )
}


export default Home;