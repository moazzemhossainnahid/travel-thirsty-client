import React from 'react';

const WhyUsCard = ({data}) => {
    const {icon, image, title, description} = data;
    return (
        <div className="p-5 w-full mx-auto">
            <div class="card bg-transparent group hover:duration-300">
        <figure class="flex-col">
            <img src={icon} alt="Icon" className="w-20 bg-slate-200 group-hover:bg-rose-200 p-5 relative top-8 rounded-full" />
            <img src={image} alt="Banner" className="object-cover rounded-t-2xl" />
        </figure>
        <div class="card-body bg-base-200 items-center text-center relative">
            <h2 class="card-title">{title}</h2>
            <p>{description}</p>
        </div>
        </div>
        </div>
    );
};

export default WhyUsCard;