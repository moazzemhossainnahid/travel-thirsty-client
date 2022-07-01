import React from 'react';
import { Success } from '../../../Components/Data';
import CounterDetails from './CounterDetails';

const Counter = () => {
    return (
        <div className="">
            <h3 className="text-5xl font-semibold font-serif">Our Success Story</h3>
            <div className='py-20 bg-white px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
            {
                Success.map((data, index) => <CounterDetails data={data} key={index} />)
            }
        </div>
        </div>
    );
};

export default Counter;