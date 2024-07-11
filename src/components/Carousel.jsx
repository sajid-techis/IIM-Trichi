import { Button, Card, Carousel } from "flowbite-react";
import React from "react";
import bannerImage1 from '../assets/Images/adminblock-img.jpg'
import bannerImage2 from '../assets/Images/banner2.jpg'
import bannerImage3 from '../assets/Images/banner3.jpg'
import bannerImage4 from '../assets/Images/banner4.png'
import bannerImage5 from '../assets/Images/banner5.png'

const CarouselComponent = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-96 2xl:h-96 rounded-none">
      <Carousel className="carousel">
        <img
          src={bannerImage1}
          alt="Carousel 1"
        />
        <img
          src={bannerImage2}
          alt="Carousel 2"
        />
        <img
          src={bannerImage3}
          alt="Carousel 3"
        />
        <img
          src={bannerImage4}
          alt="Carousel 4"
        />
        <img
          src={bannerImage5}
          alt="Carousel 5"
        />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
