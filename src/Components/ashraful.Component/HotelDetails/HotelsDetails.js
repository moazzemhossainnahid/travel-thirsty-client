import axios from "axios";
import React, { useEffect, useState } from "react";
import { CgEreader } from "react-icons/cg";
import ReactPlayer from "react-player";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import hook from "../../ashraful.Component/UseHooks/UseHooks";
import Loading from "../../Loading";

const HotelsDetails = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
  };
  // const [startDate, setStartDate] = useState(new Date());
  const [singleD, setSingleData] = useState({});
  const [loading, setLoading] = useState(false);

  const { baseURL } = hook();
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
            `${baseURL}/hotels/get-one-hotel?id=${id}`
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
        <Slider {...settings}>
          {singleD?.images &&
            singleD.images.map((data, index) => (
              <div key={index}>
                <div className="p-2">
                  <img
                    className="w-screen lg:h-[34] xl:h-[40rem]"
                    src={data}
                    alt=""
                  />
                </div>
              </div>
            ))}
        </Slider>
      </div>
      <div>
        <p className="text-lg">Our Best hotels & Rooms</p>
        <h3 className="text-4xl py-3 text-black-600 font-semibold">
          {singleD?.name}
        </h3>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 items-center">
          <div className="flex items-center text-lg">
            <div className="text-red-500 mr-2">
              <CgEreader />
            </div>{" "}
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
              // readOnly
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
          <h3 className="text-3xl my-5 font-semibold">Our Rooms</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {singleD.rooms &&
              singleD.rooms.map((item) => (
                <div className="col-span-1 mb-10 flex flex-col">
                  <div className=" min-w-xs m-3 group h-full bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <img
                      className="rounded-t-lg h-80 w-full"
                      src={item?.image}
                      alt="coming"
                    />
                    <div className="divide-y p-2">
                      <div className="p-3">
                        <div className="flex justify-between">
                          <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {item.name}
                          </h5>
                          <div className="text-2xl font-semibold text-blue-400">
                            ${item.price}
                          </div>
                        </div>
                        <div className="flex justify-between py-2">
                          <p className="flex items-center">
                            <span
                              className="-py-10"
                              style={{ fontSize: "5px !important" }}
                            >
                              <ReactStars
                                size="20"
                                color="gray"
                                activeColor="red"
                                edit={false}
                                value={item?.rating}
                              />
                            </span>
                            <span className="ml-2">{item?.rating} Rating</span>
                          </p>
                          <p className=" font-semibold text-blue-400">/night</p>
                        </div>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          {item?.description}
                        </p>
                      </div>
                      <div className="flex justify-between px-5 py-1">
                        <p className="flex items-center">
                          <span className="mr-1 ">
                            <CgEreader />
                          </span>
                          {item?.city}
                        </p>
                        <button
                          // onClick={() => handleButton(data._id)}
                          className="bg-green-400 px-3 p-1 text-white rounded"
                        >
                          Booking
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
                  <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
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
                      datepicker-autohide
                      id="from_date"
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-red-400 focus:border-red-400 block w-full pl-10 p-2.5 py-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="From Date"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
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
                      datepicker-autohide
                      id="end_date"
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-red-400 focus:border-red-400 block w-full pl-10 p-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                Check Availablility
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
      <h2 className="text-4xl mt-20 font-bold">Related Hotels</h2>
    </div>
  );
};

export default HotelsDetails;
