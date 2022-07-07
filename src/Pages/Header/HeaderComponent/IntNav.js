import React from 'react';
import { Navigation } from '../../../Components/Data';
import {Link} from "react-router-dom";

const IntNav = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {Navigation.map((item, idx) => {
          return (
            <li
              className={`text-black text-xl font-semibold hover:text-secondary cursor-pointer`}
              key={idx}
            >
              <Link
                to={item.href}
                activeclass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default IntNav;
