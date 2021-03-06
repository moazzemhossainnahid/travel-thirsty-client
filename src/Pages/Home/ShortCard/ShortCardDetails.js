import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ShortCardDetails = ({ data }) => {
  const { icon, title, description } = data;
  return (
    <div className="card bg-base-300 shadow-xl p-3 hover:bg-primary hover:text-white group hover:-translate-y-2 hover:duration-300">
      <figure className="px-10 pt-10">
        <FontAwesomeIcon
          className="text-5xl text-primary group-hover:text-white"
          icon={icon}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ShortCardDetails;
