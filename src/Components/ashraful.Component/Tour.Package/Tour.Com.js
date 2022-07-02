import React from "react";
import tourData from "../../../Services/tourData.json";
import TourSlider from "../CommonSlider/TourSlider";
const Tour = () => {
  return (
    <div className="bg-[#F8FAFF] h-[60rem]">
      <div className="py-20">
        <div className="container mx-auto mb-5">
          <h5 className="text-lg">Special Offers</h5>
          <h2 className="text-3xl py-5">
            <span className="font-bold">Top</span> Tour Packages
          </h2>
        </div>
        <div className="px-8">
          <TourSlider Data={tourData} />
        </div>
      </div>
    </div>
  );
};

export default Tour;
