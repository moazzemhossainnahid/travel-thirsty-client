import React from "react";
import Carousel from "react-elastic-carousel";
import { CgEreader } from "react-icons/cg";
import StarsRating from "react-star-rate";
import "../../../../src/App.css";

const TourSlider = ({ Data }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 5 },
  ];
  return (
    <Carousel
      enableAutoPlay
      autoPlaySpeed={2500}
      loop={Infinity}
      breakPoints={breakPoints}
    >
      {Data.length &&
        Data.map((data, index) => (
          <div
            key={index}
            className="min-w-xs m-3 h-[37rem] bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="/#">
              <img className="rounded-t-lg h-80 w-full" src={data.img} alt="" />
            </a>
            <div className="divide-y p-2">
              <div className="p-3">
                <div className="flex justify-between">
                  <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {data.title}
                  </h5>
                  <div className="text-2xl font-semibold">${data.price}</div>
                </div>
                <p className="flex items-center">
                  <span
                    className="-py-10"
                    style={{ fontSize: "5px !important" }}
                  >
                    <StarsRating
                      name="small-rating"
                      disabled={true}
                      size={3}
                      style={{ size: 30 }}
                      value={data.rate}
                    />
                  </span>
                  <span>{data.rate} Rating</span>
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {data.description}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {data.day} days {data.night} nights
                </p>
              </div>
              <div className="flex justify-between px-5 pt-1">
                <p className="flex items-center">
                  <span className="mr-1 ">
                    <CgEreader />
                  </span>
                  {data.area}
                </p>
                <button className="bg-green-400 px-3 p-1 text-white rounded">
                  Discover
                </button>
              </div>
            </div>
          </div>
        ))}
    </Carousel>
  );
};

export default TourSlider;
