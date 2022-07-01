import React from 'react';
import CountUp from 'react-countup';

const CounterDetails = ({data}) => {
    const {icon, count, title} = data;
    return (
        <div>
            <img src={icon} alt="icon" className="object-cover py-3 w-24 mx-auto" />
            <h3 className="text-6xl font-bold py-3"><CountUp end={count} /></h3>
            <h3 className="text-3xl font-bold text-gray-500">{title}</h3>
        </div>
    );
};

export default CounterDetails;