import React from 'react';
import Header from '../Header/Header';

const Bookings = () => {


    return (
        <div className="bg-gradient-to-l from-secondary to-accent text-left h-full w-full lg:pt-20">
            <Header/>
            <div className="w-full flex items-center justify-center my-12">
                <div className="bg-white shadow rounded py-12 lg:px-28 px-8">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Bookings</p>

                </div>
            </div>
        </div>
    );
};

export default Bookings;