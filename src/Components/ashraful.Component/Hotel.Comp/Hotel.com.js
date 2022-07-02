import React from "react";
import tourData from "../../../Services/tourData.json";
import HotelSlider from "../CommonSlider/HotelSlider";
const Hotel = () => {
  return (
    <div className="h-[60rem]">
      <div className="py-20">
        <div className="container mx-auto mb-5">
          <h5 className="text-lg">Special Offers</h5>
          <h2 className="text-3xl py-5">
            <span className="font-bold">Popular</span> Hotels & Rooms
          </h2>
        </div>
        <div className="px-8">
          <HotelSlider Data={tourData} />
        </div>
      </div>
    </div>
  );
};

export default Hotel;
