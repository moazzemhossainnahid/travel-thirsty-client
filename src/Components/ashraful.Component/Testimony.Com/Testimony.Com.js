import React from "react";

const Testimony = () => {
  return (
    <div className="bg-[#F8FAFF]">
      <div className="container mx-auto">
        <div className="h-[40rem] grid gap-10 grid-cols-2 justify-center items-center">
          <div>
            <h2 className="text-gray-400 text-lg">Best Directory Website</h2>
            <h2 className="py-2 text-4xl">
              <span className="font-bold">Why</span> Choose Us?
            </h2>
            <p className="text-gray-400">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
              <br />
              <br />
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life.
            </p>
            <button className="border border-red-600 rounded-full py-3 px-5 mt-5 text-lg font-semibold text-red-600 hover:text-white hover:bg-red-600">
              Read more
            </button>
          </div>
          <div>
            <h2 className="text-gray-400">Testimony</h2>
            <h2 className="text-4xl">
              <span className="font-bold">Our</span> Guests Says
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
