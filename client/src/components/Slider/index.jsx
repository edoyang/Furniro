import React from 'react'
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Slider = ({ content }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 750,
    swipeToSlide: true,
    variableWidth: true,
    dots: true,
    arrows: true,
  };

  return (
    <SlickSlider {...settings}>
      {content.map((item, index) => (
        <Link to={item.url} className="content" key={index}>
          <div className="image-container">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="content-details">
            <h1>{item.name}</h1>
            <h4>{item.date}</h4>
          </div>
        </Link>
      ))}
    </SlickSlider>
  )
}

export default Slider;