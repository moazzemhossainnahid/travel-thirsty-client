import React from "react";
import tourData from "../../../Services/tourData.json";
import HotelSlider from "../AllCarouselSlider/HotelSlider";
const Hotel = () => {
  return (
    <div className="py-48">
      <div className="container px-8 mx-auto mb-5">
        <h5 className="text-lg">Special Offers</h5>
        <h2 className="text-3xl py-5">
          <span className="font-bold">Popular</span> Hotels & Rooms
        </h2>
      </div>
      <div className="px-8">
        <HotelSlider Data={tourData} />
      </div>
    </div>
  );
};

export default Hotel;
