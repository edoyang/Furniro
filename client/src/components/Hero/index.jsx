import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";

function CenterMode() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/products`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data.slice(0, 4));
            setLoading(false);
          } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    fetchProducts();
  }, []);

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
    arrows: false,
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      {loading ? (
        <div className="loading">
        </div>
      ) : (
        <div className="slider-container">
        <div className="buttons">
          <button className="prev" onClick={handlePrev}><img src="left.svg" alt="Previous" /></button>
          <button className="next" onClick={handleNext}><img src="right.svg" alt="Next" /></button>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {products.map(product => (
              <div key={product.id} className="product">
                <div className="image-container">
                  <img src="Picture1.png" alt={product.name} />
                </div>
                <div className="product-details">
                  <h1>{product.name}</h1>
                  <p>{product.description}</p>
                  <h4>${product.price}</h4>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
      )}
    </>
  );
}

export default CenterMode;