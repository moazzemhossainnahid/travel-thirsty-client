import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import NavMobile from './NavMobile';

const HomeHeader = () => {
    const [bg, setBg] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        });
    });

    return (
        <div className="bg-gradient-to-tr from-purple-400 to-green-700 h-screen w-full bg-cover bg-center">
            <img src="https://i.ibb.co/L98m2Qc/xhero-1-jpg-pagespeed-ic-DUdgc-Mb-Ja5.webp" alt="" className="h-screen w-full object-cover absolute mix-blend-overlay" />
            <header
                className={`${bg ? 'bg-white h-16' : 'h-20 text-white'
                    } flex items-center fixed top-0 w-full text-dark bg-transparent z-10 px-3 transition-all duration-300`}
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
        </div>
    );
};

export default HomeHeader;