import React from 'react'
import Slider from 'react-slick'

const Inspiration = () => {
    const products = [
        {
            id: 1,
            name: 'Bedroom',
            tag: 'Inner Peace',
            image: 'dummy1.png'
        },
        {
            id: 2,
            name: 'Side Room',
            tag: 'Family Time',
            image: 'dummy2.png'
        },
        {
            id: 3,
            name: 'Indoor',
            tag: 'Minimalist',
            image: 'dummy3.png'
        },
        {
            id: 4,
            name: 'Living Room',
            tag: 'Nature',
            image: 'dummy4.png'
        },
        {
            id: 5,
            name: "",
            tag: "",
            image: 'dummy'
        }
    ];

    const settings = {
        dots: true,
        infinite: false,
        speed: 250,
        slidesToScroll: 1,
        slidesToShow: 2,
        className: 'inspiration',
    };

  return (
    <>
        <div className="left">
            <h1>50+ Beautiful rooms {"\n"} inspiration</h1>
            <p>Our designer alreadt made a lot of beautiful {"\n"} prototipe of rooms that might inspire you</p>
            <button className="btn-primary">Explore more</button>
        </div>
        <Slider {...settings}>
            {products.map(product => (
                <div key={product.id} className='inspiration-item'>
                    <div className="image-container">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className='inspiration-details'>
                        <h1>{product.name}</h1>
                        <p>{product.tag}</p>
                    </div>
                </div>
            ))}
        </Slider>
    </>
  )
}

export default Inspiration