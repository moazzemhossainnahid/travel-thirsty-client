import React from "react";
import Fade from "react-reveal/Fade";
import Count from "./Count";
const Statistics = () => {
  return (
    <div className="py-24 px-8 w-full relative bg-cover bg-no-repeat bg-center bg-gradient-to-r from-[#2ebdc4] to-[#68e5b2]">
      <div className="h-full flex justify-center items-center">
        <div>
          <Fade left>
            <div className="text-center">
              <h2 className="text-6xl text-white mb-6">Some fun facts</h2>
              <p className="text-white">More than 100,000 websites hosted</p>
            </div>
          </Fade>
          <Fade right>
            <div>
              <ul className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-20 mt-24">
                <li className="text-center">
                  <h4 className="text-6xl text-white mb-6 font-bold">
                    <Count end="1000000"></Count>
                  </h4>
                  <p className="mt-3 text-2xl text-white">Happy Customers</p>
                </li>
                <li className="text-center">
                  <h4 className="text-6xl text-white mb-6 font-bold">
                    <Count end="40000"></Count>
                  </h4>
                  <p className="mt-3 text-2xl text-white">Destination Places</p>
                </li>
                <li className="text-center">
                  <h4 className="text-6xl text-white mb-6 font-bold">
                    <Count end="87000"></Count>
                  </h4>
                  <p className="mt-3 text-2xl text-white">Hotels</p>
                </li>
                <li className="text-center">
                  <h4 className="text-6xl text-white mb-6 font-bold">
                    <Count end="56400"></Count>
                  </h4>
                  <p className="mt-3 text-2xl text-white">Restaurant</p>
                </li>
              </ul>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
