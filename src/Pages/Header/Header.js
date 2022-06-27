import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import NavMobile from './NavMobile';

const Header = () => {
    const [bg, setBg] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', () => {
        return window.scrollY > 50 ? setBg(true) : setBg(false);
      });
    });
  
    return (
      <header
        className={`${bg ? 'bg-tertiary h-16' : 'h-20'
          } flex items-center fixed top-0 w-full text-dark bg-slate-200 z-10 px-3 transition-all duration-300`}
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