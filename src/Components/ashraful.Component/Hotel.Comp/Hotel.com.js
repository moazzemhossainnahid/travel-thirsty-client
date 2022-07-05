import React from "react";
import { Fade } from "react-reveal";
import tourData from "../../../Services/tourData.json";
import HotelSlider from "../AllCarouselSlider/HotelSlider";
const Hotel = () => {
  return (
    <div className="py-16">
      <Fade right>
        <div className="container px-8 mx-auto mb-5">
          <h5 className="text-lg">Special Offers</h5>
          <h2 className="text-3xl py-5">
            <span className="font-bold">Popular</span> Hotels & Rooms
          </h2>
        </div>
      </Fade>
      <Fade left>
        <div className="px-8">
          <HotelSlider Data={tourData} />
        </div>
      </Fade>
    </div>
  );
};

export default Hotel;
