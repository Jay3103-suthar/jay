import React, { useState } from 'react';
import offers from './offersData'; // ✅ Make sure this is not being destructured
import './Offers.css';

export default function Offers({ applyOffer }) {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleOffers = () => {
    setShowAll(!showAll);
  };

  const handleApply = (offer, index) => {
    setSelected(index);
    if (offer.discount > 0) {
      applyOffer(offer.discount);
      alert(`✅ Offer applied: ${offer.discount}% OFF!`);
    } else {
      alert("🚫 This offer is not applicable as a cart discount.");
    }
  };

  const visibleOffers = showAll ? offers : offers.slice(0, 4);

  return (
    <div className="offers-container">
      <div className="offers-bg">
        <h2>🔥 Special Offers</h2>
        <div className="offers-grid">
          {visibleOffers.map((offer, index) => (
            <div className={`offer-box ${selected === index ? 'applied' : ''}`} key={index}>
              <p>{offer.text}</p> 
              <button onClick={() => handleApply(offer, index)}>
                {selected === index ? '✅ Applied' : 'Apply'}
              </button>
            </div>
          ))}
        </div>
        <button className="show-btn" onClick={toggleOffers}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
 