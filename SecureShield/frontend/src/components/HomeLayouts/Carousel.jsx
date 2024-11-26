import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Carousel.css';

const CarouselFade = () => {
  return (
    <Carousel fade>
      <Carousel.Item className="image-1">
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/insurance_1.jpg`}
          alt="First slide"
          style={{ width: '100%', height: '670px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3 className="header-details">Tailored Insurance Solutions</h3>
          <p className="slides-details">Get personalized insurance plans that fit your unique needs. Our experts are here to help you find the best coverage.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="image-1">
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/insurance_2.jpg`}
          alt="First slide"
          style={{ width: '100%', height: '670px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3 className="header-details">Comprehensive Coverage Plans</h3>
          <p className="slides-details">Protect your future with our all-inclusive insurance plans. From health to home, we've got you covered.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="image-1">
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/insurance_3.jpg`}
          alt="First slide"
          style={{ width: '100%', height: '670x', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3 className="header-details">Reliable Support Anytime</h3>
          <p className="slides-details">Enjoy peace of mind with our 24/7 customer support. We're always here to assist you with any claims or inquiries.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
