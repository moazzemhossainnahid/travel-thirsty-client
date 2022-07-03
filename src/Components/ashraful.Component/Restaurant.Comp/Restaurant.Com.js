import React from "react";
import data from "../../../Services/tourData.json";
import RestSlider from "../AllCarouselSlider/RestSlider";
const Restaurant = () => {
  return (
    <div className="container mx-auto py-48">
      <div className="mb-5 px-8">
        <h5 className="text-lg">Special Offers</h5>
        <h2 className="text-3xl py-5">
          <span className="font-bold">Popular</span> Hotels & Rooms
        </h2>
      </div>
      <div className="px-8">
        <RestSlider Data={data} />
      </div>
    </div>
  );
};

export default Restaurant;
