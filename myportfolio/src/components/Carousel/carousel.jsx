import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.styles.css";
import Slide1 from "../../images/carousel/key.jpg";
import Slide2 from "../../images/carousel/lilliput.jpg";
import Slide3 from "../../images/carousel/BLACKTXT.jpg";

const MyCarousel = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-size"
            src={Slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-size"
            src={Slide2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-size"
            src={Slide3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
