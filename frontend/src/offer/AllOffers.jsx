import React from 'react';
import { useNavigate } from 'react-router-dom';
import offers from './offersData';
import './Offers.css';
import Nav from '../page/Nav';
import Footer from '../page/Footer';

export default function AllOffers({ applyOffer }) {
  const navigate = useNavigate();

  const handleOfferClick = (offer) => {
    if (offer.discount > 0) {
      applyOffer(offer.discount);
    }
    navigate('/menu', { state: { offer } });
  };

  return (
    <div className="main1">
    <div className="offers-container">
      <Nav />
      <h2>🎉 All Offers at Blue Lotus</h2>
      <div className="offers-grid">
        {offers.map((offer, index) => (
          <div
            className="offer-box"
            key={index}
            onClick={() => handleOfferClick(offer)}
          >
            <p>{offer.text}</p>
            <small>👉 Tap to use this offer</small>
          </div>
        ))}
      </div>
      
    </div>
    <div className="foo2">
      <Footer/></div>
    </div>
  );
}