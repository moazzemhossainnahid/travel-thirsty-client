import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Authentication from './Authentication';
import Nav from './Nav';
import NavMobile from './NavMobile';

const TourHeader = () => {
    const [bg, setBg] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        });
    });

    return (
        <div className="bg-gradient-to-tr from-purple-400 to-green-700 h-screen w-full bg-cover bg-center">
            <img src="https://cdn.wallpapersafari.com/60/80/drGUFc.jpg" alt="" className="h-screen w-full object-cover absolute mix-blend-overlay" />
            <div class="breadcrumbs flex flex-col justify-center items-center h-screen w-full text-white text-2xl font-bold">
                <ul className='flex-row'>
                    <li className=''><Link to="/">Home</Link></li>
                    <li className=''><Link to="/tour">Tour</Link></li>
                </ul>
                <div className="flex-col py-5">
                    <h3 className="text-8xl font-bold">Tour</h3>
                </div>
            </div>
            <header
                className={`${bg ? 'bg-white h-16' : 'h-20 text-white'
                    } flex items-center fixed top-0 w-full text-dark z-10 px-3 transition-all duration-300`}
            >
                <div className='container mx-auto h-full flex items-center justify-between'>
                    {/* logo */}
                    <a className='flex items-center gap-1' href='/'>
                    <img className="w-12" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_5_marketing_svg1.svg" alt='' /> <span className='text-3xl font-bold'>Travel Thirsty</span>
                    </a>
                    {/* nav */}
                    <div className='hidden lg:block'>
                        <Nav />
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
        </div>
    );
};

export default TourHeader;