import React from 'react';

const SingleCard = ({ hotel }) => {
    const { img, name, rating, price, description, location } = hotel;

    return (
        <div className='border-2 rounded'>
            <img className='h-36' src={img} alt="" />
            <div className='p-1'>
                <div className='flex justify-between'>
                    <h1 className='font-bold text-start'>{name}</h1>
                    <p className='pr-1 text-blue-400'>${price}</p>
                </div>
                <div className='flex justify-between align-middle mt-2'>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className='text-xs'>{rating} star</p>
                </div>
                <div>
                    <p className='text-start my-2 text-slate-500'>{description}</p>
                </div>
                <div className='divider mb-1'></div>
                <div className='flex justify-between align-middle pb-1'>
                    <p className='text-sm'>{location}</p>
                    <button className='bg-green-300 text-white text-sm hover:cursor-pointer px-1 rounded'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;