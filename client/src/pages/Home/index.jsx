import Hero from '../../components/Hero';
import Inspiration from '../../components/Inspiration';
import Product from '../../components/Product'
import Products from '../../components/Products';
import Slider from '../../components/Slider';
import './index.scss'

const Home = () => {
    const contentData = [
        {
            name: "How to create a living room to love",
            date: "January 20, 2020",
            image: "Picture1.png",
            url:"/"
        },
        {
            name: "Solution for clean look working space",
            date: "January 10, 2020",
            image: "Picture1.png",
            url:"/"
        },
        {
            name: "Make your cooking activity more fun with good setup",
            date: "January 20, 2020",
            image: "Picture1.png",
            url:"/"
        },
        {
            name: "Gaming setup that will make you stay at home",
            date: "January 20, 2020",
            image: "Picture1.png",
            url:"/"
        },
    ];


  return (
    <div className='home-page'>
        <section className="hero">

            <span className="hero-background"></span>

            <Hero />

            <div className="advertisement">
                <h1>High-Quality{"\n"}Furniture Just{"\n"}For You</h1>
                <p>Our furniture is made from selected {"\n"}and best quality materials that are {"\n"}suitable for your dream home</p>
                <button className="btn-primary">Shop Now</button>
            </div>

        </section>

        <section className="shop-info">
            <div className="shop-info-item">
                <img src="HQ.svg" alt="High Quality" />
                <h3>High Quality</h3>
                <p>Crafted from top materials</p>
            </div>
            <div className="shop-info-item">
                <img src="Warranty.svg" alt="Warranty" />
                <h3>Warranty Protection</h3>
                <p>Over 2 years</p>
            </div>
            <div className="shop-info-item">
                <img src="Free-Shipping.svg" alt="Free Shipping" />
                <h3>Free Shipping</h3>
                <p>Order over $150</p>
            </div>

            <div className="shop-info-item">
                <img src="Support.svg" alt="Support" />
                <h3>24/7 Support</h3>
                <p>Dedicated support</p>
            </div>
        </section>

        <section>
            <Products />
        </section>

        <section className="inspirations">
            <Inspiration />
        </section>

        <section className='tips-and-tricks'>
            <h1>Tips and Tricks</h1>
            <Slider content={contentData} />
        </section>

    </div>
  )
}

export default Home