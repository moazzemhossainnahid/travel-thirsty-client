import React from "react";
import ReactStars from "react-rating-stars-component";
import RangeSlide from "./RangeSlide";
const Sidebar = () => {
  return (
    <div className="col-span-1 bh-white px-4 pb-6 mt-3 shadow-lg border rounded-md overflow-hidden">
      <div className="divide-y divide-gray-200 space-y-5">
        <div>
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-bold pt-5">
            Find City
          </h3>

          <div className="flex items-center">
            <form className="w-full space-y-5">
              <input
                className="shadow appearance-none rounded w-full py-3 px-3
                   text-gray-700 leading-tight border border-slate-300 
                   focus:outline-none focus:border-red-400 focus:ring-1
                    focus:ring-red-400 "
                name="city"
                type="text"
                placeholder="Destination, City"
              />
              <select
                id="default"
                className="shadow appearance-none border border-gray-300 text-gray-700 text-sm rounded focus:ring-red-400 focus:border-red-400 block w-full py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option className="hover:bg-red-400" value="default">
                  Select Location
                </option>
                <option value="USA">San Francisco USA</option>
                <option value="GR">Berlin Germany</option>
                <option value="UK">London Uk</option>
                <option value="It">Paris Italy</option>
              </select>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  datepicker
                  datepicker-buttons
                  type="text"
                  className="shadow appearance-none py-3 border border-gray-300 text-gray-700
                     sm:text-sm rounded focus:ring-red-400 focus:border-red-400 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="From date"
                />
              </div>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  datepicker
                  datepicker-buttons
                  type="text"
                  className="shadow appearance-none py-3 border
                     border-gray-300 text-gray-700 
                     sm:text-sm rounded focus:ring-red-400 
                     focus:border-red-400 block w-full pl-10 p-2.5  
                     dark:bg-gray-700 dark:border-gray-600 
                     dark:placeholder-gray-400 dark:text-white
                      dark:focus:ring-blue-500 
                      dark:focus:border-blue-500"
                  placeholder="End date"
                />
              </div>
              <div>
                <RangeSlide />
              </div>
              <br />
              <button
                type="submit"
                className="bg-red-500 h-14
                 text-white w-full rounded hover:bg-white hover:text-red-400
                  hover:border hover:border-red-500 
                 "
              >
                Search
              </button>
            </form>
          </div>
        </div>
        {/* Review */}
        <div>
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium pt-5">
            Review Rate
          </h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                name=""
                id="cat-5"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="cat-5"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                <ReactStars size="20" edit={false} value="5" />
              </label>
              <div className="ml-auto text-gray-600 text-sm">(5)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name=""
                id="cat-4"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="cat-4"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                <ReactStars size="20" edit={false} value="4" />
              </label>
              <div className="ml-auto text-gray-600 text-sm">(4)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name=""
                id="cat-3"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="cat-3"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                <ReactStars size="20" edit={false} value="3" />
              </label>
              <div className="ml-auto text-gray-600 text-sm">(3)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name=""
                id="cat-2"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="cat-2"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                <ReactStars size="20" edit={false} value="2" />
              </label>
              <div className="ml-auto text-gray-600 text-sm">(2)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name=""
                id="cat-1"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="cat-1"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                <ReactStars size="20" edit={false} value="1" />
              </label>
              <div className="ml-auto text-gray-600 text-sm">(1)</div>
            </div>
          </div>
        </div>
        {/* price */}
        {/* <div>
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium pt-5">
            Price
          </h3>

          <div className="slider">
            <div className="progress"></div>
          </div>
          <div className="relative bg-slate-300 rounded h-3 slider">
            <div className="bg-primary ml-16 mr-16 h-3 rounded  progress"></div>
          </div>
          <div className="range-input">
            <input
              type="range"
              className="range-min"
              min="0"
              max="10000"
              // value="2500"
              step="100"
            />
            <input
              type="range"
              className="range-max"
              min="0"
              max="10000"
              // value="7500"
              step="100"
            />
          </div>

          <div className="pt-5 price-input">
            <div className="h-10 w-full flex items-center field">
              <input
                type="number"
                className="w-full h-full focus:outline-none focus:ring-0 focus:border-primary rounded mr-2 input-min"
                value="2500"
              />
            </div>
            <div className="pt-2 separator"> ~ </div>
            <div className="h-10 w-full flex items-center field">
              <input
                type="number"
                className="w-full h-full focus:outline-none focus:ring-0 focus:border-primary rounded ml-2 input-max"
                value="7500"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
