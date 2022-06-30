import React from 'react';
import useHotel from '../../hooks/useHotel';
import SingleCard from './SingleCard';

const Card = () => {
    const [hotels] = useHotel();

    return (
        <div>
            <p>Special Offers</p>
            <h1><b>Popular</b> Hotels & Rooms</h1>
            {
                hotels.map(hotel => <SingleCard
                    key={hotel._id}
                    hotel={hotel}
                />)
            }
        </div>
    );
};

export default Card;