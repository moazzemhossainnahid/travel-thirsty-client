import axios from "axios";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import TourGridProduct from "../../Components/ashraful.Component/AllProducts/TourGridProduct";
import Sidebar from "../../Components/ashraful.Component/Tour.Package/Sidebar";
import UseHooks from "../../Components/ashraful.Component/UseHooks/UseHooks";
import Loading from "../../Components/Loading";
import TourHeader from "../Header/HeaderBanner/TourHeader";
const Tour = () => {
  const [allTour_D, set_allTour_D] = useState([]);
  const [paginatedData, set_paginatedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, set_currentPage] = useState(1);
  const { baseURL } = UseHooks();

  const pageSize = 6;
  /* ----------------------------------------------------------------*/
  /*                      LOAD ALL TOUR DATA START                   */
  /* ----------------------------------------------------------------*/
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        await axios.get(`${baseURL}/tour/all-tour-plan`).then((data) => {
          const allData = data.data.data;
          console.log(allData);
          if (allData) {
            setLoading(false);
          }
          set_allTour_D(allData);
          set_paginatedData(_(allData).slice(0).take(pageSize).value());
          console.log(allData);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [baseURL]);

  /* ----------------------------------------------------------------*/
  /*                  PAGINATION FUNCTIONALITY START                 */
  /* ----------------------------------------------------------------*/
  const pageCount = allTour_D ? Math.ceil(allTour_D.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const handlePagination = (pageno) => {
    set_currentPage(pageno);
    const startIndex = (pageno - 1) * pageSize;
    const paginateData = _(allTour_D).slice(startIndex).take(pageSize).value();
    set_paginatedData(paginateData);
  };

  /* ----------------------------------------------------------------*/
  /*                  PAGINATION FUNCTIONALITY END                   */
  /* ----------------------------------------------------------------*/

  return (
    <div className="">
      <TourHeader />
      <div className="bg-gray-100">
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 lg:gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
            <div className="md:mb-3">
              <Sidebar />
            </div>
            <div className="col-span-3">
              <Outlet />
              <div>{loading && <Loading />}</div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {paginatedData.length &&
                  paginatedData.map((data, index) => (
                    <TourGridProduct data={data} key={index} />
                  ))}
              </div>
              {/* Pagination */}
              <div className="my-8 mr-2 float-right">
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
                    {pages.map((number, index) => (
                      <li
                        key={index}
                        onClick={() => handlePagination(number)}
                        className="w-10 h-10 flex items-center justify-center 
                      text-red-600 transition-colors
                       duration-150 rounded-full bg-red-100 hover:bg-red-300 hover:text-white focus:shadow-outline ring-1 ring-red-300 "
                      >
                        <button
                          className={
                            number === currentPage
                              ? "bg-red-500 w-10 h-10 rounded-full text-white"
                              : ""
                          }
                        >
                          {number}
                        </button>
                      </li>
                    ))}

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
