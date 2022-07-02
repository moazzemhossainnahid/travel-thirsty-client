import React from 'react';
import Authentication from './Authentication';
import IntNav from './IntNav';
import NavMobile from './NavMobile';

const Header = () => {


    return (
        <header
            className={`bg-white h-16 flex items-center fixed top-0 w-full text-dark z-10 px-3 transition-all duration-300`}
        >
            <div className='container mx-auto h-full flex items-center justify-between'>
                {/* logo */}
                <a className='flex items-center gap-1' href='/'>
                <img className="w-12" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_5_marketing_svg1.svg" alt='' /> <span className='text-3xl font-bold'>Travel Thirsty</span>
                </a>
                {/* nav */}
                <div className='hidden lg:block'>
                    <IntNav />
                </div>
                {/* Authentication */}
                <div className="">
                    <Authentication />
                </div>
                {/* nav mobile*/}
                <div className='lg:hidden'>
                    <NavMobile />
                </div>
            </div>

        </header>
    );
};

export default Header;