import React from "react";
import Feature from "../../Components/ashraful.Component/feature/Feature.Com";
import HomeHeader from "../Header/HomeHeader";
import ShortCard from "./ShortCard/ShortCard";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <ShortCard />
      <Feature />
    </div>
  );
};

export default Home;
