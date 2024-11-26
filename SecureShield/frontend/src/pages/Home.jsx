import React from "react";
import CarouselFade from "../components/HomeLayouts/Carousel";
import Cards from "../components/HomeLayouts/Cards";

const Home = () => {
  return (
    <div className="carosel-home ">
      <CarouselFade></CarouselFade>
      <Cards></Cards>
    </div>
  );
}
export default Home;