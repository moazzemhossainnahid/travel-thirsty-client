import React from "react";
import Fade from "react-reveal/Fade";
import Count from "./Count";
const Statistics = () => {
  return (
    <div className="bg-gradient-to-tr from-purple-400 to-green-700 h-full w-full relative bg-cover bg-no-repeat bg-center ">
    <img src="https://images.hdqwalls.com/download/travel-hd-1366x768.jpg" alt="" className="h-screen w-full object-cover absolute mix-blend-overlay" />
      <div className="h-full flex py-20 px-10 justify-center items-center">
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
