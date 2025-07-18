import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>Blue Lotus Café</h3>
          <p>📍 Vrindavan Resort Andhaj, Nadiad-Mahemdabad,<br />
            Arera, opp. HP Petrol Pump, Patiya, Andhaj,<br />
            Nadiad, Gujarat 387320</p>
          <p>📞 1234567891</p>
          <p>✉️ info@example.com</p>
          <p>🕒 Monday – Sunday: 11:00 PM to 11:00 AM</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/services">Cart</a></li>
            <li><a href="/#booking">Book Table</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i class="ri-facebook-circle-fill"></i></a>
            <a href="#"><i class="ri-instagram-fill"></i></a>
            <a href="#"><i class="ri-twitter-fill"></i></a>
            <a href="#"><i class="ri-youtube-fill"></i></a>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Blue Lotus Café. All rights reserved.
      </div>
    </footer>
  );
}
