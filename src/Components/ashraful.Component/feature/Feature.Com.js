import React from "react";
import featureData from "../../../Services/featureData.json";
import ElasticSlider from "./ElasticSlider";
const Feature = () => {
  return (
    <div className="h-[60rem]">
      <div className="container mx-auto py-20">
        <div className="mb-5">
          <h5 className="text-lg">Featured</h5>
          <h2 className="text-3xl py-5">
            <span className="font-bold">Featured </span>Destination
          </h2>
        </div>
        <div>
          <ElasticSlider featureData={featureData} />
        </div>
      </div>
    </div>
  );
};

export default Feature;
