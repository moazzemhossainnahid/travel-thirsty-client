import React from "react";
import { ShortAbout } from "../../../Components/Data";
import ShortCardDetails from "./ShortCardDetails";
const ShortCard = () => {
  return (
    <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 -mt-10 mb-20">
      {ShortAbout.map((data, index) => (
        <ShortCardDetails data={data} key={index} />
      ))}
    </div>
  );
};

export default ShortCard;
