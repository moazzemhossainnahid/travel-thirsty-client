import React from 'react';

const HeroAbout = () => {
    return (
        <div className='py-20 px-10 w-screen mx-auto'>
            <h3 className="font-semibold text-xl py-5">SIMPLY AMAZING PLACES</h3>
            <h3 className="font-bold text-5xl py-7">A few words about us</h3>
            <div class="hero min-h-screen">
                <div class="hero-content flex flex-col lg:flex-row w-full mx-auto gap-5 text-left">
                    <div className='w-full lg:w-2/5 mx-auto'>
                        <h1 class="text-4xl font-bold font-serif py-5">Explore All Corners <br /> of The World With Us</h1>
                        <p class="py-2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p class="py-2">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <button class="btn btn-primary">Read More</button>
                    </div>
                    <div className="flex gap-5 w-full lg:w-3/5">
                    <img src="https://preview.colorlib.com/theme/passport/images/xabout_1.jpg.pagespeed.ic.Gfzq5iX5YJ.webp" alt='' class="max-w-sm w-52 md:w-fit mx-auto object-cover rounded-lg shadow-2xl" />
                    <img src="https://preview.colorlib.com/theme/passport/images/xabout_2.jpg.pagespeed.ic.HI2ci4yjSl.webp" alt='' class="max-w-sm w-52 md:w-fit mx-auto object-cover rounded-lg shadow-2xl lg:mt-16 lg:-mb-16" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroAbout;