import React, { useState } from 'react';
import menuItems from '../data/menuData';
import './FilteredMenu.css'; 

export default function BestSellers({ addToCart }) {
  const [showMsg, setShowMsg] = useState(false);

  const bestSellers = menuItems.filter(item => item.best);

  const handleAddToCart = (item) => {
    addToCart(item);
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 2000);
  };

  return (
    <div className="menu-page">
      <h2>🔥 Best Sellers</h2>

      {showMsg && (
        <div className="popup-overlay">
          <div className="popup-msg">✅ Added to cart!</div>
        </div>
      )}

      <div className="menu-grid">
        {bestSellers.map(item => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <div className="price-cart-row">
              <p><strong>₹{item.price}</strong></p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
