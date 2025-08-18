import React from "react";
import Banner from "./Banner/Banner";
import PopularCamps from "./PopularCamps/PopularCamps";
import HowItWorks from "../../Components/HowItWorks";
import Categories from "../../Components/Categories";
import Testimonials from "../../Components/Testimonials";
import UpcomingCamps from "../../Components/UpcomingCamps";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularCamps></PopularCamps>
      <HowItWorks></HowItWorks>
      <Categories></Categories>
      <Testimonials></Testimonials>
      <UpcomingCamps></UpcomingCamps>
    </div>
  );
};

export default Home;
