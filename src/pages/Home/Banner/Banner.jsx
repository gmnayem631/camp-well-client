import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/b1.png";
import bannerImg2 from "../../../assets/b2.png";
import bannerImg3 from "../../../assets/b3.png";

const Banner = () => {
  return (
    <Carousel
      stopOnHover={true}
      preventMovementUntilSwipeScrollTolerance={true}
      swipeScrollTolerance={10}
      interval={2500}
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      className="max-w-7xl mx-auto"
    >
      <div className="">
        <img src={bannerImg1} />
        <p className="legend font-semibold text-xl">
          Our last camp reached over 300 people, providing essential medicines
          and checkups.
        </p>
      </div>
      <div className="">
        <img src={bannerImg2} />
        <p className="legend font-semibold text-xl">
          Vaccinated 150 children in underprivileged communities, ensuring safer
          futures.
        </p>
      </div>
      <div className="">
        <img src={bannerImg3} />
        <p className="legend font-semibold text-xl">
          Distributed over 100 glasses to those in need, improving lives
          instantly.
        </p>
      </div>
    </Carousel>
  );
};

export default Banner;
