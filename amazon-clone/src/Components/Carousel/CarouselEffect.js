import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data";
import classes from "./carousel.module.css";
const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoplay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItems) => {
          return <img src={imageItems} alt="" />;
        })}
      </Carousel>
      <div className={classes.hero_img}>
        <div></div>
      </div>
    </div>
  );
};

export default CarouselEffect;
