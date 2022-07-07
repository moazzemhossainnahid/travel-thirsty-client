<<<<<<< HEAD
import React from 'react';
import { Bounce, Flip, Roll, Slide, Zoom } from 'react-reveal';
import LightSpeed from 'react-reveal/LightSpeed';

const HeroAbout = () => {
    return (
        <div className='py-20 px-10 w-screen mx-auto'>
            <Zoom left><h3 className="font-semibold text-xl py-5">SIMPLY AMAZING PLACES</h3></Zoom>
            <Bounce right><h3 className="font-bold text-5xl py-7">A few words about us</h3></Bounce>
            <div class="hero min-h-screen">
                <div class="hero-content flex flex-col lg:flex-row w-full mx-auto gap-5 text-left">
                    <div className='w-full lg:w-2/5 mx-auto'>
                        <h1 class="text-4xl font-bold font-serif py-5"><Slide bottom>Explore All Corners of The World With Us</Slide></h1>
                        <p class="py-2"><Roll left>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</Roll></p>
                        <p class="py-2"><Roll right>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</Roll></p>
                        <button class="btn btn-primary"><Flip left>Read More</Flip></button>
                    </div>
                    <LightSpeed left>
                    <div className="flex gap-5 w-full lg:w-3/5">
                    <img src="https://preview.colorlib.com/theme/passport/images/xabout_1.jpg.pagespeed.ic.Gfzq5iX5YJ.webp" alt='' class="max-w-sm w-52 md:w-fit mx-auto object-cover rounded-lg shadow-2xl" />
                    <img src="https://preview.colorlib.com/theme/passport/images/xabout_2.jpg.pagespeed.ic.HI2ci4yjSl.webp" alt='' class="max-w-sm w-52 md:w-fit mx-auto object-cover rounded-lg shadow-2xl lg:mt-16 lg:-mb-16" />
                    </div>
                    </LightSpeed>
                </div>
            </div>
=======
import React from "react";
import { Bounce, Flip, Roll, Slide, Zoom } from "react-reveal";
import LightSpeed from "react-reveal/LightSpeed";

const HeroAbout = () => {
  return (
    <div className="py-10 px-10 w-screen mx-auto text-center bg-gray-100">
      <Zoom left>
        <h3 className="font-semibold text-xl">SIMPLY AMAZING PLACES</h3>
      </Zoom>
      <Bounce right>
        <h3 className="font-bold text-5xl py-3">A few words about us</h3>
      </Bounce>
      <div class="hero min-h-screen">
        <div class="hero-content flex flex-col lg:flex-row w-full mx-auto gap-5 text-left">
          <div className="w-full lg:w-2/5 mx-auto">
            <h1 class="text-4xl font-bold font-serif py-5">
              <Slide bottom>Explore All Corners of The World With Us</Slide>
            </h1>
            <p class="py-2">
              <Roll left>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </Roll>
            </p>
            <p class="py-2">
              <Roll right>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </Roll>
            </p>
            <button class="btn btn-primary">
              <Flip left>Read More</Flip>
            </button>
          </div>
          <LightSpeed left>
            <div className="flex gap-5 w-full lg:w-3/5">
              <img
                src="https://preview.colorlib.com/theme/passport/images/xabout_1.jpg.pagespeed.ic.Gfzq5iX5YJ.webp"
                alt=""
                class="max-w-sm w-52 md:w-fit mx-auto object-cover rounded-lg shadow-2xl"
              />
              <img
                src="https://preview.colorlib.com/theme/passport/images/xabout_2.jpg.pagespeed.ic.HI2ci4yjSl.webp"
                alt=""
                class="max-w-sm w-52 md:w-fit mx-auto object-cover rounded-lg shadow-2xl lg:mt-16 lg:-mb-16"
              />
            </div>
          </LightSpeed>
>>>>>>> 767d61e0da2274ea8751a8b49acb98c0b7ca84b5
        </div>
  );
};

export default HeroAbout;
