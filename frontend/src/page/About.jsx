import React, { useEffect, useState } from 'react';
import './About.css';
import Nav from '../page/Nav';
import Footer from '../page/Footer';

import img1 from '../img/6.avif';
import img2 from '../img/9.avif';
import img3 from '../img/7.avif';
import img4 from '../img/8.avif';
import img5 from '../img/6.avif';
import img6 from '../img/9.avif';
import img7 from '../img/7.avif';
import img8 from '../img/8.avif';

export default function About() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNav(currentY < lastScrollY || currentY < 10);
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="about-page">
      <div className={`sticky-nav ${showNav ? 'visible' : 'hidden'}`}>
        <Nav />
      </div>

      <div className="about-content">
        <h2>☕ Welcome to Blue Lotus Café</h2>
        <p>
          Blue Lotus Café is your cozy corner to relax, work, and indulge in delicious food.
          Since our opening in 2021, we've aimed to bring comfort, quality, and creativity to every meal we serve.
        </p>

        <p>
          Our menu is crafted with care—from artisanal coffee and wood-fired pizzas to refreshing beverages
          and indulgent desserts. Whether you're grabbing a quick bite or enjoying a meal with friends,
          Blue Lotus is here to serve you with warmth and flavor.
        </p>

        <p>
          We believe in sustainability, local ingredients, and supporting the community.
          Every cup of coffee you sip and every meal you enjoy helps us keep that vision alive.
        </p>

        <h3>📍 Location</h3>
        <p>
          Vrindavan Resort Andhaj, Nadiad-Mahemdabad Road,<br />
          Arera, Opp. HP Petrol Pump, Patiya, Andhaj, Nadiad, Gujarat 387320
        </p>

        <h3>⏰ Opening Hours</h3>
        <p>Monday to Sunday — 11:00 AM to 11:00 PM</p>

        <h3>📞 Contact Us</h3>
        <p>Call: 1234567891</p>
        <p>Email: info@example.com</p>

        <h3>📸 A Glimpse of Our Café</h3>
        <div className="about-gallery">
          {galleryImages.map((img, index) => (
            <img src={img} alt={`Gallery ${index + 1}`} key={index} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
