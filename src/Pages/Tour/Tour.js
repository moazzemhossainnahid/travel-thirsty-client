import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/ashraful.Component/Tour.Package/Sidebar";
import TourGridProduct from "../../Components/ashraful.Component/Tour.Package/TourGridProduct";
import tourDatas from "../../Services/tourData.json";
// import _ from "lodash";
import TourHeader from "../Header/TourHeader";
const Tour = () => {
  const [tourData, set_tourData] = useState([]);
  const [paginatedData, set_paginatedData] = useState([]);
  const [currentPage, set_currentPage] = useState(1);

  const pageSize = 6;
  /* ----------------------------------------------------------------*/
  /*                      LOAD ALL TOUR DATA START                   */
  /* ----------------------------------------------------------------*/
  useEffect(() => {
    set_tourData(tourDatas);
  }, []);
  /* ----------------------------------------------------------------*/
  /*                      LOAD ALL TOUR DATA END                     */
  /* ----------------------------------------------------------------*/

  return (
    <div className="">
      <TourHeader />
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-5 gap-5">
          <div>
            <Sidebar />
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              {tourData.length &&
                tourData.map((data, index) => (
                  <TourGridProduct data={data} key={index} />
                ))}
            </div>
            {/* Pagination */}
            <div className="my-8 float-right">
              <nav aria-label="Page navigation">
                <ul class="inline-flex space-x-2">
                  <li>
                    <button class="flex mr-3 items-center justify-center w-10 h-10 text-red-600 transition-colors duration-150 rounded-full focus:shadow-outline ring-1 ring-red-300 bg-red-100 hover:bg-red-500 hover:text-white">
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button class="w-10 h-10 text-red-600 transition-colors duration-150 rounded-full bg-red-100 hover:bg-red-500 hover:text-white focus:shadow-outline ring-1 ring-red-300 ">
                      1
                    </button>
                  </li>
                  <li>
                    <button class="w-10 h-10 text-indigo-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-indigo-100">
                      2
                    </button>
                  </li>
                  <li>
                    <button class="w-10 h-10 text-white transition-colors duration-150 bg-indigo-600 border border-r-0 border-indigo-600 rounded-full focus:shadow-outline">
                      3
                    </button>
                  </li>
                  <li>
                    <button class="flex items-center ml-3 justify-center w-10 h-10 text-red-600 transition-colors duration-150  rounded-full focus:shadow-outline ring-1 ring-red-300 bg-red-100 hover:bg-red-500 hover:text-white">
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
              <div date-rangepicker class="flex items-center">
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
                    name="start"
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date start"
                  />
                </div>
                <span class="mx-4 text-gray-500">to</span>
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
                    name="end"
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date end"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
