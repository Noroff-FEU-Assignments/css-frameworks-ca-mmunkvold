import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Img1 from "../../images/carousel/carousel-1.jpg";
import Img2 from "../../images/carousel/carousel-2.jpg";
import Img3 from "../../images/carousel/carousel-3.jpg";

const CarouselHero = () => {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <img className="d-block w-100" src={Img1} alt="Close up of an old radio" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img2} alt="A lot of tv's on a wall mounter, a bike in front" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Img3} alt="A broken tv in a shabby room" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHero;
