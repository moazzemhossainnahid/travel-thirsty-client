<<<<<<< HEAD
import React from 'react';
import Wobble from 'react-reveal/Wobble';

const WhyUsCard = ({data}) => {
    const {icon, image, title, description} = data;
    return (
        <Wobble>
        <div className="p-5 w-full mx-auto">
            <div class="card bg-transparent group hover:duration-300">
        <figure class="flex-col">
            <img src={icon} alt="Icon" className="w-20 bg-slate-200 group-hover:bg-rose-200 p-5 relative top-8 rounded-full" />
            <img src={image} alt="Banner" className="object-cover rounded-t-2xl" />
        </figure>
        <div className="card-body bg-base-200 items-center text-center relative">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
        </div>
        </div>
        </Wobble>
    );
=======
import React from "react";
import Wobble from "react-reveal/Wobble";

const WhyUsCard = ({ data }) => {
  const { icon, image, title, description } = data;
  return (
    <Wobble>
      <div className="p-5 w-full mx-auto">
        <div class="card bg-transparent group hover:duration-300">
          <figure class="flex-col">
            <img
              src={icon}
              alt="Icon"
              className="w-20 bg-slate-200 group-hover:bg-rose-200 p-5 relative top-8 rounded-full"
            />
            <img
              src={image}
              alt="Banner"
              className="object-cover rounded-t-2xl"
            />
          </figure>
          <div className="card-body bg-base-200 items-center text-center relative">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Wobble>
  );
>>>>>>> 767d61e0da2274ea8751a8b49acb98c0b7ca84b5
};

export default WhyUsCard;
