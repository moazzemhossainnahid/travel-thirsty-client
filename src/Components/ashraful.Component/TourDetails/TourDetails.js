import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { CgEreader } from "react-icons/cg";
import ReactPlayer from "react-player";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import UseHook from "../../ashraful.Component/UseHooks/UseHooks";
import Loading from "../../Loading";
const TourDetails = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [singleD, setSingleData] = useState({});
  const [loading, setLoading] = useState(false);

  const { baseURL } = UseHook();
  const { id } = useParams();
  /*---------------------------------------------------------*/
  /*                 CAROUSEL BREAKPOINTS                    */
  /*---------------------------------------------------------*/

  /*---------------------------------------------------------*/
  /*                 Load DATA FROM DATABASE                 */
  /*---------------------------------------------------------*/
  useEffect(() => {
    setLoading(true);
    const fetchDataById = () => {
      return new Promise(async (resolve, reject) => {
        try {
          const result = await axios.get(
            `${baseURL}/tour/single-tour-plan?id=${id}`
          );
          const singleData = await result.data.data;
          if (singleData) {
            setLoading(false);
          }
          setSingleData(singleData);
          resolve(result);
        } catch (error) {
          console.log(error);
          reject(error);
        }
      });
    };
    fetchDataById();
  }, [id, baseURL]);

  return (
    <div className="p-2 mb-10">
      <div>{loading && <Loading />}</div>

      <div>
        <Carousel
          enableAutoPlay
          autoPlaySpeed={2500}
          loop={Infinity}
          // breakPoints={breakPoints}
        >
          {singleD?.images &&
            singleD.images.map((data, index) => (
              <div key={index}>
                <img className="w-screen" src={data} alt="" />
              </div>
            ))}
        </Carousel>
      </div>
      <div>
        <p className="text-lg">Our Best hotels & Rooms</p>
        <h3 className="text-4xl py-3 text-black-600 font-semibold">
          {singleD?.name}
        </h3>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 items-center">
          <div className="flex items-center text-lg">
            <span className="text-red-500 mr-2">
              <CgEreader />
            </span>{" "}
            {singleD?.address}
          </div>

          <div className="flex items-center">
            <ReactStars
              size="20"
              activeColor="red"
              color="gray"
              count={5}
              edit={false}
              value={singleD?.rating}
            />
            <span className="ml-2">{singleD?.rating} Rating</span>
          </div>
        </div>
        <div className="py-10">
          <p>{singleD?.description?.textOne}</p>
          <div className="grid grid-cols-1 gap-3 my-11 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {singleD?.description &&
              singleD?.description?.facilities.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
          </div>
          <p>{singleD?.description?.textTwo}</p>
        </div>
        <div className="my-6">
          <h3 className="text-3xl font-semibold">Take A Tour</h3>
          <div className="w-full flex justify-center">
            <ReactPlayer
              // width="60rem"
              // height={600}
              url="https://youtu.be/FWETuLvKhNA"
            />
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-semibold py-4">
            Check Availablility & Booking
          </h3>
          <div>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                <div className="mb-6">
                  <input
                    type="text"
                    id="name"
                    className="shadow-sm bg-gray-50
                   border border-gray-300 text-gray-900
                    text-sm rounded focus:ring-red-400
                     focus:border-red-400 block w-full
                      p-2.5 py-4 dark:bg-gray-700
                       dark:border-gray-600 
                       dark:placeholder-gray-400 
                       dark:text-white dark:focus:ring-blue-500
                        dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50
                   border border-gray-300 text-gray-900
                    text-sm rounded focus:ring-red-400
                     focus:border-red-400 block w-full
                      p-2.5 py-4 dark:bg-gray-700
                       dark:border-gray-600 
                       dark:placeholder-gray-400 
                       dark:text-white dark:focus:ring-blue-500
                        dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div className="mb-6 ">
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                      datepicker-autohide={true}
                      id="from_date"
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-red-400 focus:border-red-400 block w-full pl-10 p-2.5 py-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="From Date"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                      datepicker={true}
                      datepicker-autohide={true}
                      id="end_date"
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-red-400 focus:border-red-400 block w-full pl-10 p-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="End Date"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <select
                    id="default"
                    className="appearance-none border 
                    border-gray-300 text-gray-700 text-sm
                     rounded focus:ring-red-400 focus:border-red-400 block w-full py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option className="hover:bg-red-400" value="default">
                      Guest
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div className="mb-6">
                  <select
                    id="default"
                    className="appearance-none border py-4
                     border-gray-300 text-gray-700 text-sm rounded 
                     focus:ring-red-400 focus:border-red-400 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option className="hover:bg-red-400" value="default">
                      Children
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-red-500 hover:bg-white
                 hover:text-red-500 border-2 hover:border-red-500
                 focus:ring-4
                 focus:ring-red-500 font-medium rounded 
                 text-sm px-5 py-4 text-center dark:bg-blue-600 
                 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Check Validation
              </button>
            </form>

            <div className="my-20">
              <h3 className="text-2xl text-gray-800 mb-3 font-semibold pt-5">
                Reviews && Ratings
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
                    <ReactStars
                      size="20"
                      color="gray"
                      activeColor="red"
                      edit={false}
                      value={5}
                    />
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
                    <ReactStars
                      size="20"
                      color="gray"
                      activeColor="red"
                      edit={false}
                      value={4}
                    />
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
                    <ReactStars
                      size="20"
                      color="gray"
                      activeColor="red"
                      edit={false}
                      value={3}
                    />
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
                    <ReactStars
                      size="20"
                      color="gray"
                      activeColor="red"
                      edit={false}
                      value={2}
                    />
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
                    <ReactStars
                      size="20"
                      color="gray"
                      activeColor="red"
                      edit={false}
                      value={1}
                    />
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(1)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-4xl mt-20 font-bold">Related Tours</h2>
    </div>
  );
};

export default TourDetails;
