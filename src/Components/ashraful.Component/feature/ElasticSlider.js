import React from "react";
import Carousel from "react-elastic-carousel";
import "../../../../src/App.css";
const ElasticSlider = ({ featureData }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <div className="elastic_style">
      <Carousel
        enableAutoPlay
        autoPlaySpeed={2500}
        loop={Infinity}
        breakPoints={breakPoints}
      >
        {featureData.length &&
          featureData.map((data, index) => (
            <div
              key={index}
              className="min-w-xs m-3 h-[30rem] bg-white shadow-lg dark:bg-gray-800"
            >
              <a href="/#">
                <img className="h-80 w-80" src={data.img} alt="" />
              </a>
              <div className="p-5">
                <a href="/#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {data.list} listing
                </p>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default ElasticSlider;
