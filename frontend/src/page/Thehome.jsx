  import React, { useRef, useEffect, useState } from 'react';
  import Nav from './Nav.jsx';
  import b from '../img/4.png';
  import './Home.css';
  import Gallery from './Gallery.jsx';
  import Offer from '../offer/Offers.jsx';
  import BestSellers from '../menu/BestSellers.jsx';
  import BookingSection from './BookTable.jsx';
  import Footer from './Footer.jsx';

  export default function Home({ addToCart }) {
    const bookingRef = useRef(null);
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const scrollToBooking = () => {
      bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
      const handleScroll = () => {
        const currentY = window.scrollY;
        if (currentY < lastScrollY) {
          setShowNav(true);
        } else {
          setShowNav(false);
        }
        setLastScrollY(currentY);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
      <div>
    
        <div className={`sticky-nav ${showNav ? 'visible' : 'hidden'}`}>
          <Nav />
        </div>

        <div className="slider">
          <img src={b} alt="Banner" />
          <div className="book">
            <h2>Enjoy Your Healthy</h2>
            <h2><span>Delicious Food</span></h2>
            <p>Open : 3 P.M. to 1 A.M.</p>
            <button onClick={scrollToBooking}>Book a Table</button>
          </div>
        </div>

        <div className="about2">
          {/* About Section */}
          <div className="about1">
            <div className="a1">
              <h6><i className="fa fa-3x fa-user-tie text-primary mb-4" /></h6>
              <h4>Master Chefs</h4>
              <p>Our Master Chef brings years of culinary expertise...</p>
            </div>
            <div className="a1">
              <h6><i className="fa fa-3x fa-utensils text-primary mb-4" /></h6>
              <h4>Quality Food</h4>
              <p>We believe in serving only the best...</p>
            </div>
            <div className="a1">
              <h6><i className="fa fa-3x fa-cart-plus text-primary mb-4" /></h6>
              <h4>Online Order</h4>
              <p>Enjoy hassle-free dining with our online ordering...</p>
            </div>
          </div>

          <div className="about-text">
            <h2>About our cafe</h2>
            <h2 className="j">Since - 2000</h2>
          </div>

          <div className="about-img">
            <div className="img">
              <Gallery />
            </div>
            <div className="text1">
              <h4>🌸 About Blue Lotus Café</h4>
              <h6>Established in the year 2000, Blue Lotus Café has become a beloved spot for food lovers seeking authentic flavors and a cozy ambiance. Renowned for our signature pizzas and indulgent thickshakes, we bring a perfect blend of taste, tradition, and creativity to every plate.</h6>
              <h6>At Blue Lotus, quality and satisfaction are at the heart of everything we do. In addition to our handcrafted pizzas and thickshakes, our diverse menu features crowd favorites like pasta, sandwiches, burgers, and more — all made with fresh ingredients and a passion for great food.</h6>
              <h6>Whether you're grabbing a quick bite, enjoying a meal with friends, or simply treating yourself, Blue Lotus Café is your go-to destination for delicious comfort food and warm hospitality.</h6>
              <div className="ex">
                <div className="exp">
                  <div className="exp1"><h3>25</h3></div>
                  <div className="exp2"><p>Years of</p><h5>Experience</h5></div>
                </div>
                <div className="expr">
                  <div className="expr1"><h3>5</h3></div>
                  <div className="expr2"><p>Popular</p><h5>Master Chefs</h5></div>
                </div>
              </div>
            </div>
          </div>

          <div className="offer">
            <Offer />
          </div>

          <div className="j">
            <BestSellers addToCart={addToCart} />
          </div>

          <div className="booking-home" ref={bookingRef}>
            <BookingSection />
          </div>
          <div className="footer">
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
