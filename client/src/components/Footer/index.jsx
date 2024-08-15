import './style.scss'

const Footer = () => {
  return (
    <div className="footer">
        <div className="about">
            <h1>Furniro.</h1>
            <p>Worldwide furniture store since{"\n"}2020. We sell over 1000+ branded{"\n"}products on our website</p>
        </div>

        <div className="categories">
            <h1>Categories</h1>        
                <p>Chairs</p>
                <p>Tables</p>
                <p>Sofas</p>
                <p>Bedroom</p>
                <p>Office</p>            
        </div>

        <div className="information">
            <h1>Information</h1>        
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Privacy Popcy</p>
                <p>Terms & Conditions</p>            
        </div>

        <div className="follow">
            <h1>Follow Us</h1>        
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Youtube</p>            
        </div>
    </div>
  )
}

export default Footer