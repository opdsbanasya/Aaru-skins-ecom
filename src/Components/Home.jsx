import React from "react";
import Slider from "./Slider";
import LatestProduct from "./LatestProduct";
import Features from "./Features";
import Categories from "./Categories";


const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <LatestProduct  />
      <Features />
    </>
  );
};

export default Home;
