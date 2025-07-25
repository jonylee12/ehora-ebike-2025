import React from 'react';
import Slider from 'react-slick';
import './OrderStepsCarousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const steps = [
  {
    title: "Payment",
    image: "/steps/payment.png"
  },
  {
    title: "Confirmation",
    image: "/steps/confirmation.png"
  },
  {
    title: "Shipping",
    image: "/steps/shipping.png"
  },
  {
    title: "Delivery",
    image: "/steps/delivery.png"
  }
];

const OrderStepsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="order-carousel">
      <Slider {...settings}>
        {steps.map((step, i) => (
          <div className="step-slide" key={i}>
            <img src={step.image} alt={step.title} />
            <h3 className="step-title">{step.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OrderStepsCarousel;
