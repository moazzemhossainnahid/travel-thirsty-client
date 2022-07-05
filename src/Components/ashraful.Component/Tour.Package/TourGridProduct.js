import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { CgEreader } from "react-icons/cg";
import ReactStars from "react-rating-stars-component";
const TourGridProduct = ({ data }) => {
  return (
    <div className="col-span-1 flex flex-col">
      <div className=" min-w-xs m-3 group h-full bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <div className="relative">
          <p className="absolute h-full w-full insert-0 flex justify-center items-center">
            <span className=" group-hover:bg-white  opacity-0 group-hover:opacity-100 p-5 rounded-full ">
              <BiSearchAlt2 className="" />
            </span>
          </p>
          <a href="/#">
            <img className="rounded-t-lg h-80 w-full" src={data.img} alt="" />
          </a>
        </div>
        <div className="divide-y p-2">
          <div className="p-3">
            <div className="flex justify-between">
              <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {data.title}
              </h5>
              <div className="text-2xl font-semibold">${data.price}</div>
            </div>
            <p className="flex items-center py-2">
              <span className="-py-10" style={{ fontSize: "5px !important" }}>
                <ReactStars size="20" edit={false} value={data.rate} />
              </span>
              <span className="ml-2">{data.rate} Rating</span>
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data.description}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data.day} days {data.night} nights
            </p>
          </div>
          <div className="flex justify-between px-5 py-1">
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
    </div>
  );
};

export default TourGridProduct;
