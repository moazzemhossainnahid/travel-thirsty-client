import React from 'react';
import Nav from './Nav';
import NavMobile from './NavMobile';

const Header = () => {

    return (
            <header
                className={`bg-white h-16 flex items-center fixed top-0 w-full text-dark bg-transparent z-10 px-3 transition-all duration-300`}
            >
                <div className='container mx-auto h-full flex items-center justify-between'>
                    {/* logo */}
                    <a className='flex items-center gap-1' href='#home'>
                        <img className="w-16" src="" alt='' /> <span className='text-3xl font-bold'>Travel Thirsty</span>
                    </a>
                    {/* nav */}
                    <div className='hidden lg:block'>
                        <Nav />
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