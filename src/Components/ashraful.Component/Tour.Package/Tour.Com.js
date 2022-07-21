import axios from "axios";
import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import TourSlider from "../../ashraful.Component/AllCarouselSlider/TourSlider";
import Loading from "../../Loading";
import UseHooks from "../UseHooks/UseHooks";
const Tour = () => {
  const [tourData, setTourData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { baseURL } = UseHooks();
  useEffect(() => {
    setLoading(true);
    setTimeout(async () => {
      await axios.get(`${baseURL}/tour/all-tour-plan`).then((data) => {
        const allTour = data.data.data;
        console.log(allTour);
        if (allTour) {
          setLoading(false);
        }
        setTourData(allTour);
      });
    }, 1500);
  }, [baseURL]);
  return (
    <div className="bg-[#F8FAFF] py-16">
      <Fade right>
        <div className="container px-8 mx-auto mb-5">
          <h5 className="text-lg">Special Offers</h5>
          <h2 className="text-3xl py-5">
            <span className="font-bold">Top</span> Tour Packages
          </h2>
        </div>
      </Fade>
      {loading && <Loading />}
      <Fade bottom>
        <div className="px-8">
          {tourData.length && <TourSlider Data={tourData} />}
        </div>
      </Fade>
    </div>
  );
};

export default Tour;
