import React from 'react';
import useHotel from '../../hooks/useHotel';
import SingleCard from './SingleCard';

const Card = () => {
    const [hotels] = useHotel();

    return (
        <div className='md:px-10 px-4'>
            <p className='text-start text-sm'>Special Offers</p>
            <h1 className='text-start text-3xl mt-4 mb-12'><b>Popular</b> Hotels & Rooms</h1>
            <div className='grid md:grid-cols-5 grid-cols-1 gap-6 mb-4'>
                {
                    hotels.map(hotel => <SingleCard
                        key={hotel._id}
                        hotel={hotel}
                    />)
                }
            </div>
        </div>
    );
};

export default Card;