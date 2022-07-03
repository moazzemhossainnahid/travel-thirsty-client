import React from "react";
import featureData from "../../../Services/featureData.json";
import ElasticSlider from "../AllCarouselSlider/ElasticSlider";

const Feature = () => {
  return (
    <div className="container px-8 mx-auto py-44">
      <div className="mb-10">
        <h5 className="text-lg">Featured</h5>
        <h2 className="text-3xl py-5 mb-7">
          <span className="font-bold">Featured </span>Destination
        </h2>
      </div>
      <div className="mt-10">
        <ElasticSlider featureData={featureData} />
      </div>
    </div>
  );
};

export default Feature;
