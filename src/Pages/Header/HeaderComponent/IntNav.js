<<<<<<< HEAD
import React from 'react';
import { Navigation } from '../../../Components/Data';
import {Link} from "react-router-dom";
=======
import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../../../Components/Data";
>>>>>>> 767d61e0da2274ea8751a8b49acb98c0b7ca84b5

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
