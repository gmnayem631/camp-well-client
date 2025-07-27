import React from "react";
import Banner from "./Banner/Banner";
import PopularCamps from "./PopularCamps/PopularCamps";
import camps from "../../../public/camps.json";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularCamps camps={camps}></PopularCamps>
    </div>
  );
};

export default Home;
